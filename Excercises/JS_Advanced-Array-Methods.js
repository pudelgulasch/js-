// Q1. sort-an-array-of-numbers
// Write a function named sortArrNum that takes in an array of numbers and returns the array sorted
// from lowest to highest.

const arrNum = [3, 5, 17, 1, 9, 0];
const sortArrNum = arr => arr.sort((a, b) => a - b);
console.log("Q1: ", sortArrNum(arrNum));

// Examples:

// sortArrNum([3, 5, 7, 1, 9, 0]);  // returns [0, 1, 3, 5, 7, 9]

// Q2. sort-an-array-of-strings
// Write a function named sortArrStr that takes in an array of strings and returns the array
// sorted alphabetically.

const animals = ["ab", "cat", "aa", "elephant", "dog", "walrus"];

const sortArrStr = arr => arr.sort();
console.log("Q2: ", sortArrStr(animals));

// Examples:

// sortArrStr(['cat', 'elephant', 'dog', 'walrus']);  // returns ['cat', 'dog', 'elephant', 'walrus']

// Q3. sort-a-string
// Write a function named sortStr that takes in a string and returns a string of the letters
// sorted alphabetically.

const sortStr = str => [...str].sort().join("");
// {
//   let spli = str.split("");
//   return spli.sort().join("");
// };
console.log("Q3: ", sortStr("hello"));

// Examples:

// sortStr('hello');  // returns 'ehllo'
// sortStr('big apple'); // returns ' abegilpp'

// Q4. reverse-an-array
// Write a function named arrReverse that takes in an array of numbers and returns an array
// of numbers in the reverse order.

const arrReverse = arr => arr.reverse();
console.log("Q4: ", arrReverse([1, 2, 3, 4, 5]));

// Examples:

// arrReverse([1, 2, 3, 4, 5]);  // returns [5, 4, 3, 2, 1]

// Q5. reverse-string-2
// Write a function called reverseStr that uses the reverse method to reverse a string and
// return the reversed string. Do NOT use a typical loop; just use the reverse method.

const reverseStr = str => [...str].reverse().join("");

console.log("Q5: ", reverseStr("hello"));

// Examples:

// reverseStr('hello'); //returns 'olleh'
// reverseStr('when am i?'); //returns ?i ma nehw'

// Q6. sort-objects
// Write a function named sortObjs that takes in an array of objects and sorts them alphabetically
// by their name property.

const obj = [
  { name: "lesane" },
  { name: "sean" },
  { name: "kendrick" },
  { name: "christopher" },
  { name: "young thug" }
];

const sortObjs = arr => arr.sort((a, b) => (a.name > b.name ? 1 : -1));

// arr.sort((a, b) => {
//   let nameA = a.name.toLowerCase(),
//     nameB = b.name.toLowerCase();
//   if (nameA < nameB)
//     //sort string ascending
//     return -1;
//   if (nameA > nameB) return 1;
//   return 0; //default return value (no sorting)
// });
console.log("Q6: ", sortObjs(obj));

// Examples:

// sortObjs([{name: 'lesane'}, {name: 'sean'}, {name: 'kendrick'}, {name: 'christopher'},
// {name: 'young thug'}]);
// returns [{name: 'christopher'}, {name: 'kendrick'}, {name: 'lesane'}, {name: 'sean'},
// {name: 'young thug'}]

// Q7. high-low-sort
// Write a function called highLow that uses the sort method to sort an array of methods from high to low.

const highLow = arr => arr.sort((a, b) => b - a);
console.log("Q7: ", highLow([10, 5, 11, 2, 6, 7, 26]));

// Examples:

// highLow([1,2,3,4,5]); //returns [5,4,3,2,1]
// highLow([10,5,11,2,6,7,26]); //returns [26,11,10,7,6,5,2]

// Q8. legal-drinking-age
// Write a function named checkDrinkingAge that takes in an array of objects,
// each of which has a name property and age property.
// The function should return true if everyone's 21 or older, and should return false if anyone is
// under 21.

const arr3 = [
  { name: "Tommy", age: 22 },
  { name: "Chucky", age: 24 },
  { name: "Lil", age: 20 }
];

//Johnys solution
const checkDrinkingAge2 = obj => obj.every(x => x.age >= 21);
console.log("Q8: ", checkDrinkingAge2(arr3));

// Examples:
// checkDrinkingAge([{name: "Adrian", age: 33}, {name: "Jojo", age: 23}, {name: "Cornelius", age: 26}]);  // returns true
// checkDrinkingAge([{name: "Tommy", age: 22}, {name: "Chucky", age: 24}, {name: "Lil", age: 20}]); // returns false

// Q9. implement-sort
// Write a function named sort that takes in an array of numbers and sorts them in order from lowest to highest.
// Do not use the built in .sort array method in your answer.

arr = [2, 8, 3, 12, 6, 10, 4, 1];
function quicksort(arr) {
  if (arr.length === 0) return arr;
  let left = [];
  let right = [];
  let pivot = arr[0];
  arr.forEach(function(num, index) {
    if (index > 0) {
      if (num < pivot) left.push(num);
      else right.push(num);
    }
  });

  return quicksort(left).concat(pivot, quicksort(right));
}
// Pivot = Schlüsselfgur, Drehpunkt
console.log("Q9: ", quicksort(arr));

// Examples:

// sort([11, 2, 36, 4, 15]);  // returns [2, 4, 11, 15, 36]
