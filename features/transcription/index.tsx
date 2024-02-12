import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { Flex } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { queryVietTranscription } from './helpers/queryVietTranscription'
import convertWebmToWAV from '@/features/audio-recorder/helpers/convertWebmToWAV'
import CaptureAudioControls from './components/AudioControls'
import DisplayTranscription from './components/DisplayTranscription'
import AudioCapturedControls from './components/AudioCapturedControls'
import { useQuery } from '@tanstack/react-query'

const mimeType = 'audio/webm'
export const PENDING_PLACEHOLDER = 'Transcribing ...'
export const STARTING_POINT_PLACEHOLDER = 'Transcription will appear here.'

const Transcriber = (): ReactElement => {
  const [audio, setAudio] = useState<string | null>(null)
  const [transcription, setTranscription] = useState<string | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFinishedRecording, setFinished] = useState<boolean>(false)
  const [wavBytes, setWavBytes] = useState<ArrayBuffer | null>(null)

  const queryState = useQuery({
    queryKey: ['transcription', wavBytes],
    queryFn: () => queryVietTranscription(wavBytes),
    enabled: false,
  })

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
          <CaptureAudioControls />
        ) : (
          <AudioCapturedControls onFinish={setupToRerecordAudio} audio={audio} onClick={handleSTTQueryRequest} />
        )}
        <DisplayTranscription transcription={transcription} />
      </Flex>
    </>
  )
}

export default Transcriber
