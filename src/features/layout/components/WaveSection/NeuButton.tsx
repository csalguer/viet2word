import { ReactElement } from 'react'
import { IconButton } from '@chakra-ui/react'

const NeuButton = (): ReactElement => {
  return (
    <>
      <IconButton
        w={'6em'}
        h={'6em'}
        borderRadius={'50%'}
        outline={'none'}
        borderWidth={0}
        boxSizing={'border-box'}
        boxShadow={'rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;'}
        align-items={'center'}
        appearance={'none'}
        backgroundColor={'#FCFCFD'}
        color={'#36395A'}
        cursor={'pointer'}
        display={'inline-flex'}
        fontFamily={'"JetBrains Mono",monospace'}
        justify-content={'center'}
        lineHeight={'1'}
        overflow={'hidden'}
        paddingLeft={'16px'}
        paddingRight={'16px'}
        position={'relative'}
        textAlign={'left'}
        textDecoration={'none'}
        transition={'box-shadow .15s,transform .15s'}
        userSelect={'none'}
        whiteSpace={'nowrap'}
        willChange={'box-shadow,transform'}
        fontSize={'18px'}
        stroke={'#00000023'}
        aria-label='Button'
      >
        TEXT
      </IconButton>
    </>
  )
}

export default NeuButton
