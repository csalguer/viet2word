import { ReactElement } from 'react'
import { Flex, Text, Link, Center } from '@chakra-ui/react'
import { GithubLogo } from '../Logo'
import { chakra } from '@chakra-ui/react'
import { LogoVariant } from '../Logo/LogoVariant'

interface AuthorTagProps {
  name: string
  link: string
}

const authorTag = ({ name, link }: AuthorTagProps) => {
  return (
    <Flex id={'self-contact'} flexDirection={'row'} justifyContent={'space-between'} gap={'0.8em'}>
      <Text fontSize={{ sm: '0.8em', lg: '1.6em' }} fontFamily={'monospace'} color={'white'}>
        Made by{' '}
      </Text>
      <GithubLogo></GithubLogo>
      <Link
        textDecoration={'underline'}
        fontSize={{ sm: '0.8em', lg: '1.6em' }}
        fontFamily={'monospace'}
        color={'white'}
        // style={{
        // }}
        href={link}
      >
        {name}
      </Link>
    </Flex>
  )
}

const AuthorTag = chakra(authorTag)

export const PageHeader = (): ReactElement => {
  return (
    <>
      <Center as={'section'} id={'page-header'} w={'100%'} justifyContent={'space-between'} padding={'2vh'}>
        <Center>
          <LogoVariant width={['0.6em', '1em', '2em', '4em']} height={['0.6em', '1em', '2em', '4em']} />
          <Text fontFamily={'Albula Pro'} fontSize={'2xl'} fontWeight={900} color={'white'}>
            SAO LẠI
          </Text>
        </Center>
        {/* <AuthorTag
          width={['md', 'xl', '2xl', '2xl']}
          height={['md', 'xl', '2xl', '2xl']}
          name={'csalguer'}
          link={'https://www.github.com/csalguer'}
        /> */}
      </Center>
    </>
  )
}

export default PageHeader
