const HUGGABLE_API_TOKEN = process.env.NEXT_PUBLIC_HUGGABLE_API_TOKEN

export const queryVietTranscription = async (data: ArrayBuffer): Promise<unknown> => {
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
  const result = await response.json()
  return result
}
