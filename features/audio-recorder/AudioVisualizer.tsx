import { Fragment, useState, useEffect, useCallback } from 'react'
import type { ReactElement } from 'react'
import { Box, Center, Flex } from '@chakra-ui/react'
import { isNull } from 'lodash'

interface AudioVisualizerProps {
  stream: MediaStream
  widget?: boolean
}

type VisualizerStyleOptions = {
  fillStyle: string
  lineWidth: number
  strokeStyle: string
}

const widgetStyling: VisualizerStyleOptions = {
  fillStyle: '#EDF2F7',
  lineWidth: 2,
  strokeStyle: '#3182ce',
}

const mainStyling: VisualizerStyleOptions = {
  fillStyle: '#ffffff00', //Transparent white
  lineWidth: 4,
  strokeStyle: '#EDF2F765',
}

// const ColorPalette = {}

// Check for other styling options or CSS type > multiple waveforms?

// Set to StreamInfo and remove all stream + context references here. Focus
// on the canvas element and always have some sort of animation callback as
// input so the canvas can be the base generic layer and the animation
// and the styling/audio data can be input into the visualizer
// presets for widget above ^, Preset for main In Progress

const AudioVisualizer = ({ stream, widget = true }: AudioVisualizerProps): ReactElement => {
  // CHANGE VALUE OF WIDGE TO FALSE LATER
  const [analyzer, setAnalyzer] = useState<AnalyserNode | null>(null)
  const [audioSource, setAudioSource] = useState<MediaStreamAudioSourceNode | null>(null)

  const setupAnalyzer = useCallback(() => {
    if (!isNull(stream)) {
      const audioContext = new AudioContext()
      const audioSource = audioContext.createMediaStreamSource(stream)
      setAudioSource(audioSource)

      const analyzer = audioContext.createAnalyser()
      analyzer.minDecibels = -90
      analyzer.maxDecibels = -10
      analyzer.smoothingTimeConstant = 0.85
      audioSource.connect(analyzer)
      analyzer.fftSize = 128
      setAnalyzer(analyzer)
    }
  }, [stream])

  useEffect(() => {
    audioSource ?? setupAnalyzer()
  }, [setupAnalyzer, audioSource])

  const styleVisuals = useCallback(
    (context: CanvasRenderingContext2D) => {
      Object.assign(context, widget ? widgetStyling : mainStyling)
    },
    [widget],
  )

  useEffect(() => {
    if (!analyzer) return
    const canvas = document.getElementById('audio-visualizer') as HTMLCanvasElement | null
    if (canvas && stream.getAudioTracks().length > 0) {
      const context2D = canvas.getContext('2d')
      if (context2D) {
        //TODO: Check if this line/condition cn be removed
        context2D.clearRect(0, 0, canvas.height, canvas.height)
        const bufferLength = analyzer.frequencyBinCount
        const dataArray = new Float32Array(bufferLength)
        const sliceWidth = (canvas.height * 1.0) / bufferLength

        const animate = (): void => {
          requestAnimationFrame(animate)
          let x = 0
          context2D.fillRect(1, 1, canvas.height, canvas.height)
          styleVisuals(context2D)
          analyzer.getFloatFrequencyData(dataArray)
          context2D.beginPath()

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0
            const y = (v * canvas.height) / -2
            if (i === 0) {
              context2D.moveTo(x, y)
            } else {
              context2D.lineTo(x, y)
            }
            x += sliceWidth
          }
          context2D.lineTo(canvas.width, canvas.height / 2)
          context2D.stroke()
        }
        animate()
      }
    }
  }, [analyzer, audioSource, stream, styleVisuals])

  if (isNull(stream)) {
    return (
      <Center w={'60%'} h={100}>
        <Box //Change HTML tag and handle an animation within the actual canvas elem for a single return, no if/else block
          width='100%'
          height='2px'
          bg={widget ? widgetStyling.strokeStyle : mainStyling.strokeStyle}
        ></Box>
      </Center>
    )
  }
  return (
    <>
      <Flex w={300} h={100}>
        <canvas width='300' height='100' id='audio-visualizer'></canvas>
      </Flex>
    </>
  )
}

export default AudioVisualizer
