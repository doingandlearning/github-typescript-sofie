// Magic Strings

// HELLO_kevin

enum VisionMixerDevice { // enumerated
  Asus = "asus",
  Atem = "atem",
  Carbonite = "carbonite",
}

// npm run generate-schema-types

interface StudioConfig {
  visionMixer?: {
    type: VisionMixerDevice;
  };
}

const config: StudioConfig = {
  visionMixer: {
    type: VisionMixerDevice.Atem,
  },
};

function showVisionMixer(config: StudioConfig) {
  if (config.visionMixer) {
    console.log(config.visionMixer.type);
  } else {
    console.log("No vision mixer in this studio.");
  }
}

showVisionMixer(config);
