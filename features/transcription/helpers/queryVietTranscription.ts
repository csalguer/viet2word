const HUGGABLE_API_TOKEN = process.env.NEXT_PUBLIC_HUGGABLE_API_TOKEN

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

type HuggingFaceAPIError = {
  error: string
  estimated_time: number
}
type HuggingFaceAPIResult = {
  text: string
}

type HuggingFaceAPIResponse = HuggingFaceAPIError | HuggingFaceAPIResult

export const queryVietTranscription = async (
  data: ArrayBuffer | null,
): Promise<HuggingFaceAPIResult> => {
  if (data) {
    const response = await fetch('http://localhost:8000/recognize', {
      method: 'POST',
      body: data,
    })
    const result = await response.json()
    return result as HuggingFaceAPIResult
  }
  return { text: 'Endpoint expected wav byte data' }
}

// Method to be used with HuggingFaceAPI's that requires a retry until model is up and running
export const queryVietTranscriptionAPI = async (
  data: ArrayBuffer,
): Promise<HuggingFaceAPIResult> => {
  const performQuery = async (data: ArrayBuffer): Promise<HuggingFaceAPIResponse> => {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/nguyenvulebinh/wav2vec2-base-vietnamese-250h',
      {
        headers: {
          Authorization: `Bearer ${HUGGABLE_API_TOKEN}`,
        },
        method: 'POST',
        body: data,
      },
    )
    return await response.json()
  }

  let result = await performQuery(data)
  while ('error' in result) {
    const { estimated_time } = result
    await sleep(estimated_time * 1000)
    result = await performQuery(data)
  }
  return result as HuggingFaceAPIResult
}
