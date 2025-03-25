// Pascal
interface StudioLayer {
  displayName: string;
  layerNumber: number;
  fallback?: boolean; // optional property!
  validVolumes?: number[];
}

// Command pallette
// Ctrl-shift-p
// Keyboard shortcuts

// Ctrl-K I
// camelCase
const mic1: StudioLayer = {
  displayName: "Presenter Mic",
  layerNumber: 1,
  validVolumes: [8, 7, 6, 5, 4],
};

const mic2: StudioLayer = {
  displayName: "Guest Mic",
  layerNumber: 2,
  fallback: true,
};

// Arrays - container - contain other types
//                        0         1          2        3          4
const countryArray = ["England", "America", "Wales", "Scotland", "NI"]; // Container type
const viewerNumbers = [1000000, 2323221, 12312, 12321];
const voteForIncreasedLicenceFee = [true, true, false, false];

// Add things to an array with push
countryArray.push("America", "France"); // Puts it at the end

countryArray.unshift("Japan"); // Puts it at the start

// Read things from the array
// Indexed
countryArray[0];
countryArray[3];

const programBrands = ["BBC News", "NoBrand", "", "", "", ""];
programBrands[0];
