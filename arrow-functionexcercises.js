// Arrow Functions Exercises
// Complete the following tasks using arrow functions.
// 1. Multiply
// Multiply two numbers and return the result using an arrow function.

const multi = (a, b) => a * b;
console.log("1: ", multi(5, 2));

// 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

let array = [3, 5, 67, 12, 34, 4, 9, 30];

const odd = array =>
  array.filter(array => array % 2 != 0).map(array => array * 2);
// let arr = [];
// for (i = 0; i < odd.length; i++) {
//   arr.push(odd[i] * 2);
// }
console.log("2: ", odd(array));

// 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.

const subTen = array.map(num => num - 10);
console.log("3: ", subTen);

// 4. Cars
// Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object.

// const car = [{ model: "A3", manufacturer: "Audi", year: 2000 }];
// const print = car => Object.values(car);
// console.log("4: ", sprint(car));

// for Each

// 5. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.

const array2 = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const greater = array2.filter(num => num > 70);
console.log("5: ", greater);

// 6. Geometrizer
// Für Kreise gilt:
// Flächeninhalt = Pi * Radius²
// Umfang = 2 * pi * Radius
// Durchmesser = 2 * Radius
// Create two functions that calculate the properties of a circle.
// Create a function called calcCircumference: //Umfang
// console.log(Math.PI);

let rad = 20;

const calcCircumference = rad => {
  let calc = 2 * Math.PI * rad;
  let calc2 = calc.toFixed(3);
  return `The circumference is ${calc2}.`;
};
console.log("6: ", calcCircumference(rad));

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:

const calcArea = rad => {
  let calc = Math.PI * Math.pow(rad, 2);
  let calc2 = calc.toFixed(3);
  return `The area is ${calc2}.`;
};

console.log("6: ", calcArea(rad));

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// 7. The Inventors
// Given the following array, complete the tasks below.
// inventors[0].first
// array[]
// object{}
// to excess the keys in an array of objects
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];
console.log("8: ", Object.keys(inventors)); //0-11, da 11{}
console.log("8: ", Object.values(inventors)); // all arrays

// Filter the list of inventors for those who were born in the 1500's.

const bornIn = inventors.filter(year => year.year < 1500);
console.log("7a: ", bornIn);

// Sort the inventors by birthdate, oldest to youngest.

let orderedInventors = inventors.sort((a, b) => a.year - b.year);
console.log("7b: ", orderedInventors);

// Return an array of the inventors' first and last names.

let inventorsName = [];
inventors.forEach(obj => inventorsName.push(`${obj.first} ${obj.last}`));
console.log("7c: ", inventorsName);
