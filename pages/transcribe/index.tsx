import Head from 'next/head'
import type { ReactElement } from 'react'
import PermissionsProvider from '@/features/permissions'
import Widget from '@/features/widget'
import { TRANSCRIPTION } from '@/features/widget/index'
import { Flex, Text, Box, Center } from '@chakra-ui/react'
import styles from './transcribe.module.css'
import Link from 'next/link'

const GithubLogo = () => {
  return (
    <>
      <svg
        height='24'
        width='24'
        // height='2500'
        viewBox='0 -3.1 2490.3 2493'
        // width='2494'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='1245.2' cy='1243.4' fill='transparent' rx='1217.6' ry='1246.5' />
        <path
          d='m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1'
          fill='#ffffff'
        />
      </svg>
    </>
  )
}

const Logo = () => {
  return (
    <>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 470 545.89'
        // width='2152'
        width={'80'}
        height={'80'}
        // height='2500'
      >
        <defs>
          <linearGradient
            id='a'
            x1='83.39'
            y1='304.79'
            x2='424.88'
            y2='304.79'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stopColor='#8a02e4' />
            <stop offset='.33' stopColor='#7900f4' />
            <stop offset='.68' stopColor='#af00bb' />
            <stop offset='1' stopColor='#e30084' />
          </linearGradient>
          <linearGradient
            id='b'
            x1='60.75'
            y1='190.78'
            x2='551.27'
            y2='136.11'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stopColor='#ff8802' />
            <stop offset='.18' stopColor='#ff6a12' />
            <stop offset='.61' stopColor='#ff4029' />
            <stop offset='1' stopColor='#ff0649' />
          </linearGradient>
        </defs>
        <title>voise</title>
        <path
          d='M178.76 449.69l56.24 96.2 235-408h-52.64s-16.3-1.36-15.42-14.47a17 17 0 0 1 5.61-11.18l41.69-36.75a6.82 6.82 0 0 0-.24-10.22 6.82 6.82 0 0 0-9.66.92l-43.81 51.27a7 7 0 0 1-9.87.93 7 7 0 0 1-.47-10.31l18.2-18.2a3.83 3.83 0 0 0 0-5.42 3.84 3.84 0 0 0-5.63.22L366.6 121s-9.4 11.28 0 20.68c0 0 6.48 8.11-.12 15.28a12.05 12.05 0 0 0-3.29 6.51c-.65 5 1.46 12.05 18.45 12.05h24.44L235 472.57l-47-82.72s-7.52-15 5.64-26.32l5.24-6.43a6.9 6.9 0 0 0-.36-9.37 6.88 6.88 0 0 0-9.74 0l-7.35 7.41a5.88 5.88 0 0 1-8.77-.47l-.1-.11a6 6 0 0 1 .43-8.07c10.08-10 37.3-37.23 49-48.94a7.07 7.07 0 0 0-.48-10.44 7.08 7.08 0 0 0-9.87.78L156 352.25s-15 15-5.64 41.36l1.09 2.49a514.72 514.72 0 0 0 27.31 53.59z'
          fill='#ffffff'
          // fill='url(#a)'
        />
        <path
          d='M214.4 322.45l-4.73 5.68a3.54 3.54 0 0 0 1.14 5.44l1 .5a3.53 3.53 0 0 0 4.31-.9l4.73-5.68a3.54 3.54 0 0 0-1.14-5.44l-1-.5a3.55 3.55 0 0 0-4.31.9z'
          // fill='#8a02e4'
          fill='#ffffff'
        />
        <path
          d='M263 191l-6.24 7.49a4.67 4.67 0 0 0 1.5 7.18l1.31.66a4.68 4.68 0 0 0 5.69-1.19l6.24-7.49a4.67 4.67 0 0 0-1.5-7.18l-1.31-.66A4.68 4.68 0 0 0 263 191z'
          // fill='#ff6c11'
          fill='#ffffff'
        />
        <path
          d='M338.37 75.46L333 81.89a4 4 0 0 0 1.29 6.17l1.13.57a4 4 0 0 0 4.88-1l5.36-6.43a4 4 0 0 0-1.28-6.2l-1.13-.56a4 4 0 0 0-4.88 1.02z'
          // fill='#ff4029'
          fill='#ffffff'
        />
        <path
          d='M0 139.81h235s26.32 1.88 52.64-16.92l14.89-11.84a6.26 6.26 0 0 1 7.86 0 6.24 6.24 0 0 1 .51 9.3l-3.61 3.62a5.82 5.82 0 0 0 .48 8.67 5.83 5.83 0 0 0 8-.67L430.51 3.27a9.77 9.77 0 0 1 12.72-1.63 9.78 9.78 0 0 1 1.54 15L321.48 141.69l-18.8 16.92s-11.28 13.16-20.68 0c0 0-7.52-7.52-16.92 5.64 0 0-7.52 11.28-35.72 11.28H63.92l65.8 110.92s11.28 13.16 24.44 0l11.28-13.16s3.76-3.76 7.52 0c0 0 3.76 7.52 11.28 3.76l6.6-4.72a51.79 51.79 0 0 0 11.39-11.12L225 230.27a7.49 7.49 0 0 1 10.35-1.6 7.49 7.49 0 0 1 .94 11.4l-14.42 14.42-60.16 63.92S142.1 338 119.25 329.29a35.35 35.35 0 0 1-17.72-15.42z'
          // fill='url(#b)'
          fill='#ffffff'
        />
      </svg>
    </>
  )
}

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Vietnamese Language Tools</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://cdn.jsdelivr.net/npm/vara@1.4.0/lib/vara.min.js'
          type='text/javascript'
        ></script>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Alexandria'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Sriracha'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Sedgwick+Ave'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Oooh+Baby'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Grape+Nuts'></link>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Didact+Gothic'></link>
      </Head>
      {/* <SideNavBar> */}
      <PermissionsProvider>
        <>
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
            <Box position={'absolute'} padding={'8em'} top={'20vh'} left={'45vw'}>
              <Flex className={styles.textRotate}>
                <Text
                  fontFamily={'Sriracha'}
                  color={'white'}
                  fontWeight={700}
                  whiteSpace={'nowrap'}
                  fontSize={'6xl'}
                >
                  Tôi không kiểu
                </Text>
                <Text
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
            <Flex
              position={'absolute'}
              w={'100vw'}
              top={'5vh'}
              left={'5vh'}
              // justifyContent={'space-evenly'}
              gap={'30vw'}
            >
              <Center flexDirection={'row'} gap={'0.8em'}>
                <Text fontSize={'1.6em'} fontFamily={'monospace'} color={'white'}>
                  Made by{' '}
                </Text>
                <GithubLogo></GithubLogo>
                <Link
                  style={{
                    textDecoration: 'underline',
                    fontSize: '1.6em',
                    fontFamily: 'monospace',
                    color: 'white',
                  }}
                  href={'https://www.github.com/csalguer'}
                >
                  csalguer
                </Link>
              </Center>
              <Logo></Logo>
            </Flex>
          </Flex>
          <Flex id={'transcribe-detail'} as={'section'}>
            <Center padding={'2.8em'} flexDirection={'column'} w={'55vw'} bg='gray'>
              <Text
                fontFamily={'Alexandria'}
                padding={'1em'}
                color={'black'}
                fontWeight={800}
                fontSize={'4xl'}
              >
                Speak. Listen. Write.
              </Text>
              <Text
                fontFamily={'Didact Gothic'}
                padding={'0.5em'}
                minH={'25vh'}
                color={'black'}
                fontWeight={300}
                fontSize={'1xl'}
              >
                Presenting our modest yet efficient Vietnamese Audio Transcription Neural Network –
                a discreet powerhouse designed to seamlessly transcribe spoken Vietnamese into
                written text. This unassuming neural net is crafted with precision, employing
                advanced algorithms to accurately capture the nuances of the Vietnamese language.
                Its understated design belies its impressive capabilities, offering a reliable
                solution for transcription needs without unnecessary complexity. Experience the ease
                of converting spoken words into text with our unpretentious Vietnamese Audio
                Transcription Neural Network, simplifying language processing for a variety of
                applications.
              </Text>
            </Center>
            <Center w={'45vw'} flexDirection={'column'}>
              <Text
                position={'relative'}
                whiteSpace={'nowrap'}
                fontFamily={'Alexandria'}
                color={'black'}
                fontWeight={800}
                fontSize={'4xl'}
                marginTop={'40vh'}
              >
                Try me out now!
              </Text>
              <Widget type={TRANSCRIPTION} left />
            </Center>
          </Flex>
          <Box
            h={'65vh'}
            bg={
              'linear-gradient(83deg, rgba(56,247,211,1) 0%, rgba(144,193,225,1) 50%, rgba(179,117,180,1) 79%, rgba(247,93,175,1) 100%);'
            }
          ></Box>
        </>
      </PermissionsProvider>
      {/* </SideNavBar> */}
    </>
  )
}
