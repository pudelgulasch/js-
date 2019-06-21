// RECURSION

// let counter = 5;
// while (counter > 0) {
//   console.log(counter--);
// }

// function calls itself

// let countdown = function(value) {
//   if (value > 0) {
//     console.log(value);
//     return countdown(value - 1);
//   } else {
//     return value;
//   }
// };

// countdown(5);

// FACTORIAL EXAMPLE

// const factor = function(num) {
//   let result = 1;
//   let count;
//   for (count = num; count > 1; count--) {
//     result += count;
//   }
//   return result;
// };
// console.log(factor(5));

// let factor = function(num) {
//   let result = 1;
//   let count;
//   if (num > 0) {
//     console.log(num - 1);
//     return (start += num);
//   } else {
//     return num;
//   }
// };

// factor(5);

// const factorial = function(n) {
//   if (n <= 0) {
//     //terminal case
//     return 1;
//   } else {
//     //block to execute
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(5));

// STATE - the value of a variable at a given point in time

// let factor = num => {
//   if (num <= 0) {
//     //terminal case
//     return 1;
//   } else {
//     //block to execute
//     return num * factor(num - 1);
//   }
// };

// console.log(factor(5));

// const factor = num => (num <= 1 ? 1 : num * factor(num - 1));
// console.log(factor(5));

//CLOSURES -- a function nested inside another function

// function hello() {
//   function multiply(a, b) {
//     return a * b;
//   }
//   return `Hello ${multiply(10, 3)}`;
// }
// console.log(hello());

// IIFE = immeditaly invoked function expression, also called:
// SIAF = self invoked anonymous function

console.log(
  (function() {
    return "hello";
  })()
);
// // parentesis at the end invoking the function

// console.log(
//   (function hello() {
//     return "hello";
//   })()
// );

// (function() {
//   let foo = "bar";
//   console.log(foo);
// })();
// no functionname or argument nessecsary
(() => {
  let foo = "bar";
  console.log(foo);
})();

// (function() {
//   let x = 10;
//   let y = 20;
//   let answer = x + y;
//   console.log(answer);
// })();

//nested function excercise

// Exercise 1: Check for boolean

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   return bool;
// }

// booWho(null);

// Solution:   function booWho(bool) {
//   return typeof bool === 'boolean';
// }

// // test here
// booWho(null);

// Exercise 2: Check for Index

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   return num;
// }

// getIndexToIns([40, 60], 50);

// Easy solution: function getIndexToIns(arr, num) {
//   arr.sort(function(a, b) {
//     return a - b;
//   });

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= num)
//       return i;
//   }

//   return arr.length;
//  }

// Advanced solution: function getIndexToIns(arr, num) {

//   return arr.concat(num).sort((a,b) => a-b).indexOf(num);

//   }

//   getIndexToIns([1,3,4],2);

//Create a function that takes two arguments, the first is an array and the second is a int
// See if the given number is greater or equal to any value in the array
// [1,2,3,4],5    => true
// [1,2,3,4],3    => false

// the given array = [23,43,12,34,45,32,65,43,75,32,12,"34"]
// the given int is 65
// change the values to check different results
//BONUS POINTS for not using a loop!!

// const greatEqual = ([...args], int) => {
//   console.log(Math.max(args));
//   let args2 = args.concat(int).sort((a, b) => b - a);
//   console.log(args2);
//   //   console.log(args2.indexOf(int));
//   //   console.log(args2.length - 1);
//   //   console.log(int);
//   //   return args2.indexOf(int) == args2.length - 1 ? true : false;
//   return args2[0] <= int ? true : false;
// };

// console.log(greatEqual([20, 5, 6], 3));
