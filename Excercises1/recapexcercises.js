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

// Write a program to convert a string into camel case. E.g. "john smith" -> "johnSmith"

// Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)

// Declare a variable and sort the characters into alphabetical order.

// Write a program that takes a number (1-60) and returns a corresponding string of hyphens. Examples: (1) ➞ "-" (5) ➞ "-----" (3) ➞ "---"
