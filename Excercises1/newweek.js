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

// return boolean with if statement
function divisibleByFive(n) {
  if (n % 5 === 0) {
    return true;
  } else return false;
}
console.log(divisibleByFive(6));

// to check if a string is empty, "else if" is nessesary
function isEmpty(s) {
  if (s === "") {
    return true;
  } else if (s != "") {
    return false;
  }
}

let result = isEmpty("");
console.log(result);

// even or odd
function isEvenOrOdd(num) {
  return num % 2 ? "odd" : "even";
}

// concat
function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}
// reverse
function reverse(arr) {
  return arr.reverse();
}
// concat array
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// ZU NIKE
// Input=Celcius Output= Fahrenheit

function celToFa(degress) {
  let fa = (degress * 9) / 5 + 32;
  return fa;
}
let fahrenheit = celToFa(33);
console.log(fahrenheit);

// Ich glaube das kennst du schon. Haben wir aber der degress-Übung gemacht
// go on edabit.com
// create an account
// click challenges
// select Javascript, select very easy

// arrow-function(because of the big arrow sign after the argument),
// another way of writing a function for sort functions
const add = (a, b) => a + b;
let sum = add(5, 5);
console.log(sum);
