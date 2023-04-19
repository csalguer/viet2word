import { Fragment, useState, useEffect, useCallback } from "react"
import type { ReactElement } from "react"
import { Button, Flex } from "@chakra-ui/react"
import encodeAudio from "./helpers/encodeAudio"
import AudioRecorder from "../../public/js/AudioRecorder"

export const viet2wordQuery = async (filename: string): Promise<unknown> => {
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

const AudioControls = (): ReactElement => {
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const [recordedUrl, setRecordedUrl] = useState<string>("")
  const [audioRecorder, setAudioRecorder] = useState(null)
  const [audioContext, setAudioContext] = useState(null)
  const [buffers, setBuffers] = useState([])
  useEffect(() => {
    const prepareStreamForRecording = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      })

      const ac = new AudioContext()
      await ac.audioWorklet.addModule("js/AudioRecorder.js")
      const mediaStreamSource = ac.createMediaStreamSource(stream)
      const awn = new AudioWorkletNode(ac, "audio-recorder")
      awn.port.addEventListener("message", (event) => {
        setBuffers([...buffers, event.data.buffer])
      })
      awn.port.start()
      mediaStreamSource.connect(awn)
      awn.connect(ac.destination)
      setAudioRecorder(awn)
      setAudioContext(ac)
    }
    prepareStreamForRecording()
  }, [setAudioRecorder, buffers, setBuffers])

  const handleToggleRecording = useCallback(async () => {
    if (!isRecording) {
      setIsRecording(true)
      const parameter = audioRecorder.parameters.get("isRecording")
      parameter.setValueAtTime(1, audioContext.currentTime)
      setBuffers([])
    } else {
      setIsRecording(false)
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      })
      const [track] = stream.getAudioTracks()
      const settings = track.getSettings()
      const parameter = audioRecorder.parameters.get("isRecording")
      parameter.setValueAtTime(0, audioContext.currentTime)

      const blob = encodeAudio(buffers, settings)
      console.log(blob)
      const url = URL.createObjectURL(blob)
      console.log(url)
      setRecordedUrl(url)
    }
  }, [audioRecorder, audioContext, buffers])

  return (
    <>
      <Flex w={"100vw"} justifyContent={"center"} alignItems={"center"}>
        <Flex
          w={"100vw"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            w={"50vw"}
            background={"gray.100"}
            h={"50vh"}
            rounded={6}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Button
              colorScheme={isRecording ? "red" : "green"}
              padding={16}
              id="recording-button"
              onClick={handleToggleRecording}
            >
              {isRecording ? "Stop" : "Start"} Recording
            </Button>
            <Button id="download-button" padding={16}>
              Download
            </Button>
          </Flex>
          <audio src={recordedUrl} controls id="playback-sample"></audio>
        </Flex>
      </Flex>
    </>
  )
}

export default AudioControls
// viet2wordQuery("sample1.flac").then((response) => {
//   console.log(JSON.stringify(response));
// });
