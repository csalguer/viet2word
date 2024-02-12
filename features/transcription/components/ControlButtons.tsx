import { IconButton, Icon, CircularProgress, Center } from '@chakra-ui/react'
import { FiEdit2, FiRotateCw } from 'react-icons/fi'

export type ControlProps = {
  onClick: () => void
}

export const StartButton = ({ onClick }: ControlProps) => {
  return (
    <IconButton
      aria-label='Start Recording'
      height={16}
      width={16}
      bg={'green.500'}
      _hover={{ bg: 'green.600' }}
      _pressed={{ bg: 'green.700' }}
      borderRadius={'50%'}
      icon={<Icon as={FiMic} color={'white'} h={6} w={6} />}
      onClick={onClick}
    ></IconButton>
  )
}

export const StopButton = ({ onClick }: ControlProps) => {
  return (
    <IconButton
      aria-label='Stop Recording'
      height={16}
      width={16}
      bg={'red.500'}
      _hover={{ bg: 'red.600' }}
      _pressed={{ bg: 'red.700' }}
      borderRadius={'50%'}
      icon={<Icon as={FiSquare} color={'white'} h={6} w={6} />}
      onClick={onClick}
    ></IconButton>
  )
}

export const AnalyseButton = ({ onClick }: ControlProps) => {
  return (
    <IconButton
      aria-label='Fetch Transcription'
      height={16}
      width={16}
      bg={'yellow.300'}
      _hover={{ bg: 'yellow.400' }}
      _pressed={{ bg: 'yellow.500' }}
      borderRadius={'50%'}
      icon={<Icon as={FiEdit2} color={'white'} h={6} w={6} />}
      onClick={onClick}
    ></IconButton>
  )
}

export const AwaitingButton = ({ onClick }: ControlProps) => {
  return (
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
      onClick={onClick}
    ></IconButton>
  )
}

export const ResetButton = ({ onClick }: ControlProps) => {
  return (
    <IconButton
      aria-label='Rerecord Audio'
      height={16}
      width={16}
      bg={'gray.400'}
      borderRadius={'50%'}
      icon={<Icon as={FiRotateCw} color={'white'} h={6} w={6} />}
      onClick={onClick}
    ></IconButton>
  )
}
