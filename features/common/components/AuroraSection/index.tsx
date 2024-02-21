import { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'

import styles from './aurora.module.css'
// import * as styles from './aurora.module.css'

interface AuroraSectionProps {
  children?: JSX.Element
}

// interface LightSourceProps {
//   value: number //Volume # from [volumeMin, volumeMax] to be used to grow light as if we "grew" the bar in a bar visualizer
// }

// export type DataValue = {
//   value: number
//   min: number
//   max: number
// }

// export type InputData = {
//   data: DataValue[]
// }

// export const LightSource = ({ vary }: LightSourceProps) => {
//   return <div className=vary ? vary(styles.lightsource)}></div>
// }

const AuroraSection = ({ children }: AuroraSectionProps): ReactElement => {
  return (
    <>
      <Box className={styles.container}>
        <svg className={styles.auroraSphere} xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <filter id='goo'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                result='goo'
              />
              <feBlend in='SourceGraphic' in2='goo' />
            </filter>
          </defs>
        </svg>
        <div className={styles.gradients}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.g6}></div>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.g6}></div>
        </div>
        <Box>{children}</Box>
      </Box>
    </>
  )
}

export default AuroraSection
