import { Box, Text } from '@chakra-ui/react'

const DisplayTranscription = ({ transcription }) => {
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
        fontSize={24}
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
