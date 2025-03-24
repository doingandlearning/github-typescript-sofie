interface AudioConfig {
  defaultGain: number;
  enabled: boolean;
  micNames: string[];
  description: string;
}

const audioSettings: AudioConfig = {
  defaultGain: 0,
  enabled: true,
  micNames: ["mic1", "mic2"],
  description: "Std A, Pres config"
};
