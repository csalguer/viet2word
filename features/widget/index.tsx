import type { ReactElement } from 'react'
import { Box, Center, Flex, useColorModeValue } from '@chakra-ui/react'
import Transcriber from '../transcription'
import Reader from '../dictation'

export const TRANSCRIPTION = 'transcription'
export const READING = 'reading'

interface WidgetProps {
  type?: string
  left?: boolean
  right?: boolean
  asNative?: boolean
}

const NullContent = (): ReactElement => {
  return <div>No Widget Content Found</div>
}

export const getWidgetContent = (type, asNative = false) => {
  if (type == TRANSCRIPTION) {
    return <Transcriber widget={!asNative} />
  }
  if (type == READING) {
    return <Reader />
  }
  return <NullContent />
}

const Widget = ({ type, left, right, asNative = true }: WidgetProps): ReactElement => {
  return (
    <Center h={'100vh'} w={'100%'}>
      {left && (
        <div
          style={{
            position: 'relative',
            height: 0,
            width: 0,
            zIndex: 5,
            borderTop: '24px solid transparent',
            borderBottom: '24px solid transparent',
            borderRight: '24px solid #EDF2F7',
          }}
        ></div>
      )}
      <Box
        maxW={'50vw'}
        // bg={useColorModeValue('gray.100', 'gray.900')}
        border={'1px solid gray.200'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        maxWidth={550}
        maxHeight={600}
      >
        <Center w={'100%'} h={'100%'}>
          <Flex p={4} m={4} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            {getWidgetContent(type, asNative)}
          </Flex>
        </Center>
      </Box>
      {right && (
        <div
          style={{
            position: 'relative',
            height: 0,
            width: 0,
            zIndex: 5,
            borderTop: '24px solid transparent',
            borderBottom: '24px solid transparent',
            borderLeft: '24px solid #EDF2F7',
          }}
        ></div>
      )}
    </Center>
  )
}

export default Widget
