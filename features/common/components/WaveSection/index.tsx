import { ReactElement } from 'react'
import { WaveSectionProps, WaveProps, MenuItemProps } from './types'
import { Text, Flex, Box, Center } from '@chakra-ui/react'
import styles from '@/features/common/components/WaveSection/wave.module.css'
import PageHeader from '../PageHeader'
import { nanoid } from 'nanoid'

const itemLabels = ['About', 'Features', 'Demo', 'Documentation', 'Contact']

const MenuItem = ({ label }: MenuItemProps): ReactElement => {
  return (
    <>
      <Text
        className={styles.item}
        as={'div'}
        padding={'1.2em'}
        // bg={'red'}
        fontFamily={'Albula Pro'}
        fontSize={'xl'}
        color={'rgba(236, 105, 40, 0.75)'}
      >
        {label}
      </Text>
    </>
  )
}

export const MenuBar = () => {
  return (
    <Center id={'menu'} padding={'1em'} width={'100%'} gap={'0.8em'}>
      {itemLabels.map((item) => {
        return <MenuItem key={nanoid(6)} label={item} />
      })}
    </Center>
  )
}

const WaveSVGElement = (): ReactElement => {
  return (
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
  )
}

const Wave = ({ children }: WaveProps) => {
  return (
    <>
      <WaveSVGElement />
      <Box id={'wave'} bg={'white'} position={'relative'}>
        <Box>{!!children && children}</Box>
      </Box>
    </>
  )
}

export const WaveSection = ({ children }: WaveSectionProps): ReactElement => {
  //TODO: Fix animation on hover for menu Items

  return (
    <>
      <Flex
        id='wave-container'
        as={'section'}
        flexDirection={'column'}
        h={'90vh'}
        zIndex={-1}
        bg={
          'linear-gradient(48deg, rgba(255,181,86,1) 0%, rgba(236,105,40,1) 31%, rgba(199,58,103,1) 61%, rgba(149,41,171,1) 100%);'
        }
      >
        {children}
        <Wave></Wave>
      </Flex>
    </>
  )
}

export default WaveSection
