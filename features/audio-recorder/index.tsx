import { Fragment, useState, useLayoutEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Box, Button, CircularProgress, Flex } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from '../transcription/helpers/queryVietTranscription'
import queryVietGeneration from '@/features/dictation/helpers/queryVietGeneration'
import AudioVisualizer from './AudioVisualizer'
import convertWebmToWAV from './helpers/convertWebmToWAV'
import { StreamInfo } from './types/AudioRecorderTypes'

const mimeType = 'audio/webm'
const PENDING_PLACEHOLDER = 'Transcribing ...'
const STARTING_POINT_PLACEHOLDER = 'Transcription will appear here.'
const isPending = (text) => text == PENDING_PLACEHOLDER
const hasYetToQueryEndpoint = (text) => text == STARTING_POINT_PLACEHOLDER

const AudioControls = (): ReactElement => {
  const recordedData = useRef<Blob[]>([])
  const recorder = useRef<MediaRecorder | null>(null)

  const [recordingStatus, setRecordingStatus] = useState<string>('inactive')

  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([])
  const [audio, setAudio] = useState<string | null>(null)

  const [streamInfo, setStreamInfo] = useState<StreamInfo | null>(null)

  const [readAloudAudio, setReadAloudAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string>(STARTING_POINT_PLACEHOLDER)

  const handleConversion = useCallback(async () => {
    // Must convert the webm audioBlob to a WAV blob
    const audioBlob = new Blob(audioChunks, { type: mimeType })
    const wavBlob = await convertWebmToWAV(audioBlob)
    const wavURL = URL.createObjectURL(wavBlob)
    setAudio(wavURL)
    setAudioChunks([])
  }, [audioChunks])

  useLayoutEffect(() => {
    // Move check to permissions provider
    if (!('MediaRecorder' in window)) {
      alert('WebAudio API not supported')
      return
    }

    const prepareRecorder = (stream: MediaStream) => {
      recorder.current = new MediaRecorder(stream, { mimeType })
      recorder.current.onstop = async () => {
        await handleConversion()
      }
      recorder.current.ondataavailable = (event: BlobEvent) => {
        if (typeof event.data === 'undefined' || event.data.size === 0) return
        recordedData.current.push(event.data)
      }
      return () => {
        recorder.current?.ondataavailable = (event: BlobEvent) => {
          event.preventDefault()
          // eslint-disable-next-line no-console
          console.log(event.currentTarget)
          // eslint-disable-next-line no-console
          console.error(event.data)
        }
        recorder.current.onstop = (event: MediaStreamAudioSourceNode) => {
          event.disconnect()
          // eslint-disable-next-line no-console
          console.info('Recorder stopping,')
        }
      }
    }

    const setup = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        })
        const audioTracks = stream.getAudioTracks()
        const audioSource = new AudioContext().createMediaStreamSource(stream)

        const cleanupRecorder = prepareRecorder(stream)
        setStreamInfo({
          stream: stream,
          tracks: audioTracks,
          context: audioSource,
        })
        return () => {
          audioSource.mediaStream.getTracks().forEach((track) => {
            if (track.readyState === 'live') {
              track.stop()
            }
          })
          audioSource.disconnect()
          cleanupRecorder()
        }
      } catch (err) {
        alert(err)
        setStreamInfo(null)
        return () => {
          stream.getTracks().forEach((track) => {
            if (track.readyState === 'live') {
              track.stop()
            }
          })
        }
      }
    }
    const cleanupContext = setup() // Stream, tracks, context, and recorder
    return cleanupContext
  }, [handleConversion])

  //Define controller functions for recording
  const startRecording = useCallback((): void => {
    if (isNull(streamInfo)) return
    if (isNull(recorder.current)) return
    setRecordingStatus('recording') //setRecordingStatus(IS.RECORDING)
    // MediaStream only supports recording in webm
    recordedData.current = [] as Blob[]
    setAudioChunks(recordedData.current)
    recorder.current.start()
  }, [streamInfo])

  const stopRecording = useCallback((): void => {
    if (isNull(recorder.current)) return
    if (isNull(streamInfo)) return //Recorder but no stream, already torn down nothing to stop
    // Handle teardown without recorder

    const { context, stream, tracks } = streamInfo
    recorder.current.stop()
    tracks.forEach((track) => {
      if (track.readyState == 'live') {
        track.stop()
        stream.removeTrack(track)
      }
    })
    context.disconnect()
    setRecordingStatus('inactive') //setRecordingStatus(IS.STOPPED)
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
                <Button colorScheme={'green'} margin={16} padding={8} id='recording-button' onClick={startRecording}>
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
              <Button colorScheme={'red'} margin={16} padding={8} id='recording-button' onClick={stopRecording}>
                Stop Recording
              </Button>
            ) : null}
            {recordingStatus === 'recording' && streamInfo ? <AudioVisualizer stream={streamInfo.stream} /> : null}
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
            {isPending(transcription) ? <CircularProgress isIndeterminate color='green.300' /> : 'Query Inference API'}
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
