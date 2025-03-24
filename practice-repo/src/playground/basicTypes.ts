interface AudioConfig {
  defaultGain: number;
  enabled: boolean;
  micNames: string[];
  description: string
}

const audioSettings: AudioConfig = {
  defaultGain: 10,
  enabled: true,
  micNames: ["mic1", "mic2"],
  description: 'Studio A default config'
};
