import { ReactElement } from 'react'
import {
  Box,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
} from '@chakra-ui/react'
import { FiHome, FiSettings, FiPenTool, FiBookOpen } from 'react-icons/fi'
import { IconType } from 'react-icons'
import NavItem from './components/NavItem'
import { useRouter } from 'next/router'

interface LinkItemProps {
  name: string
  icon: IconType
  route: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, route: '/home' },
  { name: 'Transcription', icon: FiPenTool, route: '/transcribe' },
  { name: 'Reading', icon: FiBookOpen, route: '/read' },
  { name: 'Settings', icon: FiSettings, route: '/' },
]

interface SideNavBarProps {
  children: ReactElement
}

const SideNavBar = ({ children }: SideNavBarProps): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH='100vh' bg={'white'}>
      <SideBarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        size={'full'}
      >
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box marginLeft={{ base: 0, md: 60 }} padding={'4'}>
        {children}
      </Box>
    </Box>
  )
}

interface SideBarContentProps extends BoxProps {
  onClose: () => void
  rest?: BoxProps
}

const SideBarContent = ({ onClose, rest }: SideBarContentProps) => {
  const router = useRouter()
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderRight={'1px'}
      borderRightColor={useColorModeValue('gray.200', 'gray.800')}
      width={{ base: 'full', md: 60 }}
      position={'fixed'}
      height='full'
      role='navigation'
      {...rest}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        height={75}
        marginX={8}
        marginBottom={16}
      >
        <Text textAlign={'center'} fontSize={'md'} fontWeight={'bold'} onClick={onClose}>
          <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            Vietnamese Language Tools
          </Link>
        </Text>
        {/* <CloseButton position={'relative'} display={{ base: 'flex' }} onClick={onClose} /> */}
      </Flex>
      {LinkItems.map((item) => {
        const handleClick = async () => {
          await router.push(item.route)
        }
        return (
          <NavItem key={item.name} icon={item.icon} onClick={handleClick}>
            {item.name}
          </NavItem>
        )
      })}
    </Box>
  )
}

export default SideNavBar
