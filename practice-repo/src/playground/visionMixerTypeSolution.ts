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
  if (config.visionMixer?.type === "atem") {
    return "Blackmagic Atem Mixer";
  } else if (config.visionMixer?.type === "carbonite") {
    return "Ross Carbonite Mixer";
  } else if (config.visionMixer?.type === "sony") {
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
    case "atem":
      return "Blackmagic Atem Mixer";
    case "carbonite":
      return "Ross Carbonite Mixer";
    case "sony":
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
