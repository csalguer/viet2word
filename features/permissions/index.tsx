import { Fragment, useState, useEffect, useCallback } from 'react'
import type { ReactElement } from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription, Flex, Spinner } from '@chakra-ui/react'
import { isNull } from 'lodash'
import { Center } from '@chakra-ui/react'

interface PermissionsProviderProps {
  children: ReactElement
}

const PermissionsProvider = ({ children }: PermissionsProviderProps): ReactElement => {
  const [permission, setPermission] = useState<boolean | null>(null)
  const getMicrophonePermission = useCallback(async () => {
    if ('MediaRecorder' in window) {
      try {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        })
        setPermission(true)
      } catch (err) {
        alert(err)
        setPermission(false)
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.')
    }
  }, [])

  useEffect(() => {
    getMicrophonePermission()
  }, [getMicrophonePermission])

  if (isNull(permission)) {
    return (
      <Center h={'100vh'}>
        <Spinner thickness='4px' emptyColor='gray.100' color='gray.500' size='xl' />
      </Center>
    )
  }
  return !permission ? (
    <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'} w={'100%'}>
      <Alert
        status='error'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Microphone Permissions
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          You have not yet authorized access to the microphone. Please refresh and allow permissions to continue.
        </AlertDescription>
      </Alert>
    </Flex>
  ) : (
    <>{children}</>
  )
}

export default PermissionsProvider
