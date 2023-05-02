import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Flex } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from './helpers/queryVietTranscription'
import convertWebmToWAV from '@/features/audio-recorder/helpers/convertWebmToWAV'
import AudioRecorder from './components/AudioRecorder'
import DisplayTranscription from './components/DisplayTranscription'
import AudioCapturedControls from './components/AudioCapturedControls'

const mimeType = 'audio/webm'
export const PENDING_PLACEHOLDER = 'Transcribing ...'
export const STARTING_POINT_PLACEHOLDER = 'Transcription will appear here.'

const Transcriber = (): ReactElement => {
  const [stream, setStream] = useState<MediaStream | null>(null)

  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const inProgressData = useRef<Blob[] | null>(null)
  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([])
  const [audio, setAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string>(STARTING_POINT_PLACEHOLDER)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setFinished] = useState<boolean>(false)

  const getMediaStream = useCallback(async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        })
        setStream(streamData)
      } catch (err) {
        alert(err)
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.')
    }
  }, [])

  const startRecording = (): void => {
    setFinished(false)
    if (stream) {
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
    getMediaStream()
  }, [getMediaStream])

  const handleSTTQueryRequest = async (): Promise<boolean | void> => {
    if (audio) {
      try {
        setTranscription(PENDING_PLACEHOLDER)
        const wavBlob: Blob = await fetch(audio).then((r) => r.blob())
        const wavBytes = await wavBlob.arrayBuffer()
        const response = await queryVietTranscription(wavBytes)
        setTranscription(response.text)
      } catch (e) {
        return false
      }
    }
    return
  }

  const setupToRerecordAudio = (): void => {
    setAudio(null)
    setFinished(true)
  }
  return (
    <>
      <Flex gap={'12px'} flexDirection={'column'}>
        {isNull(audio) ? (
          <AudioRecorder
            stream={stream}
            startRecording={startRecording}
            stopRecording={stopRecording}
          />
        ) : (
          <AudioCapturedControls
            onFinish={setupToRerecordAudio}
            audio={audio}
            onClick={handleSTTQueryRequest}
          />
        )}
        <DisplayTranscription transcription={transcription} />
      </Flex>
    </>
  )
}

export default Transcriber
