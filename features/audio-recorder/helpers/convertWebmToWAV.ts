import { createFFmpeg } from '@ffmpeg/ffmpeg'

const convertWebmToWAV = async (webmBlob: Blob): Promise<Blob> => {
  const ffmpeg = createFFmpeg({
    mainName: 'main',
    corePath: 'https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js',
    log: false,
  })
  await ffmpeg.load()

  const inputName = 'input.webm'
  const outputName = 'output.wav'
  const sourceBuffer = await webmBlob.arrayBuffer()

  ffmpeg.FS('writeFile', inputName, new Uint8Array(sourceBuffer, 0, sourceBuffer.byteLength))
  await ffmpeg.run('-i', inputName, '-ar', '16000', outputName)
  const outputData = ffmpeg.FS('readFile', outputName)
  const outputBlob = new Blob([outputData.buffer], { type: 'audio/wav' })
  return outputBlob
}

export default convertWebmToWAV
