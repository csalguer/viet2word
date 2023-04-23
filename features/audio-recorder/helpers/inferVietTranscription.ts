import { InferenceSession, Tensor } from 'onnxruntime-web'
const PATH_TO_MODEL = '../models/wav2vec2-base-vietnamese-250h.quant.onnx'

const closestMultipleOfFour = (num) => {
  const remainder = num % 4
  if (remainder === 0) return num
  return num + 4 - remainder
}
const audioDataToTensor = (data: ArrayBuffer): Tensor => {
  const float32Data = Float32Array.from(data)
  // const float32Data = new Float32Array(data, 0, inputLength / 4)
  return new Tensor('float32', float32Data)
}

export const inferVietTranscription = async (data: ArrayBuffer) => {
  const session = await InferenceSession.create(PATH_TO_MODEL, { executionProviders: ['wasm'] })
  const rawTensor = audioDataToTensor(data)
  const feed = {
    input: rawTensor,
  }
  // const feed = Tensor.from()
  console.log(feed)
  const inference = session.run(feed)
  console.log(inference)
  return session
  // const response = await fetch('http://localhost:8000/recognize', {
  //   method: 'POST',
  //   body: data,
  // })
  // const result = await response.json()
  // return result as HuggingFaceAPIResult
}
