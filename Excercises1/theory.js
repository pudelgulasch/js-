// PURE FUNCTION on line 3, no need to declare a value outside the function

// const add = (a, b) => a + b;

// const myName = "Max";
// const sayName = mySurname => `${myName} ${mySurname}`; // ES6

// as a pure function
// const sayName = (mySurname = "Max", myName = "Müller") =>
//   `${myName} ${mySurname}`;
// //   OR in console.log
// console.log(sayName("Katrin", "Salac"));

// let sayName = function(mySurname) {
//   // ES5
//   return `${myName} ${mySurname}`;
// };

// console.log(sayName("Mustermann"));

// another pure function
// const sayMyName = mySurname => {
//   let myName = "Vikram";
//   return `${myName} ${mySurname}`;
// };
// console.log(sayMyName("Patel"));

// Rest params - ...args // represents an indefinite number of args as an array
// const thirdArg = (...args) => {
//   if (args[2]) {
//     return "I have a third argument";
//   }
//   return "NEIN! No third argument";
// };

// console.log(thirdArg(1, 4, 8)); // "I have a third argument"
// console.log(thirdArg(87, 94)); // "NEIN! No third argument"

// const area = (...args) => {
//   if (args.length < 2) return "I don't know.";
//   if (args.length[2]) return `${args[2]} * ${args[0] * $args[1]}`;
//   return `${args[0] * args[1]}m${args.length}`;
// };

// console.log(area(10, 10, 10));
// console.log(area(10, 10));
// console.log(area(10));
