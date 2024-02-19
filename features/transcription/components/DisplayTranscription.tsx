import { Center, Fade, Text, useClipboard, useToast } from '@chakra-ui/react'
import { useCallback, useEffect, useRef } from 'react'
import { isNull } from 'lodash'

const DisplayTranscription = ({ transcription }) => {
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

    if (!isNull(container)) {
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
    <Center w={'100vw'} minH={'20vh'}>
      <Fade in={true}>
        <Center
          ref={textRef}
          onClick={transcription ? handleCopyToClipboard : null}
          height={'auto'}
          overflow={'scroll'}
          _hover={{ transition: 'cubic-bezier(0, 1.8, .99, 1) 0.3s;' }}
          maxHeight={transcription ? 400 : 200}
          padding={'1em'}
          background={'#ffffff40'}
          backdropBlur={'lg'}
          dropShadow={'outline'}
          minH={'180px'}
          w={'85vw'}
          borderRadius={'6px'}
          transition={'max-height 1.75s ease-out'}
          justifyContent={'center'}
          alignItems={'center'}
          h={'100%'}
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
    </Center>
  )
}

export default DisplayTranscription
