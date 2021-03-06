// return boolean with if statement
function divisibleByFive(n) {
  if (n % 5 === 0) {
    return true;
  } else return false;
}
console.log("1: ", divisibleByFive(6));

// to check if a string is empty, "else if" is nessesary
function isEmpty(s) {
  if (s === "") {
    return true;
  } else if (s != "") {
    return false;
  }
}

let result = isEmpty("");
console.log("2: ", result);

// even or odd
function isEvenOrOdd(num) {
  return num % 2 ? "odd" : "even";
}

// concat
function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}
// reverse
function reverse(arr) {
  return arr.reverse();
}
// concat array
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
// arrow-function(because of the big arrow sign after the argument),
// another way of writing a function for sort functions
// new in ES6, arrow is the return
// if you have only one argument no parentesis necessary
const add = (a, b) => a + b;
let sum = add(5, 5);
console.log("3: ", sum);

const adder = a => a + 2;
console.log("4: ", adder(3));

// newday
// Function=input(arguments/args), code, output(return value)

// FUNCTION DECLARATION
function greeting(firstName, lastName) {
  return "Hello" + firstName;
}
console.log("5: ", greeting("Phil"));

// FUNCTION EXPRESSION
const add2 = function(a, b) {
  return a + b;
};
console.log("6: ", add2(200, 150));

// undefined for variables
let square = function(num = 10) {
  //10 as default
  console.log("7: ", num);
};
square(); // undefined if empty()

// DEFAULT ARGUMENTS
let leaderBoard = function(
  name = "Hans Fallada",
  score = 100 // default values
) {
  return `${name}+${score}`;
};

let match = leaderBoard();
console.log("8: ", match);

// return Number or String
function toInt(str) {
  return Number(str);
}

function toStr(int) {
  return String(int);
}
// include method array
function check(arr, el) {
  return arr.includes(el);
}
// length of the arguments in a function
function numArgs() {
  return arguments.length;
}

// range number in object
function isInRange(num, range) {
  return num >= range.min && num <= range.max;
}

// count the number of -() in a word
function numberSyllables(word) {
  return word.split("-").length;
}

// RegExp to find digits in a string, zum Beispiel \d finds a digit from 0-9
let x = /\d/;
// You can use a replace regular expression.

// s/[;,\t\r ]|[\n]{2}/\n/g
// s/ at the beginning means a search
// The characters between [ and ] are the characters to search for (in any order)
// The second / delimits the search-for text and the replace text
// In English, this reads:

// "Search for ; or , or \t or \r or  (space) or exactly two sequential \n and replace it with \n"

// In C#, you could do the following: (after importing System.Text.RegularExpressions)

// Regex pattern = new Regex("[;,\t\r ]|[\n]{2}");
// pattern.Replace(myString, "\n");

// calling characters of an array
var numbers = [1, 2, 3, 4];
Math.max(...numbers); // 4
Math.min(...numbers); // 1

function differenceMaxMin(arr) {
  return Math.max(...arr) - Math.min(...arr);
}
