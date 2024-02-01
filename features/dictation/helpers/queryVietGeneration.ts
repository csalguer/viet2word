export const strToBuffer = (str: string): Uint8Array => {
  const arrayBuffer = new ArrayBuffer(str.length * 1)
  const newUint: Uint8Array = new Uint8Array(arrayBuffer)
  newUint.forEach((_, i) => {
    newUint[i] = str.charCodeAt(i)
  })
  return newUint
}

const queryVietGeneration = async (data: string): Promise<Uint8Array> => {
  const request = {
    method: 'POST',
    body: JSON.stringify({ text: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await fetch('http://localhost:8000/speak', request)
  const result = await response.json()
  const decodedByteDataStr = atob(result.data)
  const wavData = strToBuffer(decodedByteDataStr)
  return wavData
}

export default queryVietGeneration
