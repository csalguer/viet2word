import { Center, Fade, Flex, Text, useClipboard, useToast } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { useCallback, useEffect, useRef } from 'react'

const MAX_BUCKET_SIZE = 85
const LARGEST_FONT_SIZE = 4

const DisplayTranscription = ({ transcription }) => {
  const getFontSize = (wordCount) => {
    const fontSize = Math.min(wordCount / MAX_BUCKET_SIZE, 1) * 1.5
    return LARGEST_FONT_SIZE - fontSize
  }
  // const numWords = transcription.split(' ').length
  const textRef = useRef()
  const toast = useToast()
  const clipboard = useClipboard('')

  const handleCopyToClipboard = useCallback(() => {
    clipboard.setValue(transcription)
    clipboard.onCopy(transcription)
    toast({
      title: 'Copied.',
      description: 'Copied to Clipboard',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }, [clipboard, toast, transcription])

  useEffect(() => {
    const container = document.getElementById('transcription-container')

    if (container) {
      textRef.current = container
      textRef.current.addEventListener('click', function () {
        this.style.transform = 'scale(.9)'
        setTimeout(() => {
          this.style.transform = 'scale(1)'
        }, 500)
      })
    }
  }, [])

  return (
    <Center w={'100vw'}>
      {transcription && (
        <Fade in={true}>
          <Center
            ref={textRef}
            // as='button'
            onClick={handleCopyToClipboard}
            height={'auto'}
            overflow={'scroll'}
            _hover={{ transition: 'cubic-bezier(0, 1.8, .99, 1) 0.3s;' }}
            // bg={'red'}
            maxHeight={transcription ? 400 : 200}
            padding={'1em'}
            background={'#ffffff40'}
            backdropBlur={'lg'}
            dropShadow={'outline'}
            minH={'180px'}
            minW={'85vw'}
            borderRadius={'6px'}
            transition={'max-height 1.75s ease-out'}
            justifyContent={'center'}
            alignItems={'center'}
            h={'100%'}
            w={'100%'}
            id={'transcription-container'}
          >
            <Text
              // fontSize={['lg, xl, 2xl']}
              fontSize={'1.5em'}
              color={'white'}
              textAlign={'center'}
              fontWeight={400}
              fontFamily={'Albula Pro, sans-serif'}
              overflowWrap={'break-word'}
            >
              {transcription}
            </Text>
          </Center>
        </Fade>
      )}
    </Center>
  )
}

export default DisplayTranscription
