import { IconButton, Icon, CircularProgress, Flex, Center } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { FiEdit2, FiRotateCw } from 'react-icons/fi'
import AudioPlayer from './AudioPlayer'
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
        {isNull(startedFetch) && (
          <IconButton
            aria-label='Fetch Transcription'
            height={16}
            width={16}
            bg={'yellow.300'}
            _hover={{ bg: 'yellow.400' }}
            _pressed={{ bg: 'yellow.500' }}
            borderRadius={'50%'}
            icon={<Icon as={FiEdit2} color={'white'} h={6} w={6} />}
            onClick={handleClick}
          ></IconButton>
        )}
        {startedFetch && (
          <IconButton
            aria-label='Awaiting Transcription'
            height={16}
            width={16}
            bg={'gray.400'}
            borderRadius={'50%'}
            icon={
              <Center>
                <CircularProgress h={'100%'} w={'100%'} isIndeterminate color='gray.400' />
              </Center>
            }
            isDisabled
            onClick={handleClick}
          ></IconButton>
        )}
        {!isNull(startedFetch) && !startedFetch && (
          <IconButton
            aria-label='Rerecord Audio'
            height={16}
            width={16}
            bg={'gray.400'}
            borderRadius={'50%'}
            icon={<Icon as={FiRotateCw} color={'white'} h={6} w={6} />}
            onClick={handleFinish}
          ></IconButton>
        )}
      </Center>
    </Flex>
  )
}

export default AudioCapturedControls
