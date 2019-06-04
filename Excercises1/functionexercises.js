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

function pension(age, retiredAt, cashMonth, savMonth) {
  let years = retiredAt - age - 1;
  let year = 12 * years + 6;
  let pensionMonth = cashMonth * (savMonth / 10);
  let cashTotal = cashMonth * year;
  let pension = cashTotal * (savMonth / 10);
  if (age > retiredAt) {
    return `Calculate your past memories`;
  } else
    return `You have ${years} years until you retire, you earn ${cashMonth} a month and save ${pensionMonth} a month until you retire.`;
}

console.log(pension(40, 65, 2000, 5));

function retires(age, collect, wage, save) {
  let yearsToRetire = collect - wage;
  let saveingPerYear = wage * (save / 100) * 12;
  let totalSaving = yearsToRetire * saveingPerYear;
  if (
    typeof age !== "number" ||
    typeof collect !== "number" ||
    typeof wage !== "number" ||
    typeof save !== "number"
  ) {
    return "Please use integers!";
  } else if (age >= collect) {
    return "Please collect your past memories";
  } else if (yearsToRetire === 1) {
    return `You have ${yearsToRetire} years until you retire, before you can collect ${totalSavings}.`;
  }
}

// Bitweise-XOR-Operator verknüpft alle Bits zweier Integer-Werte nach den Regeln des logischen XOR:
// 1 XOR 0 und 0 XOR 1 ergeben 1 und alle anderen Kombinationen ergeben 0.
let range={0,5};
let max = Math.abs(Math.max(range));
let min = Math.abs(Math.max(range));

console.log(max);
console.log(min);
