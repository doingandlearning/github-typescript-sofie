import { baseAudioConfig } from "./configs/baseAudio";

interface AudioConfig {
  enabled: boolean;
  defaultGain: number;
  description?: string;
}

const baseAudio: AudioConfig = {
  enabled: true,
  defaultGain: 10,
};

const studioAudio: AudioConfig = {
  ...baseAudio,
  defaultGain: 15, 
  description: "Studio B audio config"
}
// TODO: Extend baseAudio, override defaultGain to 15, and add description

function printConfig(config: AudioConfig) {
  console.log(config);
}

printConfig(studioAudio);
