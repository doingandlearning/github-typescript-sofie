interface StudioConfig {
  defaultGain?: number;
  micNames?: string[];
}

const config1: StudioConfig = {
  defaultGain: 10,
<<<<<<< Updated upstream
  // micNames: ["mic1", "mic2"],
=======
  micNames: ["mic1", "mic2", "mic3"],
>>>>>>> Stashed changes
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
function logMicName(config: StudioConfig) {
  if (Array.isArray(config.micNames)) {
    for (const mic of config.micNames) {
      console.log(mic.toUpperCase());
    }
  } else {
    console.log("No mic names found");
  }
}

logMicName(config1);
