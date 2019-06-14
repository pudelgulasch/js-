// Strings
// Write a program to check whether JavaScript is a string or not.

const isString = str => (typeof str == "string" ? true : false);

console.log(isString("JavaScript"));

// Write a program to check whether a string is empty or not.

const empty = (...args) =>
  typeof args !== "undefined" && args.length > 0 ? "full" : "empty";

console.log(empty());

// Write a program to convert a string in abbreviated form. E.g. John Smith -> John S.

const short = name => {
  let ind = name.search(" ") + 2;
  let sli = name.slice(0, ind);
  return `${sli}.`;
};

console.log(short("John Smith"));

// Write a program to hide email addresses to protect from unauthorized user. E.g. "john_smith@example.com" -> "john...@example.com"

const hide = email => {
  let ind1 = email.search("@");
  let sli1 = email.slice(0, 4);
  let sli2 = email.slice(ind1);
  return `${sli1}...${sli2}`;
};

console.log(hide("john_smith@example.com"));

// Write a program to change a string to the following format: E.g. John Smith from Berlin -> john-smith-from-berlin.

const change = str => str.toLowerCase().replace(/ /g, "-");
console.log(change("John Smith from Berlin"));

// Write a program to convert a string into camel case. E.g. "john smith" -> "johnSmith"

const camel = str => {
  let arr = str.split(" ");
  str1 = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
  str2 = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
  return `${str1}${str2}`;
};

console.log(camel("john smith"));

// Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)

const ordinalNum = num => {
  if (num <= 2 && num > 0) {
    return num + "st";
  } else num;
};

// Declare a variable and sort the characters into alphabetical order.

// Write a program that takes a number (1-60) and returns a corresponding string of hyphens. Examples: (1) ➞ "-" (5) ➞ "-----" (3) ➞ "---"

// const hyphens = num =>
//   num < 0 && num <= 60 ? [...Array(num).keys.map()] : "out of range";

const spell = word => {
  arr = [""];
  for (i = 0; i < word.length; i++) {
    arr.push((arr[i] += word[i]));
  }
  return arr.slice(0, arr.length - 1);
};
console.log(spell("bee"));

function makeTree(num) {
  let string = "                              *";
  for (let i = 0; i < num; i++) {
    console.log(string);

    string += "*";
  }
}

makeTree(50);
//replace space
