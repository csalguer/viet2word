import { useCallback } from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { PanelContent, PanelType, content } from './Content'
import { nanoid } from '@reduxjs/toolkit'

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
        <Box
          id={'panel-container'}
          // marginTop={'10vh'}
          border={'2px white solid'}
          key={nanoid(6)}
          scrollBehavior={'smooth'}
          scrollSnapAlign={'start'}
          scrollSnapType={'block'}
          scrollSnapStop={'always'}
          w={'100%'}
          h={'100%'}
        >
          {/* <SlideFade key={nanoid(6)} unmountOnExit> */}
          <PanelContent panelType={name as PanelType}></PanelContent>
          {/* </SlideFade> */}
        </Box>
      )
    })
    return wrappedPanels
  }, [])

  return (
    <Stack id={'content'} direction={'column'} overflow={'scroll'} w={'100%'} h={'100%'}>
      {handleContent()}
    </Stack>
  )
}

export default ContentScroller
