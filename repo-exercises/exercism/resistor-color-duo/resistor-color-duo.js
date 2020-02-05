//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let colorCodes = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
export const value = ([color1, color2]) => {
  let codes = [colorCodes.indexOf(color1), colorCodes.indexOf(color2)];
  let result = 0;
  for (let i in codes) {
    result = result * 10 + codes[i];
  }
  return result;
};
