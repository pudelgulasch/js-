// Strings
// Write a program to check whether JavaScript is a string or not.
console.log(typeof "JavaScript");

// Write a program to check whether a string is empty or not.
const str = "";
console.log(str.length);

// Write a program to convert a string in abbreviated form. E.g. John Smith -> John S.

const short = name => {
  let ind = name.search(" ") + 2;
  let sli = name.slice(0, ind);
  return `${sli}.`;
};

console.log(short("John Smith"));

// *****************************************************************
const name = "Jane Doe";
const splitName = name.split(" ");
const firstName = splitName[0];
const initial = splitName[1][0];
console.log(`${firstName} ${initial}.`);

// Write a program to hide email addresses to protect from unauthorized user. E.g. "john_smith@example.com" -> "john...@example.com"

const hide = email => {
  let ind1 = email.search("@");
  let sli1 = email.slice(0, 4);
  let sli2 = email.slice(ind1);
  return `${sli1}...${sli2}`;
};

console.log(hide("john_smith@example.com"));

// *******************************************************************

const email = "john_smith@example.com";
const firstFourChars = email.substring(0, 4);
const emailSplit = email.split("@");
const emailEnd = emailSplit[1];
const protected = "...";
console.log(`${firstFourChars} ${protected} ${emailEnd}`);

// Write a program to change a string to the following format: E.g. John Smith from Berlin -> john-smith-from-berlin.
let sentence = "John Smith from Berllin";
let regex = sentence.replace(/\s+/g, "-");
console.log(regex);

const strFormat = originalStr => {
  const originalToLower = originalStr.toLowerCase();
  const splitOriginal = originalToLower.split(" ");
  const joinOriginal = splitOriginal.join("-");
  return joinOriginal;
};
console.log(strFormat("John Smith from Berllin"));

// **********************************************************

const description = "John Smith from Berlin";
const splitDescription = description.split(" ");
const joinedDescription = splitDescription.join("-");
console.log(joinedDescription.toLowerCase());
// Write a program to convert a string into camel case. E.g. "john smith" -> "johnSmith"

const toCamelCase = normalCase => {
  const toLower = normalCase.toLowerCase();
  const splitNormal = toLower.split(" ");
  let camelStr = [];
  for (let i = 0; i < splitNormal.length; i++) {
    if (i === 0) {
      camelStr.push(splitNormal[i]);
    } else {
      const toUpper = splitNormal[i][0].toUpperCase();
      const rest = splitNormal[i].slice(1);
      camelStr.push(toUpper + rest);
    }
  }
  return camelStr.join("");
};
console.log(toCamelCase("John Smith Johnson"));

// *********************************************************

const lowerCase = "any words";
const lowerCaseSplit = lowerCase.split(" ");
const firstWord = lowerCaseSplit[0];
const secondWord = lowerCaseSplit[1];
const firstLetter = secondWord[0].toUpperCase();
const secondRemainder = secondWord.substring(1, secondWord.length);
const camelCase = firstWord + firstLetter + secondRemainder;
console.log(camelCase);

// Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)
const ordinal = num => {
  let tens = num % 10;
  let hundreds = num % 100;

  if (tens === 1 && hundreds != 11) {
    return num + "st";
  }
  if (tens === 2 && hundreds != 12) {
    return num + "nd";
  }
  if (tens === 3 && hundreds != 13) {
    return num + "rd";
  }
  return num + "th";
};

console.log(ordinal(113));

// *******************************************************

const number = 1000002;
const numberStr = number.toString();
if (numberStr[numberStr.length - 1] === 1) {
  console.log(number + "st");
} else if (numberStr[numberStr.length - 1] === 2) {
  console.log(number + "nd");
} else if (numberStr[numberStr.length - 1] === 3) {
  console.log(number + "rd");
} else {
  console.log(number + "th");
}

// Declare a variable and sort the characters into alphabetical order.
const myArr = "foewipfewhfuwef";

const sortArr = arr => [...arr].sort().join("");

console.log(sortArr(myArr));

//****************************************************

const pangram = "the quick brown fox jumps over the lazy dog";
const alphabet = pangram.split("");
console.log(alphabet.sort());

// Write a program that takes a number (1-60) and returns a corresponding string of hyphens. Examples: (1) ➞ "-" (5) ➞ "-----" (3) ➞ "---"

const hyphensPrint = num => {
  for (let i = 0; i <= num; i++) {
    console.log("-".repeat(i));
  }
};

hyphensPrint(10);

//**********************************************

const num = 60;
let hyphen = "";
for (let i = 0; i < num; i++) {
  hyphen += "-";
}
console.log(hyphen);

// Arrays
// Leap Years Write a program which finds the leap years in a given range of years.

const leapYear = year => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a leap year`;
      } else {
        return `${year} is not a leap year`;
      }
    } else {
      return `${year} is a leap year`;
    }
  } else {
    return `${year} is not a leap year`;
  }
};

console.log(leapYear(2020));

const leapYear2 = (start, end) => {
  let numArr = [];
  for (start; start <= end; start++) {
    numArr.push(start);
  }
  return numArr.filter(x => x % 4 === 0 && (x % 100 != 0 || x % 400 === 0));
};

console.log(leapYear2(1000, 1500));

//**********************************************

const years = [
  1999,
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013
];
let leapYears = [];
for (let i = 0; i < years.length; i++) {
  if (years[i] % 4 === 0 || (years[i] % 100 !== 0 && years[i] % 400 === 0)) {
    leapYears.push(years[i]);
  } else {
    console.log(i, "not a leap year");
  }
}
console.log(leapYears);

// First & Last Write a program that takes an array and returns the first and last elements as a new array.
// Expected Output: [5, 10, 15, 20, 25] ➞ [5, 25] ["javascript", 13, null, false, true] ➞ ["javascript", true] [undefined, 4, "6", "hello", null] ➞ [undefined, null]

const anotherArray = ["javascript", 13, null, false, true];

const getFirstAndLast = arr => [arr[0], arr[arr.length - 1]];

console.log(getFirstAndLast(anotherArray));

//******************************************************

const fruits = ["banana", "cherry", "kiwi", "apple", "orange"];
const firstItem = fruits[0];
const lastItem = fruits[fruits.length - 1];
console.log(firstItem, lastItem);

// Find the Smallest Number Write a program that takes an array of numbers and returns the smallest number in the set.
// E.g [34, 15, 88, 2] ➞ 2 [34, -345, -1, 100] ➞ -345 [-76, 1.345, 1, 0] ➞ -76 [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999 [7, 7, 7] ➞ 7

const minNum = num => Math.min(...num);
console.log(minNum([34, -345, -1, 100]));

//*****************************************************

const numbersArray = [1, 2, 3, 4, 5, 0, -1];
let smallest;
let smallestNumber = [];
for (let i = 0; i < numbersArray.length; i++) {
  if (smallest === undefined) {
    smallest = numbersArray[i];
  } else if (smallest > numbersArray[i]) {
    smallest = numbersArray[i];
  }
}
console.log(smallest);

// Return Student Names Write a program that takes an array of students and returns an array of student names. Example: [ { name: "Steve"}, { name: "Mike"}, { name: "John"} ]
// ➞ ["Steve", "Mike", "John"]

const students = [{ name: "Steve" }, { name: "Richard" }, { name: "John" }];
let studentNames = [];
for (let i = 0; i < students.length; i++) {
  studentNames.push(students[i].name);
}

console.log(studentNames);

//*****************************************************

const students = [{ name: "Steve" }, { name: "John" }, { name: "Mike" }];
let studentsNames = [];
for (let i = 0; i < students.length; i++) {
  studentsNames.push(students[i].name);
}
console.log(studentsNames);

// Spell it out Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g. spelling("bee") ➞ ["b", "be", "bee"] spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"] spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

const spell = word => {
  arr = [""];
  for (i = 0; i < word.length; i++) {
    arr.push((arr[i] += word[i]));
  }
  return arr.slice(0, arr.length - 1);
};

console.log(spell("bee"));

//*********************************************

const word = "great";
const splitWord = word.split("");
let letters = "";
let spelling = [];

for (let i = 0; i < splitWord.length; i++) {
  letters += splitWord[i];
  spelling.push(letters);
}
console.log(spelling);

// Objects
// Write a program to list the properties of an object. E.g. const student = { firstName: "Vikram", lastName: "Patel", class: 12 }; Expected Output: firstName, lastName, class
const student = { firstName: "Vikram", lastName: "Patel", class: 12 };

const studentProperties = Object.keys(student);
console.log(studentProperties);

//**********************************************

// SAME AS ABOVE

// Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "Vikram Patel is a 41 year old engineer living in Mumbai".

const person = {
  firstName: "Vikram",
  lastName: "Patel",
  age: 41,
  job: "engineer",
  city: "Mumbai"
};

console.log(
  `${person.firstName} ${person.lastName} is a ${person.age} year old ${
    person.job
  } living in ${person.city}`
);

// Write a JavaScript program to delete the "class" property (or last property) from the previous object.

delete person.city;
console.log(person);

// Write a program to get the length of a JavaScript object.

console.log(Object.keys(person).length);

// Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books. const library = [ { author: 'Jean Genet', title: 'Funeral Rites', readingStatus: true }, { author: 'JG Ballard', title: 'Crash', readingStatus: true }, { author: 'B.Catling', title: 'The Erstwhile', readingStatus: false }];
//
// E.g. Output:
//
// Already read Funeral Rites by Jean Genet
//
// Already read Crash by JG Ballard
//
// You still need to read The Erstwhile by B.Catling

const library = [
  {
    author: "Jean Genet",
    title: "Funeral Rites",
    readingStatus: true
  },
  {
    author: "JG Ballard",
    title: "Crash",
    readingStatus: true
  },
  {
    author: "B. Catling",
    title: "The Erstwhile",
    readingStatus: false
  }
];

for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus) {
    console.log(`Already read ${library[i].title} by ${library[i].author}`);
  } else {
    console.log(
      `You still need to read ${library[i].title} by ${library[i].author}`
    );
  }
}
