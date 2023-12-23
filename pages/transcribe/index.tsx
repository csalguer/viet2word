import Head from 'next/head'
import type { ReactElement } from 'react'
import PermissionsProvider from '@/features/permissions'
import Widget from '@/features/widget'
import { TRANSCRIPTION } from '@/features/widget/index'
import { Flex, Text, Box, Center } from '@chakra-ui/react'
import styles from './transcribe.module.css'

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Vietnamese Language Tools</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Alexandria'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Sriracha'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Sedgwick+Ave'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Oooh+Baby'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Grape+Nuts'></link>
      </Head>
      {/* <SideNavBar> */}
      <PermissionsProvider>
        <>
          <Flex
            flexDirection={'column-reverse'}
            h={'65vh'}
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
            <Box position={'absolute'} padding={'8em'}>
              <Flex position={'relative'} className={styles.textRotate}>
                <Text
                  right={'10vw'}
                  bottom={'20vh'}
                  fontFamily={'Sriracha'}
                  color={'white'}
                  fontWeight={700}
                  whiteSpace={'nowrap'}
                  fontSize={'6xl'}
                >
                  Tôi không kiểu
                </Text>
                <Text
                  right={'30vw'}
                  bottom={'10vh'}
                  whiteSpace={'nowrap'}
                  fontFamily={'Grape Nuts'}
                  color={'white'}
                  fontWeight={600}
                  fontSize={'6xl'}
                >
                  Không sao
                </Text>
                <Text
                  whiteSpace={'nowrap'}
                  fontFamily={'Sedgwick Ave'}
                  color={'white'}
                  fontWeight={800}
                  fontSize={'6xl'}
                >
                  Ướng nước nhớ nguồn
                </Text>
                <Text
                  whiteSpace={'nowrap'}
                  fontFamily={'Oooh Baby'}
                  color={'white'}
                  fontWeight={700}
                  fontSize={'6xl'}
                >
                  Ăn quả nhớ kè trồng cây
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Widget type={TRANSCRIPTION} left right />
        </>
      </PermissionsProvider>
      {/* </SideNavBar> */}
    </>
  )
}
