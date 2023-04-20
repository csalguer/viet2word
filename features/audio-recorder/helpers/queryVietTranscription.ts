import * as fs from 'fs'

const HUGGABLE_API_TOKEN = process.env.HUGGABLE_API_TOKEN

export const queryVietTranscription = async (filename: string): Promise<unknown> => {
  const data = fs.readFileSync(filename)
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
