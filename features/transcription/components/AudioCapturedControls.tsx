import { Flex, Center } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import AudioPlayer from './AudioPlayer'
import { AnalyseButton, AwaitingButton, ResetButton } from './ControlButtons'
import { isNull } from 'lodash'

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const AudioCapturedControls = ({ audio, onClick, onFinish }) => {
  const [startedFetch, setStartedFetch] = useState<boolean | null>(null)

  const handleClick = async () => {
    setStartedFetch(true)
    await onClick()
    setStartedFetch(false)
  }
  const handleFinish = useCallback(() => {
    onFinish()
  }, [onFinish])

  return (
    <Flex w={'100%'} minWidth={'400px'} justifyContent={'space-between'} flexDirection={'row'}>
      <AudioPlayer audio={audio} />
      <Center>
        {isNull(startedFetch) && <AnalyseButton onClick={handleClick} />}
        {startedFetch && <AwaitingButton onClick={handleClick} />}
        {!isNull(startedFetch) && !startedFetch && <ResetButton onClick={handleFinish} />}
      </Center>
    </Flex>
  )
}

export default AudioCapturedControls
