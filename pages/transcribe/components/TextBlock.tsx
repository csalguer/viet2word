import { sleep } from '@/features/transcription/components/AudioCapturedControls'
import { Text, Center, chakra, SlideFade, ScaleFade, Fade } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { createRef, useCallback, useEffect, useRef, useState } from 'react'

export const Title = () => {
  return (
    <>
      <Fade in={true}>
        <Center id={'splash-title'} flexDirection={'column'}>
          <Text
            id={'title-text'}
            fontFamily={'Alexandria'}
            color={'white'}
            fontWeight={800}
            fontSize={['6xl', '8xl', '8xl']}
          >
            Transcribe
          </Text>
        </Center>
      </Fade>
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
  isBold?: boolean
}

export const Blinker = ({ text, isBold = false }: BlinkerProps): ReactElement => {
  const [label, setLabel] = useState(0)
  const textRef = useRef()
  // const textRef = useRef<HTMLParagraphElement>(null)

  const blink = useCallback(() => {
    const textRef = document.getElementById('blinker')
    if (textRef) {
      setLabel(label == 0 ? 1 : 0)
      sleep(200)
      setLabel(label == 0 ? 1 : 0)
    }
  }, [label])

  useEffect(() => {
    const id = setInterval(blink, 3200)
    return () => {
      clearInterval(id)
    }
  }, [blink])

  return (
    <Center display='flex' className='textblock'>
      <Text
        as={'div'}
        id={'blinker'}
        ref={textRef}
        whiteSpace={'nowrap'}
        fontFamily={isBold ? 'Albula Pro' : 'Didact Gothic'}
        textTransform={isBold ? 'uppercase' : 'inherit'}
        color={'white'}
        fontSize={('lg', 'xl', '2xl')}
        key={nanoid(5)}
      >
        {<SlideFade in={true}>{text[label]}</SlideFade>}
        {/* {text[label]} */}
      </Text>
    </Center>
  )
}

export const Block = ({ id, title, description, content }: Block): ReactElement => {
  return (
    <Center id={id} margin={'1em'} padding={'1em'} flexDirection={'column'}>
      {!!title && (
        <ScaleFade transition={{ exit: 'all 1s ease', enter: 'all 1s ease' }} in={true}>
          <Text
            fontFamily={'Alexandria'}
            justifyContent={'center'}
            textAlign={'center'}
            padding={'0.2em'}
            color={'white'}
            fontWeight={800}
            fontSize={['2xl', '3xl', '5xl']}
          >
            {title}
          </Text>
        </ScaleFade>
      )}
      {!!description && (
        <SlideFade offsetY={'35px'} in={true}>
          <Text
            fontFamily={'Didact Gothic'}
            textAlign={'center'}
            padding={'0.5em'}
            // minH={'25vh'}
            maxW={'75vw'}
            color={'white'}
            fontWeight={400}
            fontSize={['lg', 'xl', '3xl']}
          >
            {description}
          </Text>
        </SlideFade>
      )}
      {!!content && content}
    </Center>
  )
}
export const TextBlock = chakra(Block)
export const TextBlinker = chakra(Blinker)

// export default TextBlock
