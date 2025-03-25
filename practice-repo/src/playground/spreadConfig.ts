interface AudioConfig {
  enabled: boolean;
  defaultGain: number;
  description?: string;
}

export const baseAudio: AudioConfig = {
  enabled: true,
  defaultGain: 10,
};

const studioAudio = {
  // TODO: Extend baseAudio, override defaultGain to 15, and add description
};

function printConfig(config: AudioConfig) {
  console.log(config);
}

// printConfig(studioAudio);
