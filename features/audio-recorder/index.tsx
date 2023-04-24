import { Fragment, useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Box, Button, CircularProgress, Flex, Heading, Text } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from './helpers/queryVietTranscription'
import queryVietGeneration from './helpers/queryVietGeneration'
import AudioVisualizer from './AudioVisualizer'
import convertWebmToWAV from './helpers/convertWebmToWAV'

const mimeType = 'audio/webm'
const PENDING_PLACEHOLDER = 'Transcribing ...'
const STARTING_POINT_PLACEHOLDER = 'Transcription will appear here.'
const isPending = (text) => text == PENDING_PLACEHOLDER
const hasYetToQueryEndpoint = (text) => text == STARTING_POINT_PLACEHOLDER
const AudioControls = (): ReactElement => {
  const [permission, setPermission] = useState<boolean>(false)
  const [stream, setStream] = useState<MediaStream | null>(null)

  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const inProgressData = useRef<Blob[] | null>(null)
  const [recordingStatus, setRecordingStatus] = useState<string>('inactive')
  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([])
  const [audio, setAudio] = useState<string | null>(null)
  const [readAloudAudio, setReadAloudAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string>(STARTING_POINT_PLACEHOLDER)

  const getMicrophonePermission = useCallback(async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        })
        setPermission(true)
        setStream(streamData)
      } catch (err) {
        alert(err)
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.')
    }
  }, [])

  const startRecording = (): void => {
    if (stream) {
      setRecordingStatus('recording')
      // MediaStream only supports recording in webm
      const media = new MediaRecorder(stream, { mimeType })
      // set the MediaRecorder instance to the mediaRecorder ref
      mediaRecorder.current = media
      mediaRecorder.current.start()
      const localAudioChunks: Blob[] = []
      inProgressData.current = localAudioChunks
      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === 'undefined') return
        if (event.data.size === 0) return
        localAudioChunks.push(event.data)
      }
      setAudioChunks(localAudioChunks)
    }
  }

  const stopRecording = (): void => {
    setRecordingStatus('inactive')
    if (mediaRecorder?.current) {
      mediaRecorder.current.stop()
      mediaRecorder.current.onstop = async () => {
        // Must convert the webm audioBlob to a WAV blob
        const audioBlob = new Blob(audioChunks, { type: mimeType })
        const wavBlob = await convertWebmToWAV(audioBlob)
        const wavURL = URL.createObjectURL(wavBlob)
        setAudio(wavURL)
        setAudioChunks([])
      }
    }
  }

  useEffect(() => {
    getMicrophonePermission()
  }, [getMicrophonePermission])

  const handleSTTQueryRequest = async (): Promise<void> => {
    if (audio) {
      setTranscription(PENDING_PLACEHOLDER)
      const wavBlob: Blob = await fetch(audio).then((r) => r.blob())
      const wavBytes = await wavBlob.arrayBuffer()
      const response = await queryVietTranscription(wavBytes)
      setTranscription(response.text)
    }
  }

  const handleTTSQueryRequest = async (): Promise<void> => {
    if (audio) {
      const buffer = await queryVietGeneration(transcription)
      const rawAudioBlob = new Blob([buffer], { type: 'audio/wav' })
      const rawAudioUrl = URL.createObjectURL(rawAudioBlob)
      console.log(rawAudioUrl)
      setReadAloudAudio(rawAudioUrl)
    }
  }

  return (
    <>
      <Heading>Vietnamese Speech to Text</Heading>
      <Flex w={'100vw'} justifyContent={'center'} alignItems={'center'}>
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
                {permission && recordingStatus === 'inactive' ? (
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
              {recordingStatus === 'recording' && stream ? (
                <AudioVisualizer stream={stream} />
              ) : null}
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
              <audio src={readAloudAudio} controls id='playback-sample'>
                <track kind='captions' />
              </audio>
            </>
          ) : null}
        </Flex>
      </Flex>
    </>
  )
}

export default AudioControls
