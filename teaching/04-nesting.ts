interface StudioLayer {
  displayName: string;
  layerNumber: number;
  fallback?: boolean; // optional property!
  validVolumes?: number[];
}

interface StudioLayers {
  [name: string]: StudioLayer; // TODO: limit to mic2, etc.
}

const studioOneLayers: StudioLayers = {
  mic1: {
    displayName: "Presenter Mic", // What is says on the button
    layerNumber: 1, // The cable that patched
    validVolumes: [8, 7, 6, 5, 4], // The values displayed on the volume knob
  },
  mic2: {
    displayName: "Guest Mic",
    layerNumber: 2,
    fallback: true,
  },
  mic3: {
    displayName: "Weather mic",
    layerNumber: 3,
  },
  mic4: {
    displayName: "",
    layerNumber: 4,
  },
};
