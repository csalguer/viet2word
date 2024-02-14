import { ReactElement } from 'react'
import { Flex, Text, Link, Center, Stack } from '@chakra-ui/react'
import { GithubLogo } from '../Logo'
import { LogoVariant } from '../Logo/LogoVariant'

const SelfAttributionTag = (): ReactElement => {
  return (
    <Flex id={'self-contact'} flexDirection={'row'} justifyContent={'space-between'} gap={'0.8em'}>
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
      <Center as={'section'} id={'page-header'} w={'100%'} justifyContent={'space-between'} padding={'2vh 5vh'}>
        <Center>
          <LogoVariant width={'4em'} height={'4em'} />
          <Text fontFamily={'Albula Pro'} fontSize={'2xl'} fontWeight={900} color={'white'}>
            SAO LẠI
          </Text>
        </Center>
        <SelfAttributionTag />
      </Center>
    </>
  )
}

export default PageHeader
