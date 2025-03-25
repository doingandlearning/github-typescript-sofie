interface StudioConfig {
  defaultGain?: number;
  micNames?: string[];
}

const config: StudioConfig = {
  defaultGain: 10,
  // micNames: ["mic1", "mic2"],
};

function logMicNames(config: StudioConfig) {
  if (Array.isArray(config.micNames)) {
    for (const mic of config.micNames) {
      console.log(mic.toUpperCase())
    }
  } else {
    console.log('No mic names found')
  }
}


// TODO: write a function to log each mic name in uppercase

function logicMicNames(config: StudioConfig) {
  if (Array.isArray(config.micNames)) {
    for (const mic of config.micNames) {
      console.log(mic.toUpperCase())
    }
  } else {
    console.log('No mic names found')
  }
}