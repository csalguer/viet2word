import { Fragment, useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Box, Button, CircularProgress, Flex, Heading, Text } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from './helpers/queryVietTranscription'
import AudioVisualizer from './AudioVisualizer'
const mimeType = 'audio/webm'

const PENDING_PLACEHOLDER = 'Transcribing ...'
const isPending = (text) => text == PENDING_PLACEHOLDER

const AudioControls = (): ReactElement => {
  const [permission, setPermission] = useState<boolean>(false)
  const [stream, setStream] = useState<MediaStream | null>(null)

  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const inProgressData = useRef<Blob[] | null>(null)
  const [recordingStatus, setRecordingStatus] = useState<string>('inactive')
  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([])
  const [audio, setAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string>('Transcription will appear here.')

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
      // create new Media recorder instance using the stream
      const media = new MediaRecorder(stream, { mimeType })
      // set the MediaRecorder instance to the mediaRecorder ref
      mediaRecorder.current = media
      // invokes the start method to start the recording process
      mediaRecorder.current.start()
      // eslint-disable-next-line prefer-const
      let localAudioChunks: Blob[] = []
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
    // stops the recording instance
    if (mediaRecorder?.current) {
      mediaRecorder.current.stop()
      mediaRecorder.current.onstop = () => {
        // creates a blob file from the audiochunks data
        const audioBlob = new Blob(audioChunks, { type: mimeType })
        // creates a playable URL from the blob file.
        const audioUrl = URL.createObjectURL(audioBlob)
        setAudio(audioUrl)
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
      const blob: Blob = await fetch(audio).then((r) => r.blob())
      const binaryData = await blob.arrayBuffer()
      const response = await queryVietTranscription(binaryData)
      setTranscription(response.text)
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
            // h={'50vh'}
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
                    <Text>Recorded Audio</Text>
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
          {!isNull(audio) && (
            <a download id='download-button' href={audio}>
              Download
            </a>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default AudioControls
