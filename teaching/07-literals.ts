type ValidMicNames = "mic1" | "mic2" | "mic3" | "mic4";

// number, string, boolean
interface StudioLayer {
  micname: ValidMicNames[];
}

const config: StudioLayer = {
  micname: ["mic1", "mic4"],
};
