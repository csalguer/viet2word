import { ReactElement } from 'react'
import { Flex, Text, Link, Center, Stack } from '@chakra-ui/react'
import { GithubLogo } from '../Logo'
import { LogoVariant } from '../Logo/LogoVariant'

const SelfAttributionTag = (): ReactElement => {
  return (
    <Flex id={'self-contact'} position={'absolute'} top={'2vh'} right={'15vh'} flexDirection={'row'} gap={'0.8em'}>
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
      <Flex id={'page-header'} position={'absolute'} w={'100%'} padding={'2vh 5vh'}>
        <Center>
          <LogoVariant width={'6em'} height={'6em'} />
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
