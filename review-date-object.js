// Date Object
// Date is like math a built-in object in JS. It stores the date, time and provides methods for management
// of date/time
// UNIX Time : 1st January 1970 12AM

let myDate = new Date();
let getTime = myDate.getTime();
console.log(getTime);

// Time measured in miliseconds

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

const month = months[myDate.getMonth()];
console.log(month);

let getDate = myDate.getDate();
console.log(getDate);

let getHours = myDate.getHours();
console.log(getHours);

let getMin = myDate.getMinutes();
console.log(getMin);

let getDay = myDate.getDay();
console.log(getDay); // Sunday is 0

const myBday = new Date("2020-03-12");
const today = new Date();
// 86400000 miliseconds per Day;
const daysToWait = Math.floor((myBday - today) / 86400000);
console.log(daysToWait);
