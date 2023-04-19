import { Fragment, useState, useEffect } from "react"
import type { ReactElement } from "react"
import { Flex } from "@chakra-ui/react"

interface AudioVisualizerProps {
  stream: MediaStream
}

const AudioVisualizer = ({ stream }: AudioVisualizerProps): ReactElement => {
  const [analyzer, setAnalyzer] = useState<AnalyserNode | null>(null)

  useEffect(() => {
    const audioContext = new AudioContext()
    const audioSource = audioContext.createMediaStreamSource(stream)
    const analyzer = audioContext.createAnalyser()
    analyzer.minDecibels = -90
    analyzer.maxDecibels = -10
    analyzer.smoothingTimeConstant = 0.85
    audioSource.connect(analyzer)
    analyzer.connect(audioContext.destination)
    analyzer.fftSize = 128
    setAnalyzer(analyzer)
  }, [stream])

  useEffect(() => {
    const canvas = document.getElementById(
      "audio-visualizer"
    ) as HTMLCanvasElement | null
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (canvas) {
      const context = canvas.getContext("2d")
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (context) {
        const WIDTH = canvas.width
        const HEIGHT = canvas.height
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (analyzer) {
          context.clearRect(0, 0, WIDTH, HEIGHT)
          const bufferLength = analyzer.frequencyBinCount
          const dataArray = new Float32Array(bufferLength)
          const sliceWidth = (WIDTH * 1.0) / bufferLength

          const animate = (): void => {
            requestAnimationFrame(animate)
            let x = 0
            context.fillStyle = "rgb(220, 220, 220)"
            context.fillRect(0, 0, WIDTH, HEIGHT)
            analyzer.getFloatFrequencyData(dataArray)
            context.lineWidth = 2
            context.strokeStyle = "rgb(0, 0, 0)"

            context.beginPath()

            for (let i = 0; i < bufferLength; i++) {
              const v = dataArray[i] / 128.0
              const y = (v * HEIGHT) / -2
              if (i === 0) {
                context.moveTo(x, y)
              } else {
                context.lineTo(x, y)
              }

              x += sliceWidth
            }
            context.lineTo(canvas.width, canvas.height / 2)
            context.stroke()
          }
          animate()
        }
      }
    }
  }, [analyzer])
  return (
    <>
      <Flex w={300} h={150}>
        <canvas width="300" height="150" id="audio-visualizer"></canvas>
      </Flex>
    </>
  )
}

export default AudioVisualizer