import { ReactElement } from 'react'
import { Flex, Text, Link, Center } from '@chakra-ui/react'
import { GithubLogo, Logo } from '../Logo'

export const PageHeader = (): ReactElement => {
  return (
    <Flex position={'absolute'} w={'100vw'} top={'5vh'} left={'5vh'} gap={'30vw'}>
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
  )
}

export default PageHeader
