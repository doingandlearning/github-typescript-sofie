interface AudioConfig {
  defaultGain: number;
  enabled: boolean;
  micNames: string[];
}

const audioSettings: AudioConfig = {
  defaultGain: "high",
  enabled: true,
  micNames: ["mic1", "mic2"],
};
