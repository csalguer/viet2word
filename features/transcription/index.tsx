import { useState, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Center, Flex, useToast, useMediaQuery } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from './helpers/queryVietTranscription'
import convertWebmToWAV from '@/features/audio-recorder/helpers/convertWebmToWAV'
import AudioRecorder from './components/AudioRecorder'
import DisplayTranscription from './components/DisplayTranscription'
import AudioCapturedControls, { State } from './components/AudioCapturedControls'
import { useQuery } from '@tanstack/react-query'
import { Block, TextBlinker } from '@/pages/transcribe/components/TextBlock'
import { translations } from '@/pages/transcribe/components/utilities'

const mimeType = 'audio/webm'
export const PENDING_PLACEHOLDER = 'Transcribing ...'
export const STARTING_POINT_PLACEHOLDER = 'Transcription will appear here.'

const Transcriber = ({ widget }): ReactElement => {
  const [stream, setStream] = useState<MediaStream | null>(null)

  const mediaRecorder = useRef<MediaRecorder | null>(null)
  const inProgressData = useRef<Blob[] | null>(null)
  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([])
  const [audio, setAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string | null>(null)
  const [isFinishedRecording, setFinished] = useState<boolean>(false)
  const [wavBytes, setWavBytes] = useState<ArrayBuffer | null>(null)

  const [isDesktop] = useMediaQuery('(min-width: 450px)')
  const toast = useToast()

  const startRecording = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    })
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
    setStream(stream)
  }, [])

  const queryState = useQuery({
    queryKey: ['transcription', wavBytes],
    queryFn: () => queryVietTranscription(wavBytes),
    enabled: false,
  })

  const stopRecording = useCallback((): void => {
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
      mediaRecorder.current.stream.getAudioTracks().forEach((track) => {
        if (track.readyState === 'live') {
          // eslint-disable-next-line no-console
          console.info(`Track ${track.id} of type ${track.label} is stopping...`)
          track.stop()
        }
      })
      mediaRecorder.current.stop()
      // stream?.dispatchEvent(new Event(''))
      setFinished(true)
    }
  }, [audioChunks])

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
  const [fetchState, setFetchState] = useState<State>(State.justFinishedRecording)

  return (
    <>
      <Flex id={'transcriber'} gap={'12px'} flexDirection={'column'}>
        {isNull(audio) && !isFinishedRecording ? (
          <AudioRecorder stream={stream} record={startRecording} stop={stopRecording} widget={widget} />
        ) : (
          <Flex flexDir={'column'}>
            {fetchState === State.justFinishedRecording && <TextBlinker isBold text={translations['transcribe']} />}
            {fetchState === State.isFetchingTranscription && <TextBlinker isBold text={translations['transcribing']} />}
            <AudioCapturedControls
              setFetchState={setFetchState}
              onFinish={setupToRerecordAudio}
              audio={audio}
              onClick={handleSTTQueryRequest}
            />
          </Flex>
        )}
        {transcription ? (
          <Center flexDirection={isDesktop ? 'row' : 'column'} id={'transcription-upper-container'}>
            <DisplayTranscription transcription={transcription} />
            {fetchState === State.retryDemo && <TextBlinker isBold text={translations['transcribeAgain']} />}
            {fetchState === State.retryDemo && transcription === '' && (
              <TextBlinker isBold text={translations['notFound']} />
            )}
          </Center>
        ) : (
          <Block w={'200px'} h={'100px'} length={'6px'} color={'#00004285'}>
            {' '}
            {fetchState === State.retryDemo && <TextBlinker isBold text={translations['transcribeAgain']} />}
          </Block>
        )}
      </Flex>
    </>
  )
}

export default Transcriber
