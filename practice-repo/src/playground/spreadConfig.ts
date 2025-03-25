interface AudioConfig {
  enabled: boolean;
  defaultGain: number;
  description?: string;
}

const baseAudio: AudioConfig = {
  enabled: true,
  defaultGain: 10,
};

  // TODO: Extend baseAudio, override defaultGain to 15, and add description

const studioAudio = {
  ...baseAudio,
  defaultGain: 15,
  description: 'Studio B audio config'
}

function printConfig(config: AudioConfig) {
  console.log(config);
}

printConfig(studioAudio);
