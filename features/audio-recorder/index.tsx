import { Fragment, useState, useLayoutEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Box, Button, CircularProgress, Flex } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from '../transcription/helpers/queryVietTranscription'
import queryVietGeneration from '@/features/dictation/helpers/queryVietGeneration'
import AudioVisualizer from './AudioVisualizer'
import convertWebmToWAV from './helpers/convertWebmToWAV'
const mimeType = 'audio/webm'
const PENDING_PLACEHOLDER = 'Transcribing ...'
const STARTING_POINT_PLACEHOLDER = 'Transcription will appear here.'
const isPending = (text) => text == PENDING_PLACEHOLDER
const hasYetToQueryEndpoint = (text) => text == STARTING_POINT_PLACEHOLDER

type StreamInfo = {
  stream: MediaStream
  tracks: MediaStreamTrack[] // Audio Input Track only (every has kind=="microphone")
  context: MediaStreamAudioSourceNode
}

const AudioControls = (): ReactElement => {
  // const [stream, setStream] = useState<MediaStream | null>(null)

  const inProgressData = useRef<Blob[] | null>(null)

  const recorder = useRef<MediaRecorder | null>(null)
  const [recordingStatus, setRecordingStatus] = useState<string>('inactive')
  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([])
  const [audio, setAudio] = useState<string | null>(null)

  const [readAloudAudio, setReadAloudAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string>(STARTING_POINT_PLACEHOLDER)

  const [streamInfo, setStreamInfo] = useState<StreamInfo | null>(null)

  useLayoutEffect(() => {
    const getStreamInfo = async () => {
      if ('MediaRecorder' in window) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
          })
          const audioTracks = stream.getAudioTracks()
          const audioSource = new AudioContext().createMediaStreamSource(stream)
          return {
            stream: stream,
            tracks: audioTracks,
            context: audioSource,
          }

          // setStream(streamData)
        } catch (err) {
          console.info(err)
          console.trace(err)
          return null
        }
      } else {
        alert('The MediaRecorder API is not supported in your browser.')
      }
    }

    const info: StreamInfo = getStreamInfo()
    setStreamInfo(info)
  }, [streamInfo])

  useLayoutEffect(() => {
    const handleConversion = async () => {
      // Must convert the webm audioBlob to a WAV blob
      const audioBlob = new Blob(audioChunks, { type: mimeType })
      const wavBlob = await convertWebmToWAV(audioBlob)
      const wavURL = URL.createObjectURL(wavBlob)
      setAudio(wavURL)
      setAudioChunks([])
    }
    recorder?.current.onstop = async () => {
      await handleConversion()
    }
  }, [audioChunks, recorder])

  //Define controller functions for recording
  const startRecording = useCallback((): void => {
    if (isNull(streamInfo.stream)) return
    setRecordingStatus('recording')
    // MediaStream only supports recording in webm
    if (recorder) {
      recorder.current = recorder ? new MediaRecorder(stream, { mimeType }) : null
      recorder.current.start()
      const localAudioChunks: Blob[] = []
      inProgressData.current = localAudioChunks
      recorder.current.ondataavailable = (event) => {
        if (typeof event.data === 'undefined' || event.data.size === 0) return
        localAudioChunks.push(event.data)
      }
      setAudioChunks(localAudioChunks)
    } else {
      alert('No stream to record yet')
    }
  }, [streamInfo])

  const stopRecording = useCallback((): void => {
    if (recorder && streamInfo) {
      const { context, stream, tracks } = streamInfo
      setRecordingStatus('inactive')
      recorder?.current.stop()
      tracks.forEach((track) => {
        if (track.readyState == 'live') {
          track.stop()
          stream.removeTrack(track)
        }
      })
      context.disconnect()
    }
  }, [streamInfo])

  const handleSTTQueryRequest = useCallback(async (): Promise<void> => {
    if (audio) {
      setTranscription(PENDING_PLACEHOLDER)
      const wavBlob: Blob = await fetch(audio).then((r) => r.blob())
      const wavBytes = await wavBlob.arrayBuffer()
      const response = await queryVietTranscription(wavBytes)
      setTranscription(response.text)
    }
  }, [audio])

  const handleTTSQueryRequest = useCallback(async (): Promise<void> => {
    if (audio) {
      const buffer = await queryVietGeneration(transcription)
      const rawAudioBlob = new Blob([buffer], { type: 'audio/wav' })
      const rawAudioUrl = URL.createObjectURL(rawAudioBlob)
      setReadAloudAudio(rawAudioUrl)
    }
  }, [audio, transcription])

  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <Flex w={'100vw'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Flex
          margin={8}
          w={'50vw'}
          background={'gray.100'}
          padding={8}
          rounded={6}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Flex direction={'column'} alignItems={'center'}>
            <>
              {recordingStatus === 'inactive' ? (
                <Button
                  colorScheme={'green'}
                  margin={16}
                  padding={8}
                  id='recording-button'
                  onClick={startRecording}
                >
                  Start Recording
                </Button>
              ) : null}
              {!isNull(audio) && recordingStatus === 'inactive' ? (
                <>
                  <a download id='download-button' href={audio}>
                    Recorded Audio
                  </a>
                  <audio src={audio} controls id='playback-sample'>
                    <track kind='captions' />
                  </audio>
                </>
              ) : null}
            </>
            {recordingStatus === 'recording' ? (
              <Button
                colorScheme={'red'}
                margin={16}
                padding={8}
                id='recording-button'
                onClick={stopRecording}
              >
                Stop Recording
              </Button>
            ) : null}
            {recordingStatus === 'recording' && stream ? <AudioVisualizer stream={stream} /> : null}
          </Flex>
        </Flex>
        {!isNull(audio) && (
          <Button
            id='query-button'
            margin={8}
            padding={8}
            onClick={handleSTTQueryRequest}
            disabled={isPending(transcription)}
          >
            {isPending(transcription) ? (
              <CircularProgress isIndeterminate color='green.300' />
            ) : (
              'Query Inference API'
            )}
          </Button>
        )}
        {!isNull(audio) && (
          <Box
            id='transcription'
            placeholder='Transcription'
            w={500}
            background='gray.100'
            rounded={6}
            padding={4}
            margin={8}
          >
            {transcription}
          </Box>
        )}
        {!isNull(audio) && !hasYetToQueryEndpoint(transcription) ? (
          <>
            <Button margin={8} padding={8} id='tts-button' onClick={handleTTSQueryRequest}>
              Text To Speech
            </Button>
            <audio src={readAloudAudio ? readAloudAudio : undefined} controls id='playback-sample'>
              <track kind='captions' />
            </audio>
          </>
        ) : null}
      </Flex>
    </Flex>
  )
}

export default AudioControls
