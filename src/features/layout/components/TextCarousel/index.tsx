import { ReactElement } from 'react'
import { Text, Flex, Box } from '@chakra-ui/react'
import styles from './carousel.module.css'
import { nanoid } from '@reduxjs/toolkit'

type TextBlockData = { text: string; font: string; weight: number; color: string }
interface TextBlockProps {
  item: TextBlockData
}
const TextBlock = ({ item }: TextBlockProps): ReactElement => {
  const { text, font, weight, color } = item
  return (
    <Text
      left={'0em'}
      position={'absolute'}
      fontFamily={font}
      color={color}
      fontWeight={weight}
      whiteSpace={'nowrap'}
      fontSize={'6xl'}
    >
      {text}
    </Text>
  )
}

const toDisplay = [
  { text: 'Tôi không kiểu', font: 'Sriracha', weight: 700, color: 'white' },
  { text: 'Không sao', font: 'Grape Nuts', weight: 600, color: 'white' },
  { text: 'Ướng nước nhớ nguồn', font: 'Sedgwick Ave', weight: 800, color: 'white' },
  { text: 'Ăn quả nhớ kè trồng cây', font: 'Oooh Baby', weight: 700, color: 'white' },
]

export const TextCarousel = (): ReactElement => {
  return (
    <>
      <Box position={'absolute'} padding={'8em'} top={'20vh'} left={'45vw'}>
        <Flex className={styles.reveal}>
          {toDisplay.map((item) => {
            return <TextBlock key={nanoid(6)} item={item} />
          })}
        </Flex>
      </Box>
    </>
  )
}
