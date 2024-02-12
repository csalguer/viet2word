import { ReactElement, useCallback, useLayoutEffect } from 'react'
import { VisuallyHidden, SlideFade, Slide, Fade, Container, Flex, Stack } from '@chakra-ui/react'
import { PanelContent, ContentType } from './Content'
import { nanoid } from '@reduxjs/toolkit'

type ScrollerType = {
  content: {
    splash: ReactElement[]
    about: ReactElement[]
    features: ReactElement[]
    demo: ReactElement[]
    docs: ReactElement[]
    contact: ReactElement[]
  }
}

const isVisible = (elm) => {
  const rect = elm.props.self.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const ContentScroller = ({ content }: ScrollerType) => {
  const handleContent = useCallback(() => {
    const x = Object.entries(content)
    x.map((panel, i) => {
      const [panelType, elements] = panel
      return (
        <Flex
          key={nanoid(6)}
          scrollBehavior={'smooth'}
          scrollSnapAlign={'start'}
          scrollSnapType={'block'}
          scrollSnapStop={'always'}
          w={'100%'}
          h={'100%'}
        >
          {elements.map((elem, i) => {
            return (
              <SlideFade key={nanoid(6)} unmountOnExit>
                {elem}
              </SlideFade>
            )
          })}
        </Flex>
      )
    })
  }, [content])

  return (
    <Stack direction={'vertical'} overflow={'scroll'} w={'100%'} h={'100%'}>
      {handleContent()}
    </Stack>
  )
}

export default ContentScroller
