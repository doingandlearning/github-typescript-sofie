//the interface sets the rules of any defined const set against it - in this case 'config'

interface StudioConfig {
  defaultGain?: number;
  micNames?: string[];
}

//the contents of config is defined by the interface 'StudioConfig'
const config: StudioConfig = {
  defaultGain: 10,
  micNames: ["mic1", "mic2", "mic3"],
};

// TODO: write a function to log each mic name in uppercase
//the process of this function is to print out all the microphones defined in config

function logMicNames(config: StudioConfig) { //defines a function called logMicNames, takes one parameter called config which is expected to be of type StudioConfig - config contains a property 'micNames'
  if (Array.isArray(config.micNames)) { //check if micNames is and array, if it IS an array, the function proceeds to loop through it
    for (const mic of config.micNames) { //Loop through each mic name
      console.log(mic.toUpperCase()) //Convert the microphone name to uppercase & print to console
    }
  } else {
    console.log('No mic names found') //Or print out that no mic names are found
  }
}

logMicNames(config)

function countMicNames(config: StudioConfig): number {
  if (Array.isArray(config.micNames)) {
    return config.micNames.length
  }
  return 0
}

const total = countMicNames(config)
console.log('Total mic names: ${total}')