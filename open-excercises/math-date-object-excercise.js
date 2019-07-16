// Math Object & Date Object JavaScript
// Using Math Object & Date Object in JavaScript! Print your answers to the console.
// Math Object
// 1. Random Number
// Create a function to return a random integer.

const ranInt = number => Math.floor(Math.random() * 100);
console.log(ranInt());

// 2. Lowest Number
// Create a function that takes an array as an argument and returns the number with the lowest value.

const numLow = (...args) => Math.min(...args);
console.log(numLow(3, 6, 80, 101, 0.46));

// 3. The Power Of
// Create a function that takes two numbers as arguments. Return the value of the first number to the power of the second number.

const pow = (num, pow) => Math.pow(num, pow);
console.log(pow(2, 2));

// 4. Highest Number
// Create a function that takes an array as an argument and returns the highest number in that array.

const high = arr => Math.max(...arr);
console.log(high([2, 5, 10, 9]));

// 5. Pi
// Create a function that given a number n, returns PI to n decimal places. Examples:

const pi = n => Math.PI.toFixed(n);
console.log(pi(5));

// myPi(5) ➞ 3.14159 //5 decimal places
// myPi(4) ➞ 3.1416 //4 decimal places
// myPi(15) ➞ 3.141592653589793 // 15 decimal places
// Bonus

const studentname = ["Lara", "Vassia", "Nike", "Trine", "Arturo", "Leonard"];
const randomName = arr => arr[Math.floor(Math.random() * arr.length)];
console.log(randomName(studentname));

// Random Name
// Create a function for our webdev class 13b that returns a random student's name.

// Date Object
// 1. What day is it?
// Create a function to display the current date and time in the following format: Today is Wednesday.
// The current time is 1PM : 34 : 59.

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const time = Date => {
  return `Today is ${
    weekday[Date.getDay()]
  }. The current time is ${Date.getHours()}PM : ${Date.getMinutes()} : ${Date.getSeconds()}`;
};
console.log(time(new Date()));

// 2. Date Formats
// Create a function to display the current date in the following formats dd-mm-yyyy, dd/mm/yyyy.

// const date = Date => getDate();
// console.log(Date(new Date()));

// 3. Is New Year's day a Sunday?
// Create a function to check whether the 1st of January is a Sunday between the years of 2014 and 2050.

// 4. How many days till Christmas?
// Create a function to calculate the days till Christmas.

// 5. Days in a month
// Create a function to calculate the number of days in a specified month. Examples and Expected Output:

// getDaysInMonth(1, 2012); --> 31
// getDaysInMonth(2, 2012); --> 29
// getDaysInMonth(9, 2012); --> 30
// getDaysInMonth(12, 2012); --> 31
