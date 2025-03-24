interface AudioConfig {
  defaultGain: number;
  enabled: boolean;
  micNames: string[];
  channel: number
}

const audioSettings: AudioConfig = {
  defaultGain: 10,
  enabled: true,
  micNames: ["mic1", "mic2"],
  channel: 2
};
