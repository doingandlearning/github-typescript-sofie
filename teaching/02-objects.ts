interface CameraConfig {
  name: string;
  lens: string;
  focalLength: number;
  iso: number;
}
// Contract!

const camera1: CameraConfig = {
  name: "Kevin",
  lens: "f18",
  focalLength: 12,
  iso: 10,
}; // objects!

const camera2: CameraConfig = {
  name: "Sony ZV-E10",
  lens: "f28",
  iso: 120,
  focalLength: 80,
};
