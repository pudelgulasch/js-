// break/continue

// let foo = 0;
// while (foo <= 10) {
//   foo++;
//   if (foo % 2 === 0) {
//     break;
//     // or continue; to skip
//   }
//   console.log(foo);
// }

// evaluating to a boolean value

// let x = 1;

// while (x < 10) {
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

// let weights, numbers, totalWeight, maxWeight, i;

// weights = [10, 20, 50, 100, 200, 500];
// numbers = [100, 100, 50, 50, 100, 100];
// totalWeight = 0;
// maxWeight = 10000;
// totalContainers = 0;
// i = 0;

// while (totalWeight < maxWeight) {
//   totalWeight += weights[i] * numbers[i];
//   totalContainers += numbers[i];
//   console.log(i, totalWeight, " = ", weights[i], "*", numbers[i]);
//   i++;
// }
// while (totalWeight > maxWeight) {
//   totalWeight -= weights[i - 1];
//   totalContainers -= 1;
// }

// console.log(`The ${totalContainers} containers in the ship weight ${totalWeight} kg, 
// which is ${maxWeight - totalWeight} kg less than the maximum weight.`);

// let maxWeight = 10000;
// let weightIncluded = 0;
// let id = 1;
// let weightNextContainer = 10;

// while (maxWeight >= weightIncluded + weightNextContainer) {
//   if (id <= 100) {
//     weightIncluded += 10;
//     id === 100 ? (weightNextContainer = 20) : (weightNextContainer = 10);
//   } else if (id <= 200) {
//     weightIncluded += 20;
//     id === 200 ? (weightNextContainer = 50) : (weightNextContainer = 20);
//   } else if (id <= 250) {
//     weightIncluded += 50;
//     id === 250 ? (weightNextContainer = 100) : (weightNextContainer = 50);
//   } else if (id <= 300) {
//     weightIncluded += 100;
//     id === 300 ? (weightNextContainer = 200) : (weightNextContainer = 100);
//   } else if (id <= 400) {
//     weightIncluded += 200;
//     id === 400 ? (weightNextContainer = 500) : (weightNextContainer = 200);
//   } else {
//     weightIncluded += 500;
//     weightNextContainer = 500;
//   }
//   //in case you want to see every step!
//   // console.log(`${id} container included, the current Weight is {weightIncluded}. Remain weight is ${maxWeight - weightIncluded}!`)
//   id++;
// }

// console.log(
//   `I have included ${id -
//     1} containers to the ship and the weight remaining is ${maxWeight -
//     weightIncluded}!`
// );
