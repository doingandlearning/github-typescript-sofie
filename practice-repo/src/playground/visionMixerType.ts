enum VisionMixerDevice {
  Atem = "atem",
  Carbonite = "carbonite",
}

interface StudioConfig {
  visionMixer?: {
    type: VisionMixerDevice;
  };
}

function getMixerName(mixerConfig: StudioConfig): string {
  // TODO: Return a human-readable name based on visionMixer type
  if (mixerConfig.visionMixer?.type === "atem") {  

  return "atem mixer";

} else if (mixerConfig.visionMixer?.type === "carbonite") {

  return "carbonite";

} else {

  return "no mixer in this studio"
}

}

//    const type = mixerConfig.visionMixer?.type;
//    switch (type) {
//      case VisionMixerDevice.Atem:
//      return 'Blackmagic Atem Mixer';
//      case VisionMixerDevice.Carbonite:
//      return 'Ross Carbonite Mixer'
//      default:
//      return "No mixer defined"
//    }
// }

const mixerConfig: StudioConfig = {
  visionMixer: {
    type: VisionMixerDevice.Carbonite,
  },
};

console.log(getMixerName(mixerConfig));
