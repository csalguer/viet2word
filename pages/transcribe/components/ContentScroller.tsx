import { useCallback } from 'react'
import { Center, Stack } from '@chakra-ui/react'
import { PanelContent, PanelType } from './Content'
import { nanoid } from '@reduxjs/toolkit'
import { content } from './utilities'

export const isVisible = (elm) => {
  const rect = elm.props.self.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const ContentScroller = () => {
  const handleContent = useCallback(() => {
    const panelNames = Object.keys(content)
    const wrappedPanels = panelNames.map((name) => {
      return (
        <Center
          id={'panel'}
          key={nanoid(6)}
          // bg={'orange'}
          gap={'space-evenly'}
          scrollBehavior={'smooth'}
          scrollSnapType={'y'}
        >
          <PanelContent panelType={name as PanelType}></PanelContent>
        </Center>
      )
    })
    return wrappedPanels
  }, [])

  return (
    <Stack
      id={'content'}
      display={'flex'}
      alignItems={'center'}
      direction={'column'}
      overflow={'scroll'}
      w={'100vw'}
      h={'100%'}
      // bg={'grey'}
    >
      {handleContent()}
    </Stack>
  )
}

export default ContentScroller
