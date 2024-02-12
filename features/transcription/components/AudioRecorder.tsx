import AudioVisualizer from '@/features/audio-recorder/AudioVisualizer'
import { IconButton, Flex, Icon, Center } from '@chakra-ui/react'
import { useState } from 'react'
import { FiSquare, FiMic } from 'react-icons/fi'

const AudioRecorder = ({ stream, startRecording, stopRecording }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false)

  const handleStartClick = () => {
    setIsRecording(true)
    startRecording()
  }
  const handleStopClick = () => {
    setIsRecording(false)
    stopRecording()
  }

  return (
    <Flex w={'100%'} minWidth={'400px'} justifyContent={'space-between'} flexDirection={'row'}>
      <AudioVisualizer stream={isRecording ? stream : null} />
      <Center>
        {!isRecording && (
          <IconButton
            aria-label='Start Recording'
            height={16}
            width={16}
            bg={'green.500'}
            _hover={{ bg: 'green.600' }}
            _pressed={{ bg: 'green.700' }}
            borderRadius={'50%'}
            icon={<Icon as={FiMic} color={'white'} h={6} w={6} />}
            onClick={handleStartClick}
          ></IconButton>
        )}
        {isRecording && (
          <IconButton
            aria-label='Stop Recording'
            height={16}
            width={16}
            bg={'red.500'}
            _hover={{ bg: 'red.600' }}
            _pressed={{ bg: 'red.700' }}
            borderRadius={'50%'}
            icon={<Icon as={FiSquare} color={'white'} h={6} w={6} />}
            onClick={handleStopClick}
          ></IconButton>
        )}
      </Center>
    </Flex>
  )
}

export default AudioRecorder
