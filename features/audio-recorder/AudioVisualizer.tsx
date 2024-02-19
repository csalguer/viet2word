import { Fragment, useState, useRef, useEffect, useCallback } from 'react'
import type { ReactElement } from 'react'
import { Box, Center, Flex, useDimensions, useMediaQuery } from '@chakra-ui/react'
import { isNull } from 'lodash'

interface AudioVisualizerProps {
  stream?: MediaStream | null
  widget?: boolean
}

type VisualizerStyleOptions = {
  fillStyle: string
  lineWidth: number
  strokeStyle: string
}

const widgetStyling: VisualizerStyleOptions = {
  fillStyle: 'rgba(255, 255, 255, 0.2)',
  lineWidth: 2,
  strokeStyle: '#3182ce',
}

const mainStyling: VisualizerStyleOptions = {
  fillStyle: 'rgba(255, 255, 255, 0.2)', //Transparent white
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
  const [isDesktop] = useMediaQuery('(min-width: 450px)')
  const vizRef = useRef()
  const dimensions = useDimensions(vizRef)
  // CHANGE VALUE OF WIDGE TO FALSE LATER
  const [analyzer, setAnalyzer] = useState<AnalyserNode | null>(null)
  const [audioSource, setAudioSource] = useState<MediaStreamAudioSourceNode | null>(null)

  const setupAnalyzer = useCallback(() => {
    if (stream) {
      const audioContext = new AudioContext()
      stream.onremovetrack = (event: MediaStreamTrackEvent) => {
        // eslint-disable-next-line no-console
        console.log(event, 'Closing out audioContext: ', audioContext)
        audioContext.close()
      }
      const audioSource = audioContext.createMediaStreamSource(stream)
      setAudioSource(audioSource)
      const analyzer = audioContext.createAnalyser()
      analyzer.minDecibels = -90
      analyzer.maxDecibels = -10
      analyzer.smoothingTimeConstant = 0.85
      analyzer.fftSize = 128
      audioSource.connect(analyzer)
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
    if (canvas && stream && stream.getAudioTracks().length > 0) {
      const context2D = canvas.getContext('2d')

      if (context2D) {
        //TODO: Check if this line/condition cn be removed
        context2D.clearRect(0, 0, canvas.height, canvas.height)
        const bufferLength = analyzer.frequencyBinCount
        const dataArray = new Float32Array(bufferLength)
        const sliceWidth = (canvas.width * 1.0) / bufferLength
        const animate = (): void => {
          requestAnimationFrame(animate)
          context2D.clearRect(0, 0, context2D.canvas.width, context2D.canvas.height)
          let x = 0
          context2D.fillStyle = 'rgba(255, 255, 255, 0.0)'
          context2D.lineWidth = 4
          context2D.strokeStyle = '#EDF2F7'
          context2D.fillRect(0, 0, context2D.canvas.width, context2D.canvas.height)
          analyzer.getFloatFrequencyData(dataArray)
          const min = Math.min(...dataArray)
          const max = Math.max(...dataArray)
          const spread = min - max

          context2D.beginPath()

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128
            const y = -v * (canvas.height / 0.8) + spread
            if (i === 0) {
              context2D.moveTo(x, y)
            } else {
              context2D.lineTo(x, y)
            }
            x += sliceWidth
          }
          context2D.stroke()
        }
        animate()
      }
    }
  }, [analyzer, audioSource, stream, styleVisuals])

  if (isNull(stream)) {
    return (
      <Center ref={vizRef} w={'100vw'} h={'35vh'} background={'transparent'}>
        <Box //Change HTML tag and handle an animation within the actual canvas elem for a single return, no if/else block
          width='100vw'
          height='2px'
          bg={'rgba(255, 255, 255, 0.2)'}
        ></Box>
      </Center>
    )
  }
  return (
    <>
      <Center ref={vizRef} w={'100vw'} h={'35vh'} background={'transparent'}>
        <canvas
          width={dimensions?.borderBox.width}
          height={dimensions?.borderBox.height}
          color='rgba(255, 255, 255, 0.2)'
          id='audio-visualizer'
        ></canvas>
      </Center>
    </>
  )
}

export default AudioVisualizer
