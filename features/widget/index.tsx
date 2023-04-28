import type { ReactElement } from 'react'
import { Box, Center, Flex, useColorModeValue } from '@chakra-ui/react'
import Transcriber from '../transcription'
import Reader from '../dictation'

export const TRANSCRIPTION = 'transcription'
export const READING = 'reading'

interface WidgetProps {
  type?: string
}

const NullContent = (): ReactElement => {
  return <div>No Widget Content Found</div>
}

export const getWidgetContent = (type) => {
  if (type == TRANSCRIPTION) {
    return <Transcriber />
  }
  if (type == READING) {
    return <Reader />
  }
  return <NullContent />
}

const Widget = ({ type }: WidgetProps): ReactElement => {
  return (
    <Center h={'100vh'} w={'100%'}>
      <Box
        maxW={'50vw'}
        bg={useColorModeValue('gray.100', 'gray.900')}
        border={'1px solid gray.200'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        maxWidth={550}
        maxHeight={600}
      >
        <Center w={'100%'} h={'100%'}>
          <Flex p={4} m={4} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            {getWidgetContent(type)}
          </Flex>
        </Center>
      </Box>
    </Center>
  )
}

export default Widget
