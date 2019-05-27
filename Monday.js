// let x = 1;

// while (x < 10) {
//   // evaluating to a boolean value
//   console.log("Number", x);
//   x++;
// }

// let numToBeMultiplied = 5;
// let i = 1; // counter
// while (i <= 10) {
//   let sum = i * numToBeMultiplied;
//   console.log(sum);
//   i++;
// }

// let z = 0;

// while (z < 10) {
//   // sets the range where it's getting executed
//   z++;
//   //   count
//   if (z % 2 == 0) {
//     console.log(`the number ${z} is even!`);
//   } else if (z % 2 > 0) {
//     console.log(`the number ${z} is odd!`);
//   }
// }
// // also possible with tenary operator ? if true this : otherwise this

// let endNum = 100;
// let currentNum = 1;

// while (currentNum <= endNum) {
//   if (currentNum % 3 === 0 && currentNum % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (currentNum % 3 === 0) {
//     console.log("Buzz");
//   } else if (currentNum % 5 === 0) {
//     console.log(`Fizz`);
//   } else console.log(`${currentNum}`);
//   currentNum++;
// }

// The Container Problem
// Suppose you own a ship.
// This ship can carry up to 10.000 Kg in terms of weight.
// A merchant wants you to carry his goods with your ship.
// He has 500 containers and he wants you to carry as many as
// possible. All containers have an identifying number from 1
// to 500.
// The first 100 containers weight 10Kg each.
// The containers with number from 101 up to 200 (included)
// weight 20kg each.
// The containers with number from 201 up to 250 (included)
// weight 50kg each.
// The containers with number from 251 up to 300 (included)
// weight 100kg each.
// The containers with number from 301 up to 400 (included)
// weight 200kg each.
// The rest weight 500 Kg each.
// Put as many containers as possible without sinking your
// ship. Find a way to stop adding weight if you surpass the
// limit your ship can afford.
// Print to the console exact how many containers you have
// included to your ship and how much is the difference
// between the total weight of the containers and the weight
// your ship can afford (free available weight).

let containerAmount = 6;
let containerWeight = 1;
let i = 1;
let container = 1;
let shipTotal = 10000;
let sum;
let sum2;
let sum3;
let total;
// let first = 100 * 10;
// let second = 99 * 20;

while (container <= containerAmount) {
  if (container === 1) {
    sum = container * 10 * 100;
    console.log(sum);
  } else if (container === 2) {
    sum2 = container * 20 * 99;
    console.log(sum2);
  } else if (container === 3) {
    sum3 = container * 50 * 99;
    console.log(sum3);
  }
  total = sum + sum2 + sum3;
  console.log(total, shipTotal);
  container++;
}
