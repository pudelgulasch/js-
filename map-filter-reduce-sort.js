// Map, Filter, Reduce & Sort
// 1. Increment by 1
// Given an array of numbers, e.g. javascript let arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// , create a function that increments each element by 1. Return the a new array of modified elements.

let arrayOfNumbers = [3, 45, 6, 56, 7, 9];
console.log("1: ", arrayOfNumbers.map(number => ++number));

// 2. Sum Up
// Write a function called sum that uses the reduce to sum up an array of numbers.
// Do NOT use a typical loop; just use the reduce method.

const sum = [6, 7, 7].reduce((acc, val) => acc + val, 0);
console.log("2: ", sum);

// Examples:
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

// 3. instanceOf
// Reduce
// Sum up the instances of each of these:
// Expected Output:
// object = {
//   bike: 2
//   car: 5
//   pogostick: 1
//   truck: 3
//   van: 2
//   walk: 2
// }

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick"
];

const counting = data.reduce((obj, val) => {
  if (val in obj) {
    obj[val]++;
  } else obj[val] = 1;
  return obj;
}, {}); //acc set as object output {}

console.log("3: ", counting);

// Johnys solution
// let object = {};
// const newObj = arr => {
//  arr.forEach(x => { object[x] = (object[x] || 0) + 1; }); //0 initializes a number to add/+1 adds
//  return object;
// }
// newObj(data);

// console.log("3: ", object);

// 4. Inventors
// Look at the piece of code below and complete the tasks and questions.

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
// Map
// Give an array of inventors' first and last names.

const names = inventors.map(item => item.first + " " + item.last);
console.log("4a: ", names);

// Reduce
// How many years did all of the inventors live?

const lifeYears = inventors.reduce(
  (acc, val) => acc + (val.passed - val.year),
  0 //0 is the initializer
);
console.log("4b: ", lifeYears);

// 5. Square Root
// Given an array of numbers, find the square root of those numbers using map.

const findSquare = arrayOfNumbers.map(num => Math.sqrt(num));
console.log("5: ", findSquare);

// 6. Instances of Letters
// Create a function that takes a string as an argument and counts the number of each letter in that string.

const countLetter = str => {
  let arr = str.split("");
  let rObj = {};
  arr.forEach((val) => {
    // if (val in obj) {
    //   obj[val]++;
    // } else obj[val] = 1;
    // return (obj = rObj);
    rObj[val]=(rObj[val]||0)+1;
  // },{});
})
return rObj;
}; //acc set as object output {}

console.log("6: ", countLetter("Hallo"));

// const counting = data.reduce((obj, val) => {
//   if (val in obj) {
//     obj[val]++;
//   } else obj[val] = 1;
//   return obj;
// }, {}); //acc set as object output {}

// console.log("3: ", counting);

// 7. List of Movies
// Given the code below, complete the task

let friends = [
  {
    name: "Maria",
    films: ["Avengers: Infinity War", "Avatar"],
    age: 22
  },
  {
    name: "John",
    films: ["Forest Gump", "Pulp Fiction", "Spider-Man"],
    age: 29
  },
  {
    name: "Jean",
    films: ["Deadpool", "Incredibles 2"],
    age: 20
  }
];
// Create a function that returns an array of your friends favourite films!

const favouriteFilms = friends.map(item => item.films);
console.log("7: ", favouriteFilms);

// 8. Filter Evens
// Write a function called filterEvens that uses the filter method to filter an array and only
// return the even numbers. The function should take in an array of numbers as an argument, and
// should not use a loop.

// Examples:

// filterEvens([1,2,3,11,12,13]); //returns [2,12]

// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

const filterEvens = arr => arr.filter(num => num % 2 === 0);
console.log("8: ", filterEvens([22, 2, 31, 110, 6, 13]));

// 9. Search
// Given an array, create a function which uses filter() to filter an array based on a search query.

// Example
const friends2 = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

// console.log(filterItems(friends, 'ka')); // ["Rika", "Marika"];
// console.log(filterItems(friends, 'e')); // ["Alex", "Oliver"];

const filterItems = (arr, search) => arr.filter(item => item.includes(search));
console.log("9: ", filterItems(friends2, "e"));

// 10. Reformat an Array
// Given the following array:

let originalArray = [
  { key: 1, name: "John" },
  { key: 2, name: "Maria" },
  { key: 3, name: "Oliver" },
  { key: 4, name: "Jane" },
  { key: 5, name: "Jack" },
  { key: 6, name: "Albert" },
  { key: 7, name: "Harry" },
  { key: 8, name: "Ron" },
  { key: 9, name: "Kenneth" },
  { key: 10, name: "Kyle" }
];

// Reformat the array as follow:
// let newArray = [{1: "John"}, {2: "Maria"}, {3: "Oliver"}, {4: "Jane"}, {5: "Jack"}, {6: "Albert"}, {7: "Harry"}, {8: "Ron"}, {9: "Kenneth"}, {10: "Kyle"}];

let newArray = originalArray.map(obj => {
  let rObj = {};
  rObj[obj.key] = obj.name;
  return rObj;
});
console.log("10: ", newArray);

// #### 11. Sorting Numbers
// Given the following array of numbers, sort from smallest to largest.
// ```javascript
let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];

let sortSmall = arrayOfIntegers.sort((a, b) => a - b);
console.log("11: ", sortSmall);

// Once you are finished, answer the following questions: Which method did you use to solve the problem? Why did you have to use this method?
// 12. Sort Shapes
// Given the following array of shapes, complete the task below:

let shapes = [
  [5, "Pentagon"],
  [3, "Triangle"],
  [8, "Octagon"],
  [4, "Rectangle"],
  [6, "Hexagon"],
  [10, "Decagon"]
];

let sortShapes = shapes.sort((a, b) => a[0] - b[0]);
console.log("12: ", sortShapes);

// * Sort the 2D array based on the shapes' sides. Sorting should be in ascending order from smaller number to greater number.
// * Example of output:
// ``` javascript
// [ [ 3, 'Triangle' ],
//   [ 4, 'Rectangle' ],
//   [ 5, 'Pentagon' ],
//   [ 6, 'Hexagon' ],
//   [ 8, 'Octagon' ],
//   [ 10, 'Decagon' ] ]
