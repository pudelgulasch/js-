let money = {
  100: 0,
  50: 0,
  20: 0,
  10: 0,
  5: 0,
  2: 0,
  1: 0,
  0.5: 0,
  0.2: 0,
  0.1: 0,
  0.05: 0,
  0.02: 0,
  0.01: 0
};

class Change {
  constructor(price, moneyTaken, money) {
    this.price = price;
    this.moneyTaken = moneyTaken;
    this.money = money;
    this.rest = moneyTaken - price;
  }
  coins() {
    for (let i in money) {
    }
    console.log("2: ", this.rest);
  }
}
let newBuy = new Change(5, 20, money);
newBuy.coins();

// let numToBeMultiplied = 5;
// let i = 1; // counter
// while (i <= 10) {
//   let sum = i * numToBeMultiplied;
//   console.log(sum);
//   i++;
// }

// FOR IN LOOPS

const euroCapitals = {
  Germany: "Berlin",
  Italy: "Rome",
  Denmark: "Copenhagen",
  Sweden: "Stockholm"
};

for (const prop in euroCapitals) {
  console.log(`The capital of ${prop} is ${euroCapitals[prop]}.`);
}

const obj2 = { one: 1, two: 2, three: 3 };
let total = 0;

for (const prop in obj2) {
  total += obj2[prop];
}
console.log(total);
