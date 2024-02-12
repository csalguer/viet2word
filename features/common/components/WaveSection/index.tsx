import { ReactElement, useCallback, useLayoutEffect } from 'react'
import { Text, Flex, Center } from '@chakra-ui/react'
import styles from '@/features/common/components/WaveSection/wave.module.css'
import PageHeader from '../PageHeader'

// styles
// const anochecer = ['rgba(19, 4, 64, 1)', 'rgba(99, 43, 60, 1)', 'rgba(97, 86, 130, 1)', 'rgba(135, 120, 126, 1)']
// const atardecer = ['rgba(255, 181, 86, 1)', 'rgba(236, 105, 40, 1)', 'rgba(199, 58, 103, 1)', 'rgba(149, 41, 171, 1)']
// const alba = []
// const madrugada = ['rgba(220,250,240,1)', 'rgba(200,224,180,1)', ' rgba(176,225,210,1)', ' rgba(140,215,150,1)']
// const

export const WaveSection = (): ReactElement => {
  const setHoverStyles = useCallback(() => {
    const title = (document.getElementById('main-action-tag') ?? <div className='main-action-tag'></div>) as HTMLElement

    title.onmouseover = (event: Event) => {
      // TODO: Find out what to do with this extra info
      // eslint-disable-next-line no-console
      console.info(event)
      const title = document.getElementById('main-action-tag')
      title?.setAttribute('font-family', 'Alexandria')
      title?.setAttribute('word-wrap', 'normal')
      // title?.innerText = 'SAO LẠI'
      // title.fontFamily = 'Alexandria'
    }

    title.onmouseleave = (event: Event) => {
      // TODO: Find out what to do with this extra info
      // eslint-disable-next-line no-console
      console.info(event)
      const title = document.getElementById('main-action-tag')
      title?.setAttribute('font-family', 'Fragen')
      // ;(title.innerText = 'Transcribe'), (title.fontFamily = 'Fragen')
    }
  }, [styles])

  useLayoutEffect(() => {
    setHoverStyles()
  }, [setHoverStyles])

  return (
    <>
      <Flex
        id='heading-container'
        as={'section'}
        flexDirection={'column-reverse'}
        h={'90vh'}
        zIndex={-1}
        bg={
          'linear-gradient(48deg, rgba(255,181,86,1) 0%, rgba(236,105,40,1) 31%, rgba(199,58,103,1) 61%, rgba(149,41,171,1) 100%);'
        }
      >
        <>
          <svg
            className={styles.waves}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 24 150 28'
            preserveAspectRatio='none'
            shapeRendering='auto'
          >
            <defs>
              <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
            </defs>
            <g className={styles.motion}>
              <use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(255,255,255,0.7)' />
              <use xlinkHref='#gentle-wave' x='48' y='3' fill='rgba(255,255,255,0.5)' />
              <use xlinkHref='#gentle-wave' x='48' y='5' fill='rgba(255,255,255,0.3)' />
              <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
            </g>
          </svg>
        </>

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
        <PageHeader />
      </Flex>
    </>
  )
}

export default WaveSection
