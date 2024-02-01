import { ReactElement } from 'react'
import { Flex, Text, Link, Center } from '@chakra-ui/react'
import { GithubLogo, Logo } from '../Logo'
import LogoVariant from '../Logo/LogoVariant'
import styles from '../WaveSection/transcribe.module.css'

const SelfAttributionTag = (): ReactElement => {
  return (
    <Flex position={'absolute'} top={'5vh'} right={'15vh'} flexDirection={'row'} gap={'0.8em'}>
      <Text fontSize={{ sm: '0.8em', lg: '1.6em' }} fontFamily={'monospace'} color={'white'}>
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
    </Flex>
  )
}

export const PageHeader = (): ReactElement => {
  return (
    <>
      <Flex position={'absolute'} w={'100vw'} top={'2vh'} left={'10vh'}>
        <LogoVariant width={'6em'} height={'6em'} />
        <Center>
          <Text fontFamily={'Albula Pro'} fontSize={'2xl'} fontWeight={900} color={'white'}>
            SAO LẠI
          </Text>
        </Center>
        <SelfAttributionTag />
      </Flex>
    </>
  )
}

export default PageHeader
