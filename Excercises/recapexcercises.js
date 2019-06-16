// Strings
// Write a program to check whether JavaScript is a string or not.

// const isString = str => (typeof str == "string" ? true : false);

// console.log(isString("JavaScript"));

// Write a program to check whether a string is empty or not.

// const empty = (...args) =>
//   typeof args !== "undefined" && args.length > 0 ? "full" : "empty";

// console.log(empty());

// Write a program to convert a string in abbreviated form. E.g. John Smith -> John S.

// const short = name => {
//   let ind = name.search(" ") + 2;
//   let sli = name.slice(0, ind);
//   return `${sli}.`;
// };

// console.log(short("John Smith"));

// Write a program to hide email addresses to protect from unauthorized user. E.g. "john_smith@example.com" -> "john...@example.com"

// const hide = email => {
//   let ind1 = email.search("@");
//   let sli1 = email.slice(0, 4);
//   let sli2 = email.slice(ind1);
//   return `${sli1}...${sli2}`;
// };

// console.log(hide("john_smith@example.com"));

// Write a program to change a string to the following format: E.g. John Smith from Berlin -> john-smith-from-berlin.

// const change = str => str.toLowerCase().replace(/ /g, "-");
// console.log(change("John Smith from Berlin"));

// Write a program to convert a string into camel case. E.g. "john smith" -> "johnSmith"

// const camel = str => {
//   let arr = str.split(" ");
//   str1 = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
//   str2 = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
//   return `${str1}${str2}`;
// };

// console.log(camel("john smith"));

// Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)

const ordinalNum = num => {
  if (num <= 2 && num > 0) {
    return num + "st";
  } else num;
};

// Declare a variable and sort the characters into alphabetical order.

let word="haLlO";
let alphabet=word=>{
  let low=word.toLowerCase();
  let arrWord=Array.from(low);
  return arrWord.sort().toString();
}
console.log(alphabet(word));

// Write a program that takes a number (1-60) and returns a corresponding string of hyphens. Examples: (1) ➞ "-" (5) ➞ "-----" (3) ➞ "---"

// const hyphens = num =>
//   num < 0 && num <= 60 ? [...Array(num).keys.map()] : "out of range";


// Arrays
// Leap Years Write a program which finds the leap years in a given range of years.

// let years=[1991,2001,1981,1983,1988,1984,1886,2005,2004];

// const result = years.filter
// (year=> year>=1980 && year<=1990 && 
//   year% 4 === 0 && year % 100 != 0)
//   .sort((a, b) => a-b);
// console.log(result);

// First & Last Write a program that takes an array and returns the first and last elements as a new array.

// const firstLast=(...args)=>{
// result= [];
// result.push((args[0]),args[args.length-1]);
// return result;}

// console.log(firstLast(undefined, 4, "6", "hello", null));

// Expected Output: [5, 10, 15, 20, 25] ➞ [5, 25] ["javascript", 13, null, false, true] ➞ ["javascript", true] [undefined, 4, "6", "hello", null] ➞ [undefined, null]

// Find the Smallest Number Write a program that takes an array of numbers and returns the smallest number in the set.
// E.g [34, 15, 88, 2] ➞ 2 [34, -345, -1, 100] ➞ -345 [-76, 1.345, 1, 0] ➞ -76 [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999 [7, 7, 7] ➞ 7

// const small=(...nums)=>Math.min(...nums);
// console.log(small(34, -345, -1, 100));

// Return Student Names Write a program that takes an array of students and returns an array of student names. Example: [ { name: "Steve"}, { name: "Mike"}, { name: "John"} ]
// ➞ ["Steve", "Mike", "John"]
//fails
// let students=[ { name: "Steve"}, { name: "Mike"}, { name: "John"} ];
// const studentName=students=>Object.values(students);
// console.log(studentName(students));

// Spell it out Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g. spelling("bee") ➞ ["b", "be", "bee"] spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"] spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

// const spell = word => {
//   arr = [""];
//   for (i = 0; i < word.length; i++) {
//     arr.push((arr[i] += word[i]));
//   }
//   return arr.slice(0, arr.length - 1);
// };
// console.log(spell("bee"));

// function makeTree(num) {
//   let string = "                              *";
//   for (let i = 0; i < num; i++) {
//     console.log(string);

//     string += "*";
//   }
// }

// Objects
// Write a program to list the properties of an object. E.g. const student = { firstName: "Vikram", lastName: "Patel", class: 12 }; Expected Output: firstName, lastName, class

const student = { firstName: "Vikram", lastName: "Patel", class: 12 };

// const prop = Object.keys(student).toString();
// console.log(prop);

// Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "Vikram Patel is a 41 year old engineer living in Mumbai".

// const person = {
//   firstName:"Vikram",
//   lastName:"Patel",
//   age:41,
//   profession:"engineer",
//   hometown:"Mumbai",
// };

// const present=`${person.firstName} ${person.lastName} is a ${person.age} year old ${person.profession} living in ${person.hometown}.`;
// console.log(present);

// Write a JavaScript program to delete the "class" property (or last property) from the previous object.

// delete student.class;
// console.log(student);

// Write a program to get the length of a JavaScript object.

// const len=Object.keys(student).length;
// console.log(len);

// Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books. 

// const library = [ 
//   { author: 'Jean Genet', 
// title: 'Funeral Rites', 
// readingStatus: true }, 
// { author: 'JG Ballard', 
// title: 'Crash', 
// readingStatus: true }, 
// { author: 'B.Catling', 
// title: 'The Erstwhile', 
// readingStatus: false }];

// for (let i in library) {
//   if (library[i].readingStatus) {
//     console.log(`Already read ${library[i].title} by ${library[i].author}`);
//   } else {
//     console.log(`You still need to read ${library[i].title} by ${library[i].author}`);
//   }
// }
// E.g. Output:

// Already read Funeral Rites by Jean Genet

// Already read Crash by JG Ballard

// You still need to read The Erstwhile by B.Catling