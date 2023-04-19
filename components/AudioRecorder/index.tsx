import { Fragment, useEffect } from "react"
import type { ReactElement } from "react"
import { Flex } from "@chakra-ui/react"

export const viet2wordQuery = async (filename): unknown => {
  const data = fs.readFileSync(filename)
  const response = await fetch(
    "https://api-inference.huggingface.co/models/nguyenvulebinh/wav2vec2-base-vietnamese-250h",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: data,
    }
  )
  const result = await response.json()
  return result
}

const AudioRecorder: ReactElement = () => {
  useEffect(() => {
    const recognize = async (): Promise<void> => {
      // eslint-disable-next-line prefer-const
      let recognizer
      const predictWord = (): void => {
        // Array of words that the recognizer is trained to recognize.
        const words = recognizer.wordLabels()
        recognizer.listen(
          ({ scores }) => {
            // Turn scores into a list of (score,word) pairs.
            scores = Array.from(scores).map((s, i) => ({
              score: s,
              word: words[i],
            }))
            // Find the most probable word.
            scores.sort((s1, s2) => s2.score - s1.score)
            document.querySelector("#console").textContent = scores[0].word
          },
          { probabilityThreshold: 0.75 }
        )
      }
      recognizer = speechCommands.create("BROWSER_FFT")
      await recognizer.ensureModelLoaded()
      predictWord()
    }
    void recognize()
  }, [])

  return (
    <>
      <Flex w={"100vw"} justifyContent={"center"} alignItems={"center"}>
        <Flex
          w={"50vw"}
          background={"gray.100"}
          h={"50vh"}
          rounded={6}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <div id="console" style={{ fontSize: "36px" }}></div>
        </Flex>
      </Flex>
    </>
  )
}

export default AudioRecorder
// viet2wordQuery("sample1.flac").then((response) => {
//   console.log(JSON.stringify(response));
// });
