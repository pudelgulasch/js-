// JS-functions-roundup
// Solve all of these problems without using a for loop or while loops in any of your solutions.
// You should also avoid creating any unnecessary side effects:

// 1.
// write a function (or series of functions) that takes in an array that contains numbers,
// and returns the sum of all the even numbers

let arrOfNum = [5, 4, 3, 2, 1];

const filterEven = arr =>
  arr.filter(x => x % 2 === 0).reduce((acc, val) => acc + val);
console.log("1: ", filterEven(arrOfNum));

// Examples:

// Input: [2, 5, 7, 8, 10]
// Output: 20

// Input: [9, 11, 13, 15, 17, 2, 4]
// Output: 6

// 2.
// write a function (or series of functions) that takes in an array that contains strings,
// and returns an array with the number of letters in each string

let arr2 = ["hey", "hi", "hello"];

const letCount = arr => arr.map(val => val.length);
console.log("2: ", letCount(arr2));

// Examples:

// Input: ['hey', 'hi', 'hello']
// Output: [3, 2, 5]

// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: [4, 2, 1, 6, 5]

// 3.
// write a function (or series of functions) that takes in an array that can contain both words and
// numbers, and returns the sum of all the even numbers

let arrNumWords = [2, "hey", 5, "hi", 6];
const returnEven2 = arr =>
  arr
    .filter(val => val.length % 2 === 0 || val % 2 === 0)
    .map(val => (typeof val != "number" ? val.length : val))
    .reduce((acc, val) => acc + val);

console.log("3: ", returnEven2(arrNumWords));

// const returnEven3 = arr =>
//   arr
//     .map(val =>
//       typeof val != "number"
//         ? val.length % 2 !== 0
//           ? (val = 0)
//           : val.length
//         : val % 2 !== 0
//         ? (val = 0)
//         : val
//     )
//     .reduce((acc, val) => acc + val);

// console.log("3: ", returnEven3(arrNumWords));

// Examples:

// Input: [2, 'hey', 5, 'hi, 6]
// Output: 8

// Input: [9, 'cya', 5, 'goodbye', 'later, 10, 20]
// Output: 30

// 4. Write a function (or series of functions) that takes in an array that an contain strings or numbers,
// and returns the sums of the length of all of the words (in other words, returns the sum of the total number
// of letters in all of the words combined)

let arrWords = ["hey", 2, "hi", 4, "hello"];
const charCount = arr =>
  arr
    .map(val => (typeof val === "string" ? val.length : 0))
    .reduce((acc, val) => acc + val);

console.log("4: ", charCount(arrWords));

// Examples:

// Input: ['hey', 2, 'hi', 4, 'hello']
// Output: 10

// Input: ['this', 5, 'is', 7, 'a', 'longer', 10, 'array']
// Output: 18
// 5.
// write a function (or series of functions) that takes in an array of strings, and returns an object
// with the vowel count of all of the strings combined

let arrWords2 = ["hey", 2, "hi", 4, "hello"];
const vowelCount = arr => {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr2 = arr
    .filter(val => typeof val === "string")
    .map(val => val.match(/[aeiou]/gi))
    .join()
    .split(",")
    .concat(vowels)
    .sort() //[ 'a', 'e', 'e', 'e', 'i', 'i', 'o', 'o', 'u' ]
    .reduce((acc, val) => {
      if (val in acc) {
        acc[val]++;
      } else {
        acc[val] = 0;
      }
      return acc;
    }, {});
  return arr2;
};

console.log("5: ", vowelCount(arrWords2));

// Examples:

// Input: ['hey', 2, 'hi', 4, 'hello']
// Output: {'a': 0, 'e': 2, 'i': 1, 'o': 1, 'u': 0}

// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: {'a': 3, 'e': 1, 'i': 2, 'o': 1, 'u': 0}

// 6.
// write a function (or series of functions) that takes in an array of numbers, and returns an object
// with a count of the number of even numbers and number of odd numbers in the array

function countBy(arr, fn) {
  let oddCount = 0;
  let evenCount = 0;
  return arr.reduce(
    function(acc, nums) {
      // console.log(nums);
      // console.log(nums, fn(nums))
      if (fn(nums) === "even") {
        evenCount++;
        acc["even"] = evenCount;
      } else {
        oddCount++;
        acc["odd"] = oddCount;
      }
      return acc;
    },
    {},
    0
  );
}

function evenOdd(n) {
  if (n % 2 === 0) return "even";
  else return "odd";
}
let nums = [1, 2, 3, 4, 5];
console.log("6: ", countBy(nums, evenOdd));

// Examples:

// Input: [1, 2, 3, 4, 5]
// Output: {'evens': 2, 'odds': 3}

// Input: [10, 10, 10, 5, 5, 5, 5]
// Output: {'evens': 3, 'odds': 4}

// 7.
// write a function (or series of functions) that takes in an array of numbers,
// and returns an array of only the unique numbers

// let search = new Set(arrNums3);
// console.log(search);
// const distinct = (val, i, array) => arrNums3.toString().match(/val/g);
// console.log(distinct);
// console.log(arrNums3.toString().match(/val/g));
let arrNums3 = [3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7];
const countByNum = (arr, x) => {
  let result = arr.reduce((allNums, num) => {
    if (Object.values(allNums) === 1) {
      allNums[num] = 1;
    } else {
      allNums[num] = 0;
    }
    return allNums;
  }, {});
  return result;
};

// for (i = 0; i < result.length; i++) {
//   console.log(result);

// if result[]
// return result.x > 1 ? Object.keys(x) : 0;

// const unique = (arr, fun) => arr.map((v, i, a) => fun(a));

// console.log(unique(arrNums3, countByNum));
console.log(countByNum(arrNums3, 0));

// const unique = arr => arr.filter((v, i, a) => a.indexOf(v) == i);
// const unique = arr => arr.map((v, i, a) => a.match);
// console.log(unique(arrNums3));

// const unique = arr => arrNums3.map((v, i, a) =>{
//   if (a.indexOf(v, i + 1))
// };

// console.log(unique(arrNums3));

// var array = ["a", "b", "a", "c", "a", "d"];
// var indices = [];
// var element = "a";
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);

// const unique=arr=>{
// let result={};
// for (let i=0;i<a.length;i++){
// for (let j=0;j<i;j++){
//    if (a[i] == a[j]) {
//     // isUnique = true;

//     break;
//   }
// }}
// console.log(unique());

// if (isUnique) {
//   console.log(printIn(a[i] + " "));
// }
// }
// const unique = arr => arr.filter(distinct);
// console.log(unique(arrNums3));
// console.log(arrNums3[0].match(0));

// Examples:

// Input: [1, 1, 2, 3, 4, 5, 6, 3]
// Output: [2, 4, 5, 6]

// Input: [3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7]
// Output: [5, 6]

// 8.
// write a function (or series of functions) that takes in a string of words, capitalizes the last letter of every word,
// removes any word that has an even amount of letters, and returns a string.

// Examples:

// Input: 'hey how do you feel today'
// Output: 'heY hoW yoU todaY'

// 9.
// write a function (or series of functions) that takes in an array of numbers, squares every number, removes all numbers
// that's square is even, converts every number to a string, and returns an array.

// Examples:

// Input: [1, 2, 3, 4, 5]
// Output: ['9', '25']

// Input: [10 ,11]
// Output: ['121']
// 10.
// write a function (or series of functions) that takes in an array of strings, reverses every string, removes all strings with the letter 'l' in them, capitalizes the first letter of strings with an even amount of letters, and capitalizes the last letter of strings with an odd amount of letters.

// Examples:

// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog', 'llama']
// Output: ['Drib', 'taC', 'ekanS', 'taC', 'goD', 'Gorf']
// 11.
// write a function (or series of functions) that takes in an array of strings, removes duplicate strings,
// removes all of the strings with an even number of letters, and multiplies the remaining letter counts
// together to return a product.

// Examples:

// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog']
// Output: 45

// Input: ['this', 'is', 'a', 'test', 'test']
// Output: 1
