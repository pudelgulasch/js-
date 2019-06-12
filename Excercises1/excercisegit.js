// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:

// XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true (case insensitive)
// XO("zpzpzpp") ➞ true (returns true if no x and o)
// XO("zzoo") ➞ false

// const stringChar = char => {
//   char2 = char.toLowerCase();
//   return char2.includes("x") &&
//     char2.includes("o") &&
//     char2.match(/x/gi).length === char2.match(/o/gi).length
//     ? true
//     : false;
// };

// console.log("1: " + stringChar("xdeidjeu"));

// const stringChar=char=>
// return (Array.match(/x/gi) || []).length <= (Array.match(/o/gi) || []).length ? true:false;

// 2. Pie
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Example of defining the function: equalSlices(total slices, no. recipients, slices each)

// Examples:

// equalSlices(11, 5, 3) ➞ false

// // 5 people x 3 slices each = 15 slices > 11 slices

// equalSlices(8, 3, 2) ➞ true

// equalSlices(8, 3, 3) ➞ false

// equalSlices(24, 12, 2) ➞ true

// const equalSlices = (slices, people, slicesEach) => {
//   let totalSlices = people * slicesEach;
//   return totalSlices <= slices ? true : false;
// };

// console.log("2: " + equalSlices(11, 5, 3));

// 3. Cubed
// Create a function that takes in an array of numbers and returns the sum of its cubes. Examples:

// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0
// Note If given an empty array, return 0.

// const sumOfCubes = ([...args] = []) => {
//   let sum = 0;
//   //   console.log("1: " + args);

//   for (i = 0; i < args.length; i++) {
//     sum += Math.pow(args[i], args.length);
//     // console.log("2: " + sum);
//   }
//   return sum;
// };

// console.log("3: " + sumOfCubes([1, 5, 9]));

// 4. Amplify the Multiples of 4
// Create a function that takes an integer and returns an array from 1 to the given number, where:

// If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// Examples

// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Notes The given integer will always be equal to or greater than 1. Include the number (the number in the parameters).

// with help
// const amplify = int => {
//   let arr = [];

//   for (let i = 1; i <= int; i++) {
//     i % 4 === 0 ? arr.push(i * 10) : arr.push(i);
//   }
//   return arr;
// };

// console.log("4: "+amplify(25));

// 5. Months
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

// const monthName = num => {
//   let month = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "June",
//     "July",
//     "Aug",
//     "Sept",
//     "Oct",
//     "Nov",
//     "Dec"
//   ];
//   return num <= 12 && num > 0
//     ? month[num - 1]
//     : `a ${num} month does not exist`;
// };

// console.log("5: "+monthName(-2));

// 6. Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples:

// evenNums(8) ➞ [2, 4, 6, 8]
// evenNums(4) ➞ [2, 4]
// evenNums(2) ➞ [2]
// If there are no even numbers, return an empty array.

const evenNums = num => {
  arr = [];
  for (i = 0; i <= num; i++) {
    return num % 2 == 0 ? arr.push[num * 10] : arr.push[i];
  }
};
console.log(evenNums(4));
