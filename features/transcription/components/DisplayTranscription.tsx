import { Box, Textarea } from '@chakra-ui/react'
import { STARTING_POINT_PLACEHOLDER } from '..'

const DisplayTranscription = ({ transcription }) => {
  return (
    <Box height={'400px'}>
      <Textarea
        value={transcription}
        placeholder={STARTING_POINT_PLACEHOLDER}
        isReadOnly
        width={'100%'}
        height={'100%'}
        boxSizing={'border-box'}
        _active={true}
      ></Textarea>
    </Box>
  )
}

export default DisplayTranscription
