type HuggingFaceAPIResult = {
  wav: BinaryData
}

const strToBuffer = (str: string) => {
  const arrayBuffer = new ArrayBuffer(str.length * 1)
  const newUint = new Uint8Array(arrayBuffer)
  newUint.forEach((_, i) => {
    newUint[i] = str.charCodeAt(i)
  })
  return newUint
}

const queryVietTranscription = async (data: string): Promise<ArrayBuffer> => {
  const request = {
    method: 'POST',
    body: JSON.stringify({ text: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await fetch('http://localhost:8000/speak', request)
  const result = await response.json()
  const decodedByteData = atob(result.data)
  const rawAudioArrayBuffer = strToBuffer(decodedByteData)
  return rawAudioArrayBuffer as HuggingFaceAPIResult
}

export default queryVietTranscription
