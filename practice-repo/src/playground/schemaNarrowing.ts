interface StudioConfig {
  defaultGain?: number;
  micNames?: string[];
}

const config: StudioConfig = {
  defaultGain: 10,
  micNames: ["mic1", "mic2"],
};

// TODO: write a function to log each mic name in uppercase
