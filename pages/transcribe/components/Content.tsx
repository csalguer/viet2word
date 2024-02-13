import { Center, Flex, Text } from '@chakra-ui/react'
import Widget from '@/features/widget'
import { nanoid } from 'nanoid'
import { useCallback, useLayoutEffect } from 'react'
import { TRANSCRIPTION } from '@/features/widget'

const Title = () => {
  const setHoverStyles = useCallback(() => {
    const title = (document.getElementById('main-action-tag') ?? <div className='main-action-tag'></div>) as HTMLElement

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title.onmouseover = (event: Event) => {
      // TODO: Find out what to do with this extra info
      // eslint-disable-next-line no-console
      const title = document.getElementById('main-action-tag')
      title?.setAttribute('font-family', 'Alexandria')
      title?.setAttribute('word-wrap', 'normal')
      // title?.innerText = 'SAO LẠI'
      // title.fontFamily = 'Alexandria'
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title.onmouseleave = (event: Event) => {
      // TODO: Find out what to do with this extra info
      // eslint-disable-next-line no-console
      const title = document.getElementById('main-action-tag')
      title?.setAttribute('font-family', 'Fragen')
      // ;(title.innerText = 'Transcribe'), (title.fontFamily = 'Fragen')
    }
  }, [])

  useLayoutEffect(() => {
    setHoverStyles()
  }, [setHoverStyles])

  return (
    <>
      <Center position={'absolute'} marginBottom={'200px'} flexDirection={'column'}>
        <Text
          id={'main-action-tag'}
          position={'absolute'}
          left={'10vw'}
          bottom={'0vh'}
          fontFamily={'Alexandria'}
          color={'white'}
          fontWeight={900}
          fontSize={'9xl'}
          width={'8em'}
        >
          Transcribe
        </Text>
      </Center>
    </>
  )
}

type DescriptiveTextBlocksProps = {
  title?: string
  description?: string
  content?: ReactElement
}

export const DescriptiveTextBlocks = ({ title, description, content }: DescriptiveTextBlocksProps): ReactElement => {
  return (
    <Center margin={'1em'} padding={'1em'} flexDirection={'column'} w={'fit-content'}>
      {!!title && (
        <Text fontFamily={'Alexandria'} padding={'0.2em'} color={'white'} fontWeight={800} fontSize={'5xl'}>
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
          fontSize={'1.2em'}
        >
          {description}
        </Text>
      )}
      {!!content && content}
    </Center>
  )
}

export const content = {
  splash: [
    <DescriptiveTextBlocks
      id={'landing-title'}
      key={nanoid(5)}
      content={
        <Center position={'absolute'} marginBottom={'200px'} flexDirection={'column'}>
          <Title />
        </Center>
      }
    />,
    <DescriptiveTextBlocks
      id={'landing-action-text'}
      key={nanoid(5)}
      title={'Speak. Listen. Write.'}
      description={
        'Experience the ease of converting spoken words into text, simplifying language capture for a variety of applications.'
      }
    />,
  ],
  about: [
    <DescriptiveTextBlocks
      id={'description'}
      key={nanoid(5)}
      title={'Sao Lai: Language Mastery Through Speech-Focused Practice'}
      description={
        'Embracing a seamless and intuitive user interface, Linguid sets itself apart\
      as an accessible and indispensable companion in the journey towards language\
       proficiency. Elegant in its simplicity, effortlessly navigable, and accompanied\
        by a scholarly tone, Linguid inspires confidence and motivation within learners,\
         ensuring that educational endeavors are met with enthusiasm and unwavering dedication.'
      }
    />,
  ],
  demo: [
    <DescriptiveTextBlocks
      id={'follow-along'}
      key={nanoid(5)}
      title={'Bạn nói câu này có đúng không?'}
      description={'Repeat the sentence below'}
      content={
        <Center w={'80vw'}>
          <Text fontSize={'4em'} fontWeight={700} fontFamily={'Fragen'}>
            Mặt trời lặn và biển lặng
          </Text>
        </Center>
      }
    />,
    <DescriptiveTextBlocks
      id={'follow-demo-element'}
      key={nanoid(5)}
      // title={'Bạn nói câu này có đúng không?'}
      title={'Try me out now!'}
      description={'Repeat the sentence below'}
      content={
        <Center id={'transcribe-detail'} as={'section'} marginTop={'15em'} h={'60vh'} w={'100%'}>
          <DescriptiveTextBlocks
            content={
              <Center maxH={'30vh'}>
                <Widget export type={TRANSCRIPTION} left />
              </Center>
            }
          />
        </Center>
      }
    />,
  ],
  features: [],
  docs: [],
}

export enum PanelType {
  splash = 'splash',
  about = 'about',
  demo = 'demo',
  features = 'features',
  docs = 'docs',
  contact = 'contact',
}

type PanelContentProps = {
  panelType: PanelType
  callback?: () => void
}

export const PanelContent = ({ panelType }: PanelContentProps): ReactElement => {
  return (
    <>
      <Flex border={'2px white solid'} w={'100%ß'} h={'100%'} overflow={'scrolled'}>
        {content[panelType].map((item: ReactElement) => {
          return item
        })}
      </Flex>
    </>
  )
}
