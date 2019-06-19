// Spread Operator
// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Add the items of one array to the beginning of the second array.
// Create another array. Include another array as one of the elements.

const euroCities = ["Paris", "Amsterdam", "Berlin", "Rome"];
const asianCities = ["Busan", "Taipei", "Kuala Lumpur", "Osaka"];

// const cities = [...euroCities, ...asianCities];
// console.log(cities);

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.

// euroCities = [...euroCities, ...euroCities];
// console.log(euroCities);

// 3. Find the Largest...
// Create a function to find the largest number in an array.

const numbers = [19, 495, 28, 2];
// let result = Math.max(...numbers);
// console.log(result);

// 4. Find the Smallest
// Create a function to find the smallest number in an array.

// let result2 = Math.min(...numbers);
// console.log(result2);

// 5. Clone and Merge
// Given two objects:
const person = { name: "Jonas" };
const job = { role: "Developer" };
// Clone the person object.
const person2 = person;
// console.log(person2);

// Merge these two objects into one object: "employee".
const employee = { ...person2, ...job };
employee.name = "Maria";
console.log(employee);
person2.name = "Katrin";
console.log(person2);

// Use the spread operator to do so.

// Then change the values of the properties in the employee object.

person.name = "Maria";
console.log(employee);

// 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false
// depending on whether the average of all the arguments is a whole number or not.

let array2 = [9, 2, 2, 4];

const isWhole = (...args) => {
  const sum = (a, b, c, d) => a + b + c + d;
  return (sum(...args) % args.length) % 2 === 0 ? true : false;
};

console.log(isWhole(array2));

// Examples

// isWhole(1, 2, 3, 4) ➞ false

// isWhole(9, 2, 2, 5) ➞ false

// Once you have created a function, pass in an array as an argument which contains four elements
// - check if this method still outputs the correct result!

// 7. Minimum Removals for Even Output
// Create a function that takes 4 integers as an argument and returns the minimum number of removals
// to make the sum of all the elements even.

// Examples:
// minRemovals(1, 2, 3, 4) ➞ 0 removals
// minRemovals(5, 7, 9, 11) ➞ 0 removals
// minRemovals(5, 7, 9, 12) ➞ 1 removal

// const minRemovals = (...args) => args.filter(([...args] % 2 === 0) => [...args]+1);
// console.log(minRemovals(5, 7, 9, 12));



%2===0