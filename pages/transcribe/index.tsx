import Head from 'next/head'
import { ReactElement } from 'react'
import WaveSection from '@/features/common/components/WaveSection'
import AuroraSection from '@/features/common/components/AuroraSection'
import { Box, Fade } from '@chakra-ui/react'
import ContentScroller from './components/ContentScroller'
import PageHeader from '@/features/common/components/PageHeader'

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Vietnamese Language Tools</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        id={'page'}
        backgroundColor={' #ff6347'}
        backgroundImage={
          ' linear-gradient(48deg,rgba(255, 181, 86, 1) 0%,rgba(236, 105, 40, 1) 31%,rgba(199, 58, 103,1) 61%,rgba(149, 41, 171, 1))'
        }
        backgroundAttachment={' fixed'}
        h={'100vh'}
        gap={'10vh'}
      >
        <PageHeader />
        <Fade in={true}>
          <WaveSection>
            <ContentScroller />
          </WaveSection>
        </Fade>

        {/*Wave Down Bar down from top*/}
        {/* <AuroraSection>
          <ContentScroller />
        </AuroraSection> */}

        {/*Quick model description link to snippets + model research for STT & TTS w/ License information */}
        {/*Auto right fade for instruction + toggle between viet&english timer*/}
        {/* Form + Resume*/}
        {/* {contactMeSection} */}
        {/* <MenuBar /> */}
      </Box>
    </>
  )
}
