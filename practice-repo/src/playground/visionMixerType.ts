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
  if (config.visionMixer?.type ==VisionMixerDevice.Atem) {
    return "Blackmagic Atem Mix";
  } else if (config.visionMixer?.type ==VisionMixerDevice.Carbonite) {
    return "Ross Carbonite Mixer";
  } else {
    return "Unknown Mixer";
  }

}

const config: StudioConfig = {
  visionMixer: {
    type: VisionMixerDevice.Atem,
  },
};

console.log(getMixerName(config));
