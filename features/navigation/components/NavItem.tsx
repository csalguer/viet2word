import { ReactElement } from 'react'
import { Flex, Box, FlexProps, Icon, Link, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactElement | string
  onClick: () => void
  rest?: FlexProps
}

const NavItem = ({ icon, children, onClick, rest }: NavItemProps) => {
  return (
    <Link role={'group'} onClick={onClick} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex flexDirection={'column'} justifyContent={'center'}>
        <Flex align={'flex-end'} padding={6} cursor='pointer' _hover={{ color: 'gray.500' }} {...rest}>
          {icon && (
            <>
              <Icon
                as={icon}
                color={'gray.600'}
                h={'24px'}
                w={'24px'}
                marginRight={4}
                _groupHover={{
                  color: 'gray.900',
                }}
              />
              <Text _groupHover={{ fontWeight: 'bold', color: 'gray.900' }} fontSize={18} color={'gray.600'}>
                {children}
              </Text>
            </>
          )}
        </Flex>
        <Flex
          flexDirection={'row'}
          _groupHover={{ alignItems: 'flex-start' }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box
            background={'gray.500'}
            height={'2px'}
            width={'0%'}
            _groupHover={{
              width: '50%',
              transition: 'width 1s ease',
            }}
          ></Box>
          <Box
            background={'gray.500'}
            height={'2px'}
            width={'0%'}
            _groupHover={{
              width: '50%',
              transition: 'width 1s ease',
            }}
          ></Box>
        </Flex>
      </Flex>
    </Link>
  )
}

export default NavItem
