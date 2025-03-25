import { MicConfig } from "./config/MicConfig";
// import * as MicConfig from "./config/MicConfig";

const baseMic: MicConfig = {
  enabled: true,
  gain: 10,
  popShield: true,
  autoTuneEnabled: false,
};

const presenterMic: MicConfig = {
  ...baseMic, // Spread operator (...) - copy pasting
  profile: "Presenter Mic",
  gain: 8, // Last key wins - gain would be 8
};

console.log(baseMic);
console.log(presenterMic);
