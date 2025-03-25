interface AudioConfig {
  enabled: boolean;
  defaultGain: number;
  description?: string;
}

const baseAudio: AudioConfig = {
  enabled: true,
  defaultGain: 10,
};

const studioAudio = {
  // TODO: Extend baseAudio, override defaultGain to 15, and add description
  ...baseAudio,
  defaultGain: 15,
  description: 'Mic at 15',
};

function printConfig(config: AudioConfig) {
  console.log(config);
}

printConfig(studioAudio);
