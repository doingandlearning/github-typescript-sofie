enum VisionMixerDevice {
  Atem = "atem",
  Carbonite = "carbonite",
}

interface StudioConfig {
  visionMixer?: {
    type: VisionMixerDevice;
  };
}
 // TODO: Return a human-readable name based on visionMixer type
function getMixerName(config: StudioConfig) {
  if (config.visionMixer?.type === VisionMixerDevice.Atem) {
    return "Blackmagic Atem Mixer";
  } else if ((config.visionMixer?.type === VisionMixerDevice.Carbonite)) {
    return "Ross Carbonite Mixer";
  } else {
    return "Unknown Mixer.";
  }
}

const config1: StudioConfig = {
  visionMixer: {
    type: VisionMixerDevice.Atem,
  },
};

const config2: StudioConfig = {}

console.log(getMixerName(config1));
