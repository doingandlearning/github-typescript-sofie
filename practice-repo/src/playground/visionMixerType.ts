enum VisionMixerDevice {
  Atem = "atem",
  Carbonite = "carbonite",
}

interface StudioConfig {
  visionMixer?: {
    type: VisionMixerDevice;
  };
}

function getMixerName(config: StudioConfig): string {
  // TODO: Return a human-readable name based on visionMixer type
  return "";
}

const config: StudioConfig = {
  visionMixer: {
    type: VisionMixerDevice.Atem,
  },
};

console.log(getMixerName(config));
