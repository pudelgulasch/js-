// Math Object

function mathRound(number) {
  return Math.round(number);
}

console.log(mathRound(22.55));
console.log(mathRound(100.15));

function mathCeil(number) {
  return Math.ceil(number);
}
console.log(mathCeil(100.15));
console.log(mathCeil(22.55));

function mathFloor(number) {
  return Math.floor(number);
}
console.log(mathFloor(2.99));

function mathRandom() {
  return Math.random();
}
console.log(Math.ceil(mathRandom() * 20));

function mathMin(...args) {
  let minValue = Math.min(...args);
  return minValue;
}
console.log(mathMin(0.981, 23, 1998.87, 63.1));

function mathMax(...args) {
  //rest
  let maxValue = Math.max(...args);
  return maxValue;
}
console.log(mathMax(0.981, 23, 1998.87, 63.1));

let numsArray = [73, 333.33, 781, 62.5];
console.log(Math.max(...numsArray)); //spread

function squareRoot(number) {
  return Math.sqrt(number);
}
console.log(`${squareRoot(64)}`);

// Date Object
// Date is like math a built-in object in JS. It stores the date, time and provides methods for management
// of date/time
// UNIX Time : 1st January 1970 12AM

let myDate = new Date();
let getTime = myDate.getTime();
console.log(getTime);
// measured in miliseconds

let getFullYear = myDate.getFullYear();
console.log(getFullYear);

let getMonth = myDate.getMonth() + 1;
console.log(getMonth);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const a = new Date().getMonth();
console.log(a); //5

const month = months[myDate.getMonth()];

let getDate = myDate.getDate();
console.log(getDate);

let getHours = myDate.getHours();
console.log(getHours);

let getMin = myDate.getMinutes();
console.log(getMin);

let getDay = myDate.getDate();
console.log(getDay);

const myBday = new Date("2020-03-12");
const today = new Date();
// 86400000 miliseconds per Day;
const daysToWait = Math.floor((myBday - today) / 86400000);
console.log(daysToWait);
