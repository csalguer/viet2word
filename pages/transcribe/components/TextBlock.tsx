import { sleep } from '@/features/transcription/components/AudioCapturedControls'
import { Text, Center, chakra, SlideFade, ScaleFade } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { createRef, useCallback, useEffect, useRef, useState } from 'react'

export const Title = () => {
  return (
    <>
      <Center id={'splash-title'} flexDirection={'column'}>
        <Text
          id={'title-text'}
          fontFamily={'Alexandria'}
          color={'white'}
          fontWeight={800}
          fontSize={['xl', '2xl', '6xl', '8xl']}
        >
          Transcribe
        </Text>
      </Center>
    </>
  )
}

export interface Block {
  id?: string
  title?: string
  description?: string
  content?: ReactElement
}

enum Animation {
  scale = ScaleFade,
  slide = SlideFade,
}
type BlinkerProps = {
  text: string[]
}

export const Blinker = ({ text }: BlinkerProps): ReactElement => {
  const [label, setLabel] = useState(0)
  const textRef = useRef()
  // const textRef = useRef<HTMLParagraphElement>(null)

  const blink = useCallback(() => {
    const textRef = document.getElementById('blinker')
    if (textRef) {
      // textRef.style.opacity = label ? 0 : 1
      // textRef.style.opacity = !label ? 0 : 1
      setLabel(label == 0 ? 1 : 0)
      sleep(200)
      setLabel(label == 0 ? 1 : 0)
      // setLabel(label == 0 ? 0 : 1)
    }
  }, [label])

  useEffect(() => {
    setInterval(blink, 3200)
  }, [blink])

  return (
    <Center display='flex' className='textblock'>
      <Text
        id={'blinker'}
        ref={textRef}
        // ref={textRef}
        whiteSpace={'nowrap'}
        fontFamily={'Didact Gothic'}
        color={'white'}
        fontSize={('md', 'lg', 'xl')}
        key={nanoid(5)}
      >
        {/* <SlideFade in={true}>{text[label]}</SlideFade> */}
        {text[label]}
      </Text>
    </Center>
  )
}

export const Block = ({ id, title, description, content }: Block): ReactElement => {
  return (
    <Center id={id} margin={'1em'} padding={'1em'} flexDirection={'column'}>
      {!!title && (
        <Text
          fontFamily={'Alexandria'}
          justifyContent={'center'}
          textAlign={'center'}
          padding={'0.2em'}
          color={'white'}
          fontWeight={800}
          fontSize={['xl', '2xl', '3xl']}
        >
          {title}
        </Text>
      )}
      {!!description && (
        <Text
          fontFamily={'Didact Gothic'}
          textAlign={'center'}
          padding={'0.5em'}
          minH={'25vh'}
          maxW={'30vw'}
          color={'white'}
          fontWeight={400}
          fontSize={['md', 'lg', 'xl']}
        >
          {description}
        </Text>
      )}
      {!!content && content}
    </Center>
  )
}
export const TextBlock = chakra(Block)
export const TextBlinker = chakra(Blinker)

// export default TextBlock
