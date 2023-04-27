import { Center } from '@chakra-ui/react'

const AudioPlayer = ({ audio }) => {
  return (
    <Center h={'100px'} w={'100%'} id='audio-player'>
      <audio src={audio} controls>
        <track kind='captions' />
      </audio>
    </Center>
  )
}

export default AudioPlayer
