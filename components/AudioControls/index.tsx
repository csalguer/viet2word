import { Fragment, useState, useEffect, useCallback, useRef } from "react"
import type { ReactElement } from "react"
import { Button, Flex, Heading } from "@chakra-ui/react"
import { isNull } from "lodash"

const mimeType = "audio/webm"

const AudioControls = (): ReactElement => {
  const [permission, setPermission] = useState(false)
  const [stream, setStream] = useState(null)

  const mediaRecorder = useRef(null)
  const [recordingStatus, setRecordingStatus] = useState("inactive")
  const [audioChunks, setAudioChunks] = useState([])
  const [audio, setAudio] = useState(null)

  const getMicrophonePermission = useCallback(async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        })
        setPermission(true)
        setStream(streamData)
      } catch (err) {
        alert(err.message)
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.")
    }
  }, [])

  const startRecording = async (): void => {
    setRecordingStatus("recording")
    // create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType })
    // set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media
    // invokes the start method to start the recording process
    mediaRecorder.current.start()
    // eslint-disable-next-line prefer-const
    let localAudioChunks = []
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return
      if (event.data.size === 0) return
      localAudioChunks.push(event.data)
    }
    setAudioChunks(localAudioChunks)
  }

  const stopRecording = (): void => {
    setRecordingStatus("inactive")
    // stops the recording instance
    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = () => {
      // creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType })
      // creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob)
      setAudio(audioUrl)
      setAudioChunks([])
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getMicrophonePermission()
  }, [getMicrophonePermission])

  return (
    <>
      <Heading>Vietnamese Speech to Text</Heading>
      <Flex w={"100vw"} justifyContent={"center"} alignItems={"center"}>
        <Flex
          w={"100vw"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            margin={10}
            w={"50vw"}
            background={"gray.100"}
            h={"50vh"}
            rounded={6}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {permission && recordingStatus === "inactive" ? (
              <Button
                colorScheme={"green"}
                margin={16}
                padding={8}
                id="recording-button"
                onClick={startRecording}
              >
                Start Recording
              </Button>
            ) : null}
            {recordingStatus === "recording" ? (
              <Button
                colorScheme={"red"}
                margin={16}
                padding={8}
                id="recording-button"
                onClick={stopRecording}
              >
                Stop Recording
              </Button>
            ) : null}
          </Flex>
          {!isNull(audio) && (
            <audio
              margin={10}
              src={audio}
              controls
              id="playback-sample"
            ></audio>
          )}

          {!isNull(audio) && (
            <a download id="download-button" href={audio}>
              Download
            </a>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default AudioControls
// viet2wordQuery("sample1.flac").then((response) => {
//   console.log(JSON.stringify(response));
// });
