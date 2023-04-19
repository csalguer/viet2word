import * as fs from "fs"

export const queryVietTranscription = async (
  filename: string
): Promise<unknown> => {
  const data = fs.readFileSync(filename)
  const response = await fetch(
    "https://api-inference.huggingface.co/models/nguyenvulebinh/wav2vec2-base-vietnamese-250h",
    {
      headers: {
        Authorization: "Bearer",
      },
      method: "POST",
      body: data,
    }
  )
  const result = await response.json()
  return result
}
