type HuggingFaceAPIResult = {
  wav: BinaryData
}

const str2ab = (str: string) => {
  const buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
  const bufView = new Uint16Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
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
  console.log(decodedByteData)
  const rawAudioArrayBuffer = strToBuffer(decodedByteData)
  console.log(rawAudioArrayBuffer)
  return rawAudioArrayBuffer as HuggingFaceAPIResult
}

export default queryVietTranscription
