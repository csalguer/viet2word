import { ReactElement } from 'react'
import { Text, Flex, Box, Center } from '@chakra-ui/react'
import styles from './transcribe.module.css'
import PageHeader from '../PageHeader'
import { TextCarousel } from '../TextCarousel'

export const WaveSection = (): ReactElement => {
  return (
    <Flex
      id='heading-container'
      as={'section'}
      flexDirection={'column-reverse'}
      h={'95vh'}
      bg={
        'linear-gradient(48deg, rgba(255,181,86,1) 0%, rgba(236,105,40,1) 31%, rgba(199,58,103,1) 61%, rgba(149,41,171,1) 100%)'
      }
    >
      <Box>
        <svg
          className={styles.waves}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className={styles.motion}>
            <use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(255,255,255,0.7' />
            <use xlinkHref='#gentle-wave' x='48' y='3' fill='rgba(255,255,255,0.5)' />
            <use xlinkHref='#gentle-wave' x='48' y='5' fill='rgba(255,255,255,0.3)' />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
          </g>
        </svg>
      </Box>

      <Center position={'absolute'} marginBottom={'200px'} flexDirection={'column'}>
        {/* <Text
      fontFamily={'Alexandria'}
      color={'white'}
      fontWeight={700}
      fontSize={'8xl'}
      position={'absolute'}
      left={'0px'}
      bottom={'0px'}
      whiteSpace={'nowrap'}
      >
      Chép Lại
    </Text> */}
        <Text
          position={'absolute'}
          left={'10vw'}
          bottom={'0vh'}
          fontFamily={'Alexandria'}
          color={'white'}
          fontWeight={700}
          fontSize={'8xl'}
        >
          Transcribe
        </Text>
      </Center>
      <TextCarousel />
      <PageHeader />
    </Flex>
  )
}

export default WaveSection
