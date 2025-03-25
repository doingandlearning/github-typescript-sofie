interface AudioConfig {
  defaultGain: number;
  enabled: boolean;
  micNames: string[];
}

const audioSettings: AudioConfig = {
  defaultGain: 10,
  enabled: true,
  micNames: ["mic1", "mic2"];
}

function logMicNames(config: StudioConfig) {
  if (Array.isArray(config.micNames)) {
    for (const mic of config.micNames) {
      console.log(mic.toUpperCase())
    }
  } else {
    console.log('No mic names found')
  }
}


