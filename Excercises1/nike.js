// // FOR LOOP EXERCISE
// // for (let i = 0; i < 10; i += 2) {
// //     console.log("hey");
// //   }
// //----------------------------------------------------------------------
// // Change the 'while loop' into a 'for loop'
// let maxWeight = 10000;
// let weightIncluded = 0;
// let id = 1;
// let weightNextContainer = 10;
// for (id = 1; maxWeight >= weightIncluded + weightNextContainer; id++) {
//   // initializer, condition and final expression (incrementer)
//   // while (maxWeight >= weightIncluded + weightNextContainer) {
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
//   //   id++;
// }
// console.log(
//   `1: I have included ${id -
//     1} containers to the ship and the weight remained is ${maxWeight -
//     weightIncluded}!`
// );
// //--------------------------------------------------------------------
// let currentNum = 1;
// let endNum = 100;
// for (currentNum = 1; currentNum <= endNum; currentNum++) {
//   // while (currentNum <= endNum) {
//   // If the number is less or equal to 100 -> run the loop
//   if (currentNum % 3 === 0 && currentNum % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (currentNum % 3 === 0) {
//     console.log(`Fizz`);
//   } else if (currentNum % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(`2: ${currentNum}`);
//   }
//   // currentNum++;
// }
// //----------------------------------------------------------------------
// // Write a program to add the multiples of 3 and 5 under 1000;
// // for (let i = 0; i < 10; i += 2) {
// //     console.log("hey");
// //   }
// let num = 0;
// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     num += i; // adding up the if-case
//     console.log("3: " + num);
//   }
// }
// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("4: " + i);
//   }
// }
//---------------------------------------------------------------------------------------------------
/*Pay the employees today!
Imagine that you are currently the big boss of a company. 
It is the first day of the month and you want to pay your employees. 
In the company there are now working 72 employees.
The cashier/balance of your company now is 100.000$. 
You will use these to pay the salaries to your workers. 
Your company is comprised of:
1. 2 Data Scientists: 1 Data Analyst: earns 7.500$.
        1 Machine Learning Engineer: earns 10.000$.
2. 4 Frontend Developers: each earns 1.500$.
3. 4 Backend Developers: each earns 2.000$.
4. 2 FullStack developers: each earns 3.000$.
5. 50 workers with ops and general duties: each earns 1.000$.
6. 5 DevOps Engineers: each earns 5.000$.
8. 5 Project managers: each earns 4.000$.
Suppose you want to start paying them one by one and pay as many as you can. But there is an order. 
Everyone has an identifying number.
The Data Scientist come first (from 1 to 2).
Then the web devs (3 to 4, Full stack come first), 
(5 to 8, here come the Backend Devs), then the Frontend Devs.
Then the normal workers. 
Then DevOps EngineersProject Managers last.
CONSOLE LOG
1.Print a message to the console after the program to know exactly how many people have not received their payment yet, in order to keep track on the amount of people who are waiting for the salaries. 
2.Additionally print how much money is left in the balance after the payment.*/
// let employees = 72;
// let i = 1;
// let balance = 100000;
// let usedSalaries = 0;
// for (i = 1; i < employees; i++) {
//   if (i === 1 && balance >= 10000) {
//     balance -= 10000;
//     usedSalaries += 10000;
//   } else if (i === 2 && balance >= 7500) {
//     balance -= 7500;
//     usedSalaries += 7500;
//   } else if (i >= 3 && i <= 4 && balance >= 3000) {
//     balance -= 3000;
//     usedSalaries += 3000;
//   } else if (i >= 5 && i <= 8 && balance >= 2000) {
//     balance -= 2000;
//     usedSalaries += 2000;
//   } else if (i >= 9 && i <= 12 && balance >= 1500) {
//     balance -= 1500;
//     usedSalaries += 1500;
//   } else if (i >= 13 && i <= 62 && balance >= 1000) {
//     balance -= 1000;
//     usedSalaries += 1000;
//   } else if (i >= 63 && i <= 67 && balance >= 5000) {
//     balance -= 5000;
//     usedSalaries += 5000;
//   } else if (i >= 68 && i <= 72 && balance >= 4000) {
//     balance -= 4000;
//     usedSalaries += 4000;
//   } else {
//     break;
//   }
// }
// console.log("5: ", employees - i, balance);
// let salary = 10000;
// let employees = 72;
// let i = 1;
// let balance = 100000;
// let usedSalaries = 0;
// for (i = 1; i < employees && balance > salary; i++) {
//   if (i === 1) {
//     balance -= 10000;
//     usedSalaries += 10000;
//     salary = 10000;
//   } else if (i === 2) {
//     balance -= 7500;
//     usedSalaries += 7500;
//     salary = 7500;
//   } else if (i >= 3 && i <= 4) {
//     balance -= 3000;
//     usedSalaries += 3000;
//     salary = 3000;
//   } else if (i >= 5 && i <= 8) {
//     balance -= 2000;
//     usedSalaries += 2000;
//     salary = 2000;
//   } else if (i >= 9 && i <= 12) {
//     balance -= 1500;
//     usedSalaries += 1500;
//     salary = 1500;
//   } else if (i >= 13 && i <= 62) {
//     balance -= 1000;
//     usedSalaries += 1000;
//     salary = 1000;
//   } else if (i >= 63 && i <= 67) {
//     balance -= 5000;
//     usedSalaries += 5000;
//     salary = 5000;
//   } else if (i >= 68 && i <= 72) {
//     balance -= 4000;
//     usedSalaries += 4000;
//     salary = 4000;
//   } else {
//     break;
//   }
// }
// console.log("6: ", employees - i, balance);
//------------------------------------------------------------------
/* Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").*/
// let multipl = 9;
// let i = 0;
// let result;
// for (i = 0; i <= 10; i++) {
//   result = multipl * i;
//   console.log("7: " + multipl + " * " + i + " = " + result);
// }
//-------------------------------------------------------------------
/* Write a program to check whether a word is a palindrome or not.
Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat */
let poly = "Madam".toUpperCase();
let bool;
for (let i = 0; i < poly.length; i++) {
  if (poly[i] !== poly[poly.length - i - 1]) {
    bool = false;
  } else {
    bool = true;
  }
}
console.log(bool);
// //------------------------------------------------------------------
/*The clothing sales problemImagine that you work in sales at a clothing shop and you are responsible for selling 3 products:
A t-shirt that costs 10$A pair of Jeans that costs 30$and a Jacket that costs 150$.
You have noticed a paradox pattern. 
Every three customers, the new customer buys the same things.
For example the first customer buys 3 t-shirts.
The second customer buys 2 Jeans.
The third customer buys a jacket.
And then again the same from the beginning.
The fourth customer buys again 3 t-shirts.
The fifth customer buys again 2 jeans.
The sixth customer buys again one jacket.
That continues until the end of the day.
Find out how much money your cashier has if the initial 
cashier was already at 150$ and the total number of 
customers at the end of the day was 78.*/
let cashierBeg = 150;
let customer1 = 30;
let customer2 = 60;
let customer3 = 150;
let i = 0;
let customerTotal = 78;
for (i = 1; i <= 26; i++) {
  cashierBeg += customer1 + customer2 + customer3;
}
console.log(cashierBeg);
//OR
let cash = 150;
let prices = [10, 30, 150];
let customers = 78;
let items = [3, 2, 1];
for (let y = 0; y < 3; y++) {
  for (let x = 1; x <= 26; x++) {
    cash += prices[y] * items[y];
  }
}
console.log(cash);
// Try also with a for loop and switch
// :grin: