// JS DATA TYPES

// -- OBJECTS (as complex as you want)
//      function, arrays {}
//
// -- PRIMITIVES
//     - number
//     - string
//     - boolean
//     - undefined
//     - null - null(nothing)
//     - Symbol
//
// if its not a primitive, its an OBJECT
// PRIMITIVES are the building blocks of OBJECTS
//
// // COMPARISONS
//
console.log(true === false); //1 & 0 //false
console.log(1 === 1); //true
console.log(1001 === 1001); //true
//
// Primitives - if it looks the same, its probably the same

console.log({} === {}); //false
//
//  // When you create an object, JS saves it at a unique location in memory
//  // When you compare primitives, JS only cares about the value
//  // Comparing OBJECTS, we refer to REFERENCES - JS only cares about the reference in memory
//
// const myHouse = {};
// console.log(myHouse === myHouse); //true

const myHouse = { color: "blue" };
let color = myHouse.color;
color = "red";

console.log(myHouse); //color:blue

// const myHouse1 = { color: "blue" }; // memory address 1
// const myHouse2 = myHouse1; // memory address 1
// myHouse2.color = "yellow"; //

// //
// // // What is colors of both houses?

// console.log(myHouse1.color); //yellow
// console.log(myHouse2.color); //yellow
// console.log(myHouse1 === myHouse2); //true

const myHouse1 = { color: "blue" }; //address one
const myHouse2 = { color: "blue" }; //address two
myHouse2.color = "red";

// // myHouse1.color ...?
// // myHouse2.color ...?

console.log(myHouse1.color); //blue
console.log(myHouse2.color); //red
