// callback function

// a callback function is a function passed into another function as an argument
// which is then ivoked outside the outer function to complete some kind of routine or action
// a function that accepts other functions as an argument is called a higher order
// function which is called a HIGHER ORDER FUNCTION which contain the logic for when the
// callback function gets executed

// a function is a value representing an "action"
// regular values like string sor numbers represents the data
// a function can be perceived as an action
// we can pass it between variables and run when we want
// =======================================================================================================

// why we need callback functions

// function first() {
//   console.log(1);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// but...

// function firstFunc() {
//   //simulate a delay
//   setTimeout(function() {
//     console.log(1);
//   }, 5000);
// }

// function secondFunc() {
//   console.log(2);
// }
// firstFunc();
// secondFunc();

// Even though we invoked the firstFunc() first, we logged out the result after secondFunc()

// Its not that JavaScript did not wait for a response from firstFunc(),
// before moving on to the secondFunc()
//

// YOU CAN NOT JUST CALL ONE FUNCTION AFTER ANOTHER AND HOPE THEY EXECUTE IN THE RIGHT ORDER

// callbacks are a way to make sure certain code does not execute until another code has filtered
// its executed

// function doHomework(subject, callback) {
//   console.log(`Starting my ${subject} homework`);
//   //   callback();
// }
// doHomework("geometry");

// doHomework("chemistry", function() {
//   console.log("Finished my homework");
//   callback();
// });
// function doHomework(subject, callback) {
//   console.log(`Starting my ${subject} homework`);
//   callback();
// }

// function alertFinished() {
//   console.log("Finished my homework");
// }

// doHomework("history", alertFinished);

function myMap(myarr, callback) {
  let arr = [];
  for (let i = 0; i < myarr.length; i++) {
    arr.push(callback(myarr[i]));
  }
  return arr;
}
// map method
// console.log(myMap(someArray, x => x + 1));

// console.log(someArray);

// Array.prototype.map = myMap;

// filter method
let someArray = [5, 4, 3, 2, 1];
function myFilter(myarr, callback) {
  myarr.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < myarr.length; i++) {
    arr.push(callback(myarr[i]));
  }
  return arr;
}
console.log(
  myMap(someArray, x => {
    if (x > 2) {
      return x;
    } else return someArray.pop();
  })
);

// reduce
// myReduce = (myArr, callback) => {
//   let result = 0;
//   for (let i = 0; i < myArr.length; i++) {
//     if (callback(myArr[i])) result += myArr[i];
//   }
//   return result;
// };

// console.log(myReduce(someArray, x => someArray.length));
