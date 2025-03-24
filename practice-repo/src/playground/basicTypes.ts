interface AudioConfig {
  defaultGain: number;
  enabled: boolean;
  micNames: string[];
  description: string
}

const audioSettings: AudioConfig = {
  defaultGain: 100,
  enabled: true,
  micNames: ["mic1", "mic2"],
  description: "studio A default config"
};
