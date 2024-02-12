import { ReactElement, useCallback, useLayoutEffect } from 'react'
import { WaveSectionProps, WaveProps, WaveSVGElementProps, MenuItemProps } from './types'
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
        bg={'red'}
        fontFamily={'Albula Pro'}
        fontSize={'xl'}
        color={'rgba(236, 105, 40, 0.75)'}
      >
        {label}
      </Text>
    </>
  )
}

const MenuBar = () => {
  return (
    <Center padding={'1em'} position={'absolute'} width={'100%'} gap={'0.8em'}>
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
      <Box position={'relative'}>
        <WaveSVGElement />
        {!!children && children}
      </Box>
    </>
  )
}

type WaveSectionProps = {
  children: JSX.Element[]
}
export const WaveSection = ({ children }: WaveSectionProps): ReactElement => {
  //TODO: Fix animation on hover for menu Items

  return (
    <>
      <Flex
        id='heading-container'
        as={'section'}
        flexDirection={'column-reverse'}
        h={'100vh'}
        zIndex={-1}
        bg={
          'linear-gradient(48deg, rgba(255,181,86,1) 0%, rgba(236,105,40,1) 31%, rgba(199,58,103,1) 61%, rgba(149,41,171,1) 100%);'
        }
      >
        <Wave>
          <MenuBar />
        </Wave>

        {children}
        <PageHeader />
      </Flex>
    </>
  )
}

export default WaveSection
