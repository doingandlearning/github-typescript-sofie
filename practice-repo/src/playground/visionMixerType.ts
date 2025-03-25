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
    const type = mixerConfig.visionMixer?.type;

    switch (type) {

      case VisionMixerDevice.Atem:
      return 'Blackmagic Atem Mixer';
      case VisionMixerDevice.Carbonite:
      return 'Ross Carbonite Mixer'

      default:
        return 'unknown mixer'

    }

}

const mixerConfig: StudioConfig = {
  visionMixer: {
    type: VisionMixerDevice.Atem,
  },
};

console.log(getMixerName(mixerConfig));
