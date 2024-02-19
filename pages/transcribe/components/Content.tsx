import { Flex } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { content } from './utilities'

export enum PanelType {
  splash = 'splash',
  about = 'about',
  demo = 'demo',
  features = 'features',
  docs = 'docs',
  contact = 'contact',
}

type PanelContentProps = {
  panelType: PanelType
  callback?: () => void
}

export const PanelContent = ({ panelType }: PanelContentProps): ReactElement => {
  return (
    <>
      <Flex
        id={'panel-content'}
        scrollSnapAlign={'center'}
        scrollSnapStop={'always'}
        justifyContent={'space-between'}
        height={'90vh'}
      >
        {content[panelType]}
      </Flex>
    </>
  )
}
