import { Box, Text } from '@chakra-ui/react'
import { isNull } from 'lodash'

const MAX_BUCKET_SIZE = 85
const LARGEST_FONT_SIZE = 4

const DisplayTranscription = ({ transcription }) => {
  const getFontSize = (wordCount) => {
    const fontSize = Math.min(wordCount / MAX_BUCKET_SIZE, 1) * 1.5
    return LARGEST_FONT_SIZE - fontSize
  }
  if (isNull(transcription)) {
    return <></>
  }
  const numWords = transcription.split(' ').length
  return (
    <Box
      height={'auto'}
      overflow={'scroll'}
      maxHeight={transcription ? 400 : 20}
      transition={'max-height 1.75s ease-out'}
      justifyContent={'center'}
      alignItems={'center'}
      h={'100%'}
      w={'100%'}
      id={'transcription-container'}
    >
      <Text
        fontSize={`${getFontSize(numWords)}vmin`}
        textAlign={'center'}
        fontWeight={300}
        fontFamily={"'Raleway', sans-serif"}
        overflowWrap={'break-word'}
      >
        {transcription}
      </Text>
    </Box>
  )
}

export default DisplayTranscription
