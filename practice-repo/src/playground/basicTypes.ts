interface AudioConfig {
  defaultGain: number,
  enabled: boolean,
  micNames: string[],
  description: string[]
}

const audioSettings: AudioConfig = {
  defaultGain: 11,
  enabled: true,
  micNames: ["mic1", "mic2"],
  description: ["studio x default config"]
}
