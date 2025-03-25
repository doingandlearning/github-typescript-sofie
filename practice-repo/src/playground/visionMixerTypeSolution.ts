enum VisionMixerDevice {
  Atem = "atem",
  Carbonite = "carbonite",
  Sony = "sony",
}

interface StudioConfig {
  visionMixer?: {
    type: VisionMixerDevice;
  };
}

// Optional chaining
function getMixerName(config: StudioConfig): string {
  if (config.visionMixer?.type === VisionMixerDevice.Atem) {
    return "Blackmagic Atem Mixer";
  } else if (config.visionMixer?.type === VisionMixerDevice.Carbonite) {
    return "Ross Carbonite Mixer";
  } else if (config.visionMixer?.type === VisionMixerDevice.Sony) {
    return "Sony Vision Mixer";
  } else {
    return "No vision mixer in this studio.";
  }
}

// not or opposite!
function getMixerName2(config: StudioConfig): string {
  if (!config.visionMixer) {
    return "No vision mixer in this studio.";
  }
  switch (config.visionMixer.type) {
    case VisionMixerDevice.Atem:
      return "Blackmagic Atem Mixer";
    case VisionMixerDevice.Carbonite:
      return "Ross Carbonite Mixer";
    case VisionMixerDevice.Sony:
      return "Sony Vision Mixer";
    default:
      return "";
  }
}

const config: StudioConfig = {
  visionMixer: {
    type: VisionMixerDevice.Carbonite,
  },
};
const config2: StudioConfig = {};

console.log(getMixerName2(config));
