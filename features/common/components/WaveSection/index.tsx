import { ReactElement, useCallback, useLayoutEffect } from 'react'
import { Text, Flex, Box, Center, Card, CardBody, CardHeader, CardFooter } from '@chakra-ui/react'
import styles from './transcribe.module.css'
import PageHeader from '../PageHeader'
import { TextCarousel } from '../TextCarousel'
import NeuButton from './NeuButton'

export const WaveSection = (): ReactElement => {
  const setHoverStyles = useCallback(() => {
    const mouseInStyle = {
      fontFamily: 'Harriet Black',
    }
    const mouseOutStyle = {
      fontFamily: 'Alexandria',
    }

    const title = document.getElementById('main-action-tag')
    title.onmouseover = (event) => {
      const title = document.getElementById('main-action-tag')
      console.info(event)
      title?.setAttribute('font-family', 'Alexandria')
      title?.setAttribute('word-wrap', 'normal')
      ;(title.innerText = 'SAO LẠI'), (title.fontFamily = 'Alexandria')
    }
    title.onmouseleave = (event) => {
      console.info(event)
      const title = document.getElementById('main-action-tag')
      title?.setAttribute('font-family', 'Fragen')
      ;(title.innerText = 'Transcribe'), (title.fontFamily = 'Fragen')
    }
  }, [])

  useLayoutEffect(() => {
    setHoverStyles()
  }, [setHoverStyles])

  return (
    <>
      {/* <Box
        h={'90vh'}
        w={'20vw'}
        borderRadius={'2xl'}
        // position={'absolute'}

        bg={
          'linear-gradient(48deg, rgba(19, 4, 64,.6) 0%, rgba(99, 43, 60,.4) 60%, rgba(97, 86, 130,.7) 61%, rgba(13, 1, 26) 100%);'
        }
      />
      <Box
        h={'70vh'}
        w={'vw'}
        borderRadius={'2xl'}
        // position={'absolute'}

        bg={
          'linear-gradient(23deg, rgba(19, 150, 150,.2) 0%, rgba(220,110,20,.2) 60%, rgba(255,120,45,.1) 61%, rgba(13, 1, 26) 100%);'
        }
      />
      <Box
        h={'60vh'}
        w={'10vw'}
        borderRadius={'2xl'}
        // position={'absolute'}

        bg={
          'linear-gradient(148deg, rgba(250,254,240,.6) 0%, rgba(250,224,220,.6) 60%, rgba(250,254,240,.6) 61%, rgba(200,224,240,.6) 100%);'
        }
      /> */}
      <Flex
        id='heading-container'
        as={'section'}
        flexDirection={'column-reverse'}
        h={'90vh'}
        // position={'absolute'}
        // top={'0px'}
        // left={'0px'}
        zIndex={-1}
        bg={
          'linear-gradient(48deg, rgba(255,181,86,1) 0%, rgba(236,105,40,1) 31%, rgba(199,58,103,1) 61%, rgba(149,41,171,1) 100%);'
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
        {/* <TextCarousel /> */}
        {/* <NeuButton></NeuButton> */}
        <PageHeader />
      </Flex>
    </>
  )
}

export default WaveSection
