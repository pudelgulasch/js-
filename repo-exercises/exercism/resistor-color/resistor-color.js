//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
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

export const colorCode = color => {
  for (let i in COLORS) {
    if (color === COLORS[i]) {
      return parseInt(i);
    }
  }
};

//  Johnys solution
const colorCode = color => COLORS.indexOf(color);
