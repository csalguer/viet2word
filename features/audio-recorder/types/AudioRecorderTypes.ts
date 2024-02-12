export type StreamInfo = {
  stream: MediaStream
  tracks: MediaStreamTrack[] // Audio Input Track only (every has kind=="microphone")
  context: MediaStreamAudioSourceNode
}
