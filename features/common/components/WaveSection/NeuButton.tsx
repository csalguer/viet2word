import { IconButton, Button } from '@chakra-ui/react'

// .button-30:focus {
//   box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
// }

// .button-30:hover {
//   box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
//   transform: translateY(-2px);
// }

// .button-30:active {
//   box-shadow: #D6D6E7 0 3px 7px inset;
//   transform: translateY(2px);
// }

const NeuButton = (): ReactElement => {
  return (
    <>
      <IconButton
        w={'6em'}
        h={'6em'}
        borderRadius={'50%'}
        // bg={'transparent'}
        outline={'none'}
        // borderRadius={'4px'}
        borderWidth={0}
        boxSizing={'border-box'}
        boxShadow={
          'rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;'
        }
        align-items={'center'}
        appearance={'none'}
        backgroundColor={'#FCFCFD'}
        color={'#36395A'}
        cursor={'pointer'}
        display={'inline-flex'}
        fontFamily={'"JetBrains Mono",monospace'}
        justify-content={'center'}
        lineHeight={'1'}
        listStyle={'none'}
        overflow={'hidden'}
        paddingLeft={'16px'}
        paddingRight={'16px'}
        position={'relative'}
        textAlign={'left'}
        textDecoration={'none'}
        transition={'box-shadow .15s,transform .15s'}
        userSelect={'none'}
        touchAction={'manipulation'}
        whiteSpace={'nowrap'}
        willChange={'box-shadow,transform'}
        fontSize={'18px'}
        stroke={'#00000023'}
      >
        TEXT
      </IconButton>
    </>
  )
}

export default NeuButton
