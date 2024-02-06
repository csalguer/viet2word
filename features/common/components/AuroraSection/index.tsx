import { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'
import * as styles from './aurora.module.css'

interface AuroraSectionProps {
  // vary: () => CSSStyleValue
  content?: ReactElement
  motion?: MotionType
}

interface LightSourceProps {}

enum MotionType {
  CONTROLLED,
  RANDOM,
}

type DataValue = {
  value: number
  min: number
  max: number
}

type InputData = {
  data: DataValue[]
}

const buckets: InputData = {
  data: [
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
    {
      value: 100,
      min: 90,
      max: 100,
    },
  ],
}

const LightSource = ({ vary }: LightSourceProps) => {
  return <div className={vary ?? vary(styles.lightsource)}></div>
}

const AuroraSection = ({
  content,
  motion = MotionType.RANDOM,
}: AuroraSectionProps): ReactElement => {
  return (
    <>
      <Box className={styles.container}>
        <svg className='aurora-sphere' xmlns='http://www.w3.org/2000/svg'>
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
        </div>
        {content}
      </Box>
    </>
  )
}

export default AuroraSection
