// functions

// - arguments in ()
// function greeting() {
//   console.log("1: Hallo");
// }
// greeting();

// function remainder(x, y) {
//   let result = x % y;
//   return result;
//   //   or return x%y;
//   //   return returns result outside of scope and stops the function
// }

// let sum = remainder(12, 7);
// // x=12,y=7
// console.log("2: " + sum);

// function milesToKm(miles) {
//   let kilometer = miles * 1.6;
//   return kilometer;
// }
// console.log("3: " + milesToKm(10));

// function poundsToKg(pounds) {
//   let kg = pounds / 2.2046;
//   return kg;
// }
// console.log("4: " + poundsToKg(10));

// function askName(a = "John", b = "Doe") {
//   return "Hallo, " + a + " " + b + "!";
// }
// console.log("5: " + askName("Elisa", "& Katrin"));

// function type1(type) {
//   let kind = typeof type;
//   return kind;
// }
// let result = type1(false);
// console.log("6: " + result);

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// let currentNum = 1;
// let endNum = 1000;

// while (endNum >= currentNum) {
//   if (currentNum % 3 === 0 && currentNum % 5 === 0) {
//     console.log(`7: FizzBuzz`);
//   } else if (currentNum % 3 === 0) {
//     console.log(`7: Fizz`);
//   } else if (currentNum % 5 === 0) {
//     console.log("7: Buzz");
//   } else {
//     console.log("7: " + currentNum);
//   }
//   currentNum++;
// }
// while (currentNum <= endNum) {
//   function multi(currentNum) {
//     let multi3 = currentNum % 3 === 0 && currentNum % 5 === 0;
//     return multi3;
//   }
//   function multi(currentNum) {
//     let multi2 = currentNum % 3 === 0;
//     return multi2;
//   }
//   function multi(currentNum) {
//     let multi1 = currentNum % 5 === 0;
//     return multi1;
//   }
//   if (multi(currentNum) === true) {
//     console.log("FizzBuzz");
//   } else if (multi(currentNum) === true) {
//     console.log("Fizz");
//   } else if (multi(currentNum) === true) {
//     console.log("Buzz");
//   }
// }

// function fizzBuzz(currentNum, endNum) {
//   for (let i = currentNum; i <= endNum; i++)
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`7: FizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`7: Fizz`);
//     } else if (i % 5 === 0) {
//       console.log("7: Buzz");
//     } else {
//       console.log("7: " + i);
//     }
// }
// console.log(fizzBuzz(1, 3));

// Write a function that accepts a number from 1 to 100 as a result of a test you gave to your students.
// If the result is lower than 50 then print Not Pass! Try again next time.
// If it is between 50-60 print the grade D.
// If it is between 61-80 print the grade C
// If it is between 81-90 print the grade B
// If it is between 91-98 print the grade A
// If it is 99 print 'Almost perfect'
// If it is 100 'Take a day-off tomorrow'
// Put different values and call the function multiple times to check your result.

// or score
// let i;
// function scoreToGrade(i) {
//   if (i < 50) {
//     console.log("Pass! Try again next time.");
//   } else if (i >= 50 && i <= 60) {
//     console.log("D");
//   } else if (i <= 80) {
//     console.log("C");
//   } else if (i <= 90) {
//     console.log("B");
//   } else if (i <= 98) {
//     console.log("A");
//   } else if (i === 99) {
//     console.log("Almost perfect");
//   } else if (i === 100) {
//     console.log("Take a day-off tomorrow");
//   }
// }
// console.log(scoreToGrade(55));

// function assignGrade(score) {
//   if (score < 50) {
//     console.log("Its not a pass!");
//   } else if (score <= 60) {
//     console.log("D");
//   } else if (score <= 80) {
//     console.log("C");
//   } else if (score <= 90) {
//     console.log("B");
//   } else if (score >= 91 && score <= 98) {
//     console.log("A");
//   } else if (score === 99) {
//     console.log("Almost perfect");
//   } else {
//     console.log("Take a day off tomorrow!");
//   }
// }
// Write a function that accepts any number and returns it's square value.
// Don't forget to validate always before that the accepted input of the function is always number.
// If not print an appropriate message to the console to inform the user that this action is not possible and prevent further code from running.

// function numberToSquareRoot(number) {
//   if (number === NaN) {
//     console.log(
//       "This action is not possible and prevent further code from running."
//     );
//   }
//   return Math.pow(number, 2);
// }
// let result = numberToSquareRoot(3);
// console.log(result);

// function returnSquare(x) {
//     if (typeof x !== 'number') {
//       return 'The action you are trying to perform is not possible!';
//     } else {
//       return x*x;
//     }
//   }

//   const squareOfNine = returnSquare("true");
//   console.log(squareOfNine);
//   Ausblenden

// Input=Celcius Output= Fahrenheit

// function celToFa(degress) {
//   let fa = (degress * 9) / 5 + 32;
//   return fa;
// }
// let fahrenheit = celToFa(33);
// console.log(fahrenheit);

// Global scope (fahrenheitToCelsius, tempToday, tempYesterday)
// local Scope (fahrenhei, celcius)
// Function args are bound to the LOCAL SCOPE

// const fahrenheitToCelsius = function(fahrenheit) {
//   let celcius = fahrenheit - (32 * 5) / 9;
//   return celcius;
// };
// let tempToday = fahrenheitToCelsius();
// let tempYesterday = fahrenheitToCelsius();

// const weightOnEarth = kg => kg * 0.165;
// let weightOnMoon = weightOnEarth(54);
// console.log(weightOnMoon);

// Factorial Function
// 5 != 1 * 2 * 3 * 4 * 5;

// function factorial(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   return factorial(n - 1) * n;
// }
// console.log(factorial(3));

// or in a loop
// function factorial2(n) {
//   j = 1;
//   for (i = 1; i <= n; i++) {
//     // j *= i; code standard
//     j = j * i;
//   }
//   return j;
// }
// console.log(factorial2(4));
// 1*4=4; 2*4=8; 3*8=24; i starts counting at 1; 3 is smaller or equal to 4  so it stops;

// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(2));

// Write a function that accepts several parameters and calculates the amount of money that will have been saved as a pension until a person retires.
// The parameters that should be defined are:
//
// The current age of the person // ex. 40
//
// The age that the person collects the pension // ex. 60
//
// The monthly wage the person earns // ex. 1000
//
// The percentage (as integer)  that the person saves each month // ex. 10%
//
// If the person has already retired then the message 'Calculate your past memories' should be printed.
//
// If not, then the program should calculate how many years remain until the person retires, the monthly
// income and take a specific percent of this income every month as saved money.
//
// Example: A lady is 40 years old, she retires at 65, she earns 2000€ per month and she saves  5% of it.
// How much money will she have saved until she retires? // This case is 30.000

// function pension(age, retiredAt, cashMonth, savMonth) {
//   let years = retiredAt - age - 1;
//   let year = 12 * years + 6;
//   let pensionMonth = cashMonth * (savMonth / 10);
//   let cashTotal = cashMonth * year;
//   let pension = cashTotal * (savMonth / 10);
//   if (age > retiredAt) {
//     return `Calculate your past memories`;
//   } else
//     return `You have ${years} years until you retire, you earn ${cashMonth} a month and save ${pensionMonth} a month until you retire.`;
// }

// console.log(pension(40, 65, 2000, 5));

// function retires(age, collect, wage, save) {
//   let yearsToRetire = collect - wage;
//   let saveingPerYear = wage * (save / 100) * 12;
//   let totalSaving = yearsToRetire * saveingPerYear;
//   if (
//     typeof age !== "number" ||
//     typeof collect !== "number" ||
//     typeof wage !== "number" ||
//     typeof save !== "number"
//   ) {
//     return "Please use integers!";
//   } else if (age >= collect) {
//     return "Please collect your past memories";
//   } else if (yearsToRetire === 1) {
//     return `You have ${yearsToRetire} years until you retire, before you can collect ${totalSavings}.`;
//   }
// }

// Bitweise-XOR-Operator verknüpft alle Bits zweier Integer-Werte nach den Regeln des logischen XOR:
// 1 XOR 0 und 0 XOR 1 ergeben 1 und alle anderen Kombinationen ergeben 0.
// let range=[0,5];
// let max = Math.abs(Math.max(...range));
// let min = Math.abs(Math.min(...range));

// console.log("1: ",max);
// console.log("2: ",min);

// Write a function that calculates how much money someone is going to earn until the end of the week
// by just accepting a number from 1 to 7 that represents the days of the week.
// (1 is for Monday, 2 for Tuesday, etc 7 is for Sunday).
// Given some one earns 10$ per hour and his working schedule is this:

// Monday: works 4hours
// Tuesday: works 6hours
// Wednesday: works 8 hours
// Thursday: works 10hours
// Saturday: works 2 hours
// Fridays and Sundays are days-off.

// const weekDay = (...args) => {
// let i = 0;
// for (i = 0; i === hoursDay.length; i++) {
//   console.log(moneyPerDay);
// }

// };

// console.log(weekDay(1));

// For example: if we execute calculate RestOfWeekMoney(3), The number 3 is passed as
// argument indicates that to day is Wednesday so we calculate from Wednesday (included)
// until Sunday.With calculate RestOfWeekMoney(4) we start counting from Thursday until Sunday etc.

// const daysTillPay = num => {
//   let hoursDay = [4, 6, 8, 10, 0, 2, 0];
//   let weekDay = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
//   ];
//   let sum = 0;
//   num -= 1;
//   hoursDay.splice(0, num);
//   weekDay.splice(0, num);
//   // length counts from 0 till 7 because its the actual number of items not the indexnumbers
//   // splice cuts out from given indexnummer till item counting number
//   for (i = 0; i < hoursDay.length; i++) {
//     sum += hoursDay[i] * 10;
//   }
//   return `You've got ${weekDay.length} days to work until you get paid ${sum}.`;
// };

// console.log(daysTillPay(3));

// let hoursRemaining = 0;

// function calculateUntilEndOfWeek(numDay) {
//   const moneyPerHour = 10;

//   switch (numDay) {
//     case 1:
//       hoursRemaining += 4;
//       stringExample = "Monday, ";
//       break;
//     case 2:
//       hoursRemaining += 6;
//       stringExample = "Tuesday, ";
//       break;
//     case 3:
//       hoursRemaining += 8;
//       stringExample = "Wednesday, ";
//       break;
//     case 4:
//       hoursRemaining += 10;
//       stringExample = "Thursday, ";
//       break;
//     case 6:
//       hoursRemaining += 2;
//       stringExample = "Saturday, ";
//       break;
//     default:
//       hoursRemaining += 0;
//       stringExample = "Friday or Sunday.";
//       break;
//   }

//   numDay++;

//   if (numDay <= 7) {
//     calculateUntilEndOfWeek(numDay);
//   } else {
//     console.log(
//       `The money that you are going to earn until the end of the week is ${hoursRemaining *
//         moneyPerHour}$`
//     );
//   }
// }
// console.log(calculateUntilEndOfWeek(3));

// c4n y0u r34d th15?
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes For your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// function stringToCode(stringString) {
//   for (let i = 1; i < stringString.length; i++) {
//     let num = Math.floor(Math.random() * 24 + 1);
//     return stringString.replace(stringString[i] / i, num);
//   }
// }
// console.log(stringToCode("Hallo Emil"));

// you don need the return with arrow, only inside for loop
// only curly brackets if you use a code block

// const hackerspeak = str =>
//   str
//     .replace(/a/gi, 4)
//     .replace(/e/gi, 3)
//     .replace(/i/gi, 1)
//     .replace(/o/gi, 0)
//     .replace(/s/gi, 5);

// console.log(hackerspeak("Javascript is awesome"));

// The array.join() method is an inbuilt function in JavaScript which is used to join the elements of an
// array into a string.The elements of the string will be separated by a specified separator and its default
// value is comma(, ).

// Create a function that accepts a string, checks if it's a valid email address and returns either
// true or false, depending on the evaluation.
//
// **Notes**
// * The string must contain an @ character.
// * The string must contain a . character.
// * The @ must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The . and the @ must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

// const valid = email => {
//   let newString = [];
//   email.includes("@") ? (newString = email.split("@")) : false;
//   return newString[1] && newString[0].length > 0 && newString[1].includes(".")
//     ? true
//     : false;

  // if (email.includes("@")) {
  //   newString = email.split("@");
  // } else {
  //   return false;
  // }
  // if (newString[0].length > 0) {
  //   if (newString[1].includes(".")) {
  //     return true;
  //   }
  // } else {
  //   return false;
  // }
  // return false;
// };
// console.log(valid("katrinsalac@gmail.com"));

// 1 pure
// 3 variables
// 1 for loop
