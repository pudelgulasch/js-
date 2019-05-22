// #Conditionals Exercises P2
// **Print your results to the console**

// 1. Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a kid". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to 20 and less than 30, then print "firstName is a young man/woman". If none of these conditions apple, print "firstName is a man/woman".

let firstName = "Katrin";
let age = 32;

if (age < 13) {
  console.log(`${firstName} is a kid.`);
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager.`);
} else if (age === 20 && age < 30) {
  console.log(`${firstName} is a young adult.`);
} else {
  console.log(`${firstName} is whatever.`);
}

// 2. John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
// > Calculate the average score for each team.
let teamJohn1 = 110;
let teamJohn2 = 120;
let teamJohn3 = 103;

let teamMike1 = 110;
let teamMike2 = 120;
let teamMike3 = 103;

let teamMary1 = 97;
let teamMary2 = 134;
let teamMary3 = 105;

let avJohn = (teamJohn1 + teamJohn2 + teamJohn3) / 3;
let avMike = (teamMike1 + teamMike2 + teamMike3) / 3;
let avMary = (teamMary1 + teamMary2 + teamMary3) / 3;
console.log(avJohn, avMike, avMary);
// > Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

let winner1 = `${avJohn} John`;
let winner2 = `${avMike} Mike`;
let winner3 = `${avMary} Mary`;

if (avJohn > avMike && avJohn > avMary) {
  console.log(winner1);
} else if (avJohn < avMike && avMike > avMary) {
  console.log(winner2);
} else if (avJohn < avMary && avMike < avMary) {
  console.log(winner3);
} else if ((avJohn === avMike) === avMary) {
  console.log("draw!");
}

// > Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

// > Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

// > Like before, change the scores to generate different winners, keeping in mind there might be draws.

// 3. Calculate the student average mark and then give the student a grade.

let studentMarks = [90, 64, 75, 83, 80, 55];
let avMarks = Math.round((90 + 64 + 75 + 83 + 80 + 55) / 6);
console.log(avMarks);
if (avMarks > 90) {
  console.log("A+");
} else if (avMarks > 80 && avMarks <= 90) {
  console.log("A");
} else if (avMarks > 70 && avMarks <= 80) {
  console.log("B+");
} else if (avMarks > 60 && avMarks <= 70) {
  console.log("B");
} else if (avMarks > 50 && avMarks <= 60) {
  console.log("C+");
} else if (avMarks > 40 && avMarks <= 50) {
  console.log("C");
} else if (avMarks > 30 && avMarks <= 40) {
  console.log("D");
} else if (avMarks <= 30) {
  console.log("F");
}
// - A+ if the average is greater than 90.
// - A if the average is greater than 80 and less than or equal to 90	.
// - B+ if the average is greater than 70 and less than or equal to 80.
// - B if the average is greater than 60 and less than or equal to 70.
// - C+ if the average is greater than 50 and less than or equal to 60.
// - C if the average is greater than 40  and less than or equal to 50.
// - D if the average is greater than 30 and less than or equal to 40.
// - F if the average is less than or equal to 30.

// 4. Make an if/else statement depending on the weather today!
// Create a variable named "temperature" and "weather".
// Then, create outputs based on the variable values e.g.
// if ((temperature > 15) && (weather === 'sunny') {
//     console.log(`It is ${temperature} degrees outside and ${weather}`.
// }
let temperature = 32;
let weather1 = "rainy";
let weather2 = "sunny";
let weather3 = "snowing";
let weather4 = "overcast sky";
// Do this for sunny weather, rainy weather, snow and an overcast sky.
// if ((temperature > 15) && (weather === 'sunny') {
//   console.log(`It is ${temperature} degrees outside and ${weather}`)
// 5. Make an if/else statement depending on a person's job.
// Create two variables "firstName" and "job".
// Print different outputs depending on the value of "job" eg. "Maria is a teacher in Berlin" / "Maria is a designer in Berlin".
// Make 5 different possible outcomes depending on the value of job.
// let firstName="Katrin";
// let job="student";

// 6. Determine whether a given year is a leap year in the Gregorian calendar.
// It is a solar calendar based on a 365-day common year divided into 12 months of irregular lengths. 11 of the months have either 30 or 31 days, while the second month, February, has only 28 days during the common year. However, nearly every four years is a leap year, when one extra – or intercalary – day, is added on 29 February, making the leap year in the Gregorian calendar 366 days long.

// The days of the year in the Gregorian calendar are divided into 7-day weeks, and the weeks are numbered 1 to 52 or 53. The international standard is to start the week on Monday. However, several countries, including the US and Canada, count Sunday as the first day of the week.

let year = 1991;

let leap1 = year % 4 === 0 && year % 100 != 0 ? "leap year" : "not a leap year";
console.log(leap1);
let leap2 =
  year % 100 === 0 || year % 400 != 0 ? "not a leap year" : "leap year";
console.log(leap2);

// The year is evenly divisible by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400: Then it is a leap year.

// 7. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5". If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz". If none of the above apply, print the number.
let number = 31;

if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else if (number % 3 == 1 && number % 5 == 0) {
  console.log("FizzBuzz");
} else {
  console.log(number);
}
