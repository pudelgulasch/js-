// const num = "20" + 20;
// console.log(parseInt(num));
// const num1 = "2.3" + 20;
// console.log(parseInt(num1));

// Date and Time
// const now = Date();
// console.log(now);
// console.log(typeof now);

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// const rightNow = new Date().getMonth() + 1;
// console.log(rightNow);

// console.log(typeof new Date());

// const year = new Date().getFullYear();
// console.log(year);

// // Date=string new Date=object
// // methods only work with object so newDate().getDay()
// // .binds it to function ()calling it

// const hours = new Date().getHours();
// console.log(hours);
// console.log(typeof hours);

// const day = new Date().getDay();
// console.log(day);

// // const now = new Date().getDate();

// const now = new Date().setDate(20);
// // Number of miliseconds
// console.log(now);

// const months1 = new Date().getMonth() + 1;
// console.log(months1);

// const season1 = "Winter";
// const season2 = "Spring";
// const season3 = "Summer";
// const season4 = "Autumn";

// if (months1 === 12 || 1 || 2) {
//   console.log(season1);
// } else if (months1 === 3 || 4 || 5) {
//   console.log(season2);
// } else if (months1 === 6 || 7 || 8) {
//   console.log(season3);
// } else console.log(season4);

// let x = 0;

// switch (x) {
//   case 0:
//     // value of variable
//     state = "OFF";
//     break;
//   case 1:
//     state = "ON";
//     break;
//   // breaks out of
//   default:
//     state = "Stateless";
// }

// let name = "Anna";
// switch (name) {
//   case "Katrin":
//     state = `My name is ${name}.`;
//     break;
//   default:
//     state = "other name";
// }
// console.log(typeof state);
// console.log(state);

// switch exercises
// 1. Color Analyzer
// Create a function that takes a string in its parameters. Console log a different statement for each color (red, blue, green, yellow).

// Example: analyzeColor("Red") -> "Red is a primary color".

// let colors = ["red", "blue", "green", "yellow"];

// let chosenone = "yellow";

// switch (chosenone) {
//   case "red":
//     state = colors[0];
//     break;
//   case "blue":
//     state = colors[1];
//     break;
//   case "green":
//     state = colors[2];
//     break;
//   case "yellow":
//     state = colors[3];
//     break;
//   default:
//     state = "no color is chosen";
// }
// console.log(state);

// 2. Grading
// Create a function that takes a grade in its parameters. Console log comments depending on the grade.

// Example: grade("A") -> "Good job!", grade("F") -> "Failed"

// const gradeNote = Math.floor(Math.random() * 6 + 1);
// const grade = ["A", "B", "C", "D", "E", "F"];
// // console.log(grade);

// switch (gradeNote) {
//   case 1:
//     state = `${grade[0]} super!`;
//     break;
//   case 2:
//     state = `${grade[1]} auch super!`;
//     break;
//   case 3:
//     state = `${grade[2]} immernoch super!`;
//     break;
//   case 4:
//     state = `${grade[3]} ist auch okay!`;
//     break;
//   case 5:
//     state = `${grade[4]} gut!`;
//     break;
//   case 6:
//     state = `${grade} who cares?`;
//     break;
//   default:
//     state = "no grade chosen";
// }
// console.log(state);

// 3. What month is it?
// Create a function using the new Date().getMonth() method and switch case in order to return the month of the year. Return "It's the month of May!"
// let a = new Date().getMonth();
// console.log(a);

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let actualDay = new Date().getDay();
console.log(actualDay);

switch (actualDay) {
  case 0:
    state = weekdays[0];
    break;
  case 1:
    state = weekdays[1];
    break;
  case 2:
    state = weekdays[2];
    break;
  case 3:
    state = weekdays[3];
    break;
  case 4:
    state = weekdays[4];
    break;
  case 5:
    state = weekdays[5];
    break;
  case 6:
    state = weekdays[6];
    break;
  default:
    state = "no date";
}
console.log(state);

// Input: Number of the Day of the weekdays
// Output: Name of the Weekday
