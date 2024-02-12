import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Flex } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from './helpers/queryVietTranscription'
import convertWebmToWAV from '@/features/audio-recorder/helpers/convertWebmToWAV'
import AudioRecorder from './components/AudioRecorder'
import DisplayTranscription from './components/DisplayTranscription'
import AudioCapturedControls from './components/AudioCapturedControls'
import { useQuery } from '@tanstack/react-query'

const mimeType = 'audio/webm'
export const PENDING_PLACEHOLDER = 'Transcribing ...'
export const STARTING_POINT_PLACEHOLDER = 'Transcription will appear here.'

const Transcriber = (): ReactElement => {
  const [stream, setStream] = useState<MediaStream | null>(null)

  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const inProgressData = useRef<Blob[] | null>(null)
  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([])
  const [audio, setAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFinishedRecording, setFinished] = useState<boolean>(false)
  const [wavBytes, setWavBytes] = useState<ArrayBuffer | null>(null)

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

  const queryState = useQuery({
    queryKey: ['transcription', wavBytes],
    queryFn: () => queryVietTranscription(wavBytes),
    enabled: false,
  })

  const stopRecording = (): void => {
    if (mediaRecorder?.current) {
      mediaRecorder.current.onstop = async () => {
        // Must convert the webm audioBlob to a WAV blob
        const audioBlob = new Blob(audioChunks, { type: mimeType })
        const wavBlob = await convertWebmToWAV(audioBlob)
        const wavBytes = await wavBlob.arrayBuffer()

        const wavURL = URL.createObjectURL(wavBlob)
        setAudio(wavURL)
        setAudioChunks([])
        setWavBytes(wavBytes)
      }
      setFinished(true)
    }
    if (mediaRecorder?.current) {
      mediaRecorder.current.stop()
    }
    // mediaRecorder?.current ? mediaRecorder.current.stop() : null
  }

  useEffect(() => {
    getMediaStream()
  }, [getMediaStream])

  const handleSTTQueryRequest = async (): Promise<void> => {
    if (audio) {
      try {
        const result = await queryState.refetch()
        setTranscription(result.data?.text ? result.data.text : null)
      } catch (e) {
        throw new Error('Error while fetching')
      }
    }
    return
  }

  const setupToRerecordAudio = (): void => {
    setAudio(null)
    setFinished(false)
    setTranscription(null)
  }
  return (
    <>
      <Flex gap={'12px'} flexDirection={'column'}>
        {isNull(audio) && !isFinishedRecording ? (
          <AudioRecorder stream={stream} startRecording={startRecording} stopRecording={stopRecording} />
        ) : (
          <AudioCapturedControls onFinish={setupToRerecordAudio} audio={audio} onClick={handleSTTQueryRequest} />
        )}
        <DisplayTranscription transcription={transcription} />
      </Flex>
    </>
  )
}

export default Transcriber
