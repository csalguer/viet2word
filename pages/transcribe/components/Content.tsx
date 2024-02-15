import { Center, Box, Flex, Text } from '@chakra-ui/react'
import Widget from '@/features/widget'
import { nanoid } from 'nanoid'
import { ReactElement } from 'react'
import { TRANSCRIPTION } from '@/features/widget'

const Title = () => {
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

interface DescriptiveTextBlocksProps {
  id?: string
  title?: string
  description?: string
  content?: ReactElement
}

export const DescriptiveTextBlocks = ({
  id,
  title,
  description,
  content,
}: DescriptiveTextBlocksProps): ReactElement => {
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
          fontSize={['xl', '3xl', '4xl', '5xl']}
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
          fontSize={['md', 'lg', '2xl', '5xl']}
        >
          {description}
        </Text>
      )}
      {!!content && content}
    </Center>
  )
}

const translations = {
  demoStart: ['Try this out', 'Thử cái này!'],
  askForInput: ['Say the sentence below', 'Nói câu dưới đây'], //
  sample: ['The sun sets and the sea is calm.', 'Mặt trời lặn và biển lặng.'],
  confirmation: ['Was the text written <> correct?', 'Văn bản có được viết đúng không?'], // Position + desktop
  // askForFeedback: ['']  => make into ^ or _ button input for training
}

export const content = {
  splash: (
    <>
      <DescriptiveTextBlocks id={'landing-title'} key={nanoid(5)} content={<Title />} />
      <DescriptiveTextBlocks
        id={'landing-action-text'}
        key={nanoid(5)}
        title={'Speak. Listen. Write.'}
        description={
          'Experience the ease of converting spoken words into text, simplifying language capture for a variety of applications.'
        }
      />
    </>
  ),
  about: (
    <>
      <DescriptiveTextBlocks
        id={'description'}
        key={nanoid(5)}
        title={'Language Mastery Through Speech-Focused Practice'}
        content={
          <Text fontFamily={'Didact Gothic'} textAlign={'center'} color={'white'}>
            Embracing a seamless and intuitive user interface, Linguid sets itself apart as an accessible and
            indispensable companion in the journey towards language proficiency. Elegant in its simplicity, effortlessly
            navigable, and accompanied by a scholarly tone, Linguid inspires confidence and motivation within learners,
            ensuring that educational endeavors are met with enthusiasm and unwavering dedication.
          </Text>
        }
      />
    </>
  ),
  instructions: (
    <>
      <TextBlinker text={translations['askForInput']} />
      <DescriptiveTextBlocks
        id={'follow-example'}
        key={nanoid(5)}
        description={}
        content={
          <Center w={'80vw'}>
            <Text fontSize={'4em'} fontWeight={700} fontFamily={'Fragen'}></Text>
          </Center>
        }
      />
    </>
  ),
  demo: (
    <>
      <TextBlinker text={translations['demoStart']} />
      <TextBlinker text={translations['askForInput']} />
      <DescriptiveTextBlocks
        id={'follow-along'}
        key={nanoid(5)}
        content={
          <Center maxH={'30vh'}>
            <Widget type={TRANSCRIPTION} />
          </Center>
        }
      />
    </>
  ),
  confirmation: (
    <>
      <TextBlinker text={translations['confirmation']} />
      <DescriptiveTextBlocks id={'follow-along'} key={nanoid(5)} content={<Box bg='green' w={'35%'} h={'35%'} />} />
    </>
  ),
  docs: <></>,
  contact: <></>,
}

type BlinkerProps = {
  text: string[]
}

const TextBlinker = ({ text }: BlinkerProps): ReactElement => {
  return (
    <Center className='textblock'>
      {text.map((elem) => {
        return <Text key={nanoid(5)}>{elem}</Text>
      })}
    </Center>
  )
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
      <Flex id={'panel-content'} justifyContent={'space-between'} height={'90vh'} bg={'rebeccapurple'}>
        {content[panelType]}
      </Flex>
    </>
  )
}

export default DescriptiveTextBlocks
