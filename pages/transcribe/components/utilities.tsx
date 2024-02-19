import { TextBlock, TextBlinker, Animation } from './TextBlock'
import { Text, Center, Box, chakra, Flex } from '@chakra-ui/react'
import { Title } from './TextBlock'
import Widget from '@/features/widget'
import { TRANSCRIPTION } from '@/features/widget'
import { nanoid } from 'nanoid'

export const translations = {
  demoStart: ['Try this out', 'Thử cái này!'],
  askForInput: ['Say the sentence below', 'Nói câu dưới đây'], //
  sample: ['The sun sets and the sea is calm.', 'Mặt trời lặn và biển lặng.'],
  confirmation: ['Was the written text correct?', 'Văn bản có được viết đúng không?'], // Position + desktop
  // askForFeedback: ['']  => make into ^ or _ button input for training
}

const ChakraWidget = chakra(Widget)

const splashContent = () => {
  return (
    <Box
      id={'splash-pane'}
      onClick={() => {
        console.log('pane clicked')
        const elem = document.getElementById('demo-pane')
        elem.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        if (elem) {
        }
      }}
    >
      <Title />
      <TextBlock
        id={'landing-action-text'}
        key={nanoid(5)}
        title={'Speak. Listen. Write.'}
        description={
          'Experience the ease of converting spoken words into text, simplifying language capture for a variety of applications.'
        }
        fontSize={['md', 'lg', 'xl']}
      />
    </Box>
  )
}

const aboutContent = () => {
  return (
    <>
      <TextBlock
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
  )
}

const instructionsContent = () => {
  return (
    <>
      <TextBlinker text={translations['askForInput']} />
    </>
  )
}

const demoContent = () => {
  return (
    <>
      <Flex id={'demo-pane'} flexDirection={'column'}>
        <Flex flexDirection={'column'}>
          <TextBlinker text={translations['demoStart']} />
          <TextBlinker text={translations['askForInput']} />
        </Flex>
        <TextBlock
          id={'follow-along'}
          key={nanoid(5)}
          content={
            <Center maxH={'30vh'}>
              <Widget asNative type={TRANSCRIPTION} />
            </Center>
          }
        />
      </Flex>
    </>
  )
}

const confirmationContent = () => {
  return (
    <>
      <TextBlinker text={translations['confirmation']} />
      <TextBlock id={'follow-along'} key={nanoid(5)} content={<Box bg='green' w={'35%'} h={'35%'} />} />
    </>
  )
}

export const content: Record<string, JSX.Element> = {
  splash: splashContent(),
  about: aboutContent(),
  // instructions: instructionsContent(),
  demo: demoContent(),
  confirmation: confirmationContent(),
  docs: <></>,
  contact: <></>,
}
