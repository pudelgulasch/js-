let two = 2;
let one = two.toString();
if (one.includes(".") == true) {
  console.log("1: triple espresso");
} else if (one.includes(".") == false) {
  console.log("1: coffee");
}

console.log("2: "+one);

let num = 2.78;
let ans = num % 1 === 0 ? "coffee" : "triple espresso";
console.log("3: "+ans);

if (num % 2 < 1 && num % 2 != 0) {
  console.log("4: triple espresso");
} else {
  console.log("4: espresso");
}

if (num === Math.floor(num)) {
  console.log("5: coffee");
} else {
  console.log("5: triple espresso");
}

// Pitfalls
// e number

console.log("6: "+4e2); // =400, 2 stellen hinter nummer welche nicht definiert sind daher 0 ?

const sum = 23 / 0;
console.log("7: "+sum);

console.log("7: "+typeof Infinity); 

// rounding possible mistakes due to binary calculation

let sum1 = (0.1 + 0.2).toFixed(2);
sum2 = parseFloat(sum1);
console.log("8: "+sum1);
console.log("9: "+sum2);

// NaN
let val = 0 / 0;
console.log("10: "+val);

// Hoisting first console than declaring
console.log("11: "+foo);

var foo = "hello world";

// var, let, const
// const a = "foo";
// a = "bar";

// Global Scope(Static Scope) cannot see the block scope
// Block scope can see the gobal scope

let x = 1;

{
  let x = 2;
  console.log("12: "+x + "block");
}

console.log("13: "+x + "Global");

// let ran = Math.random;
// let r = Math.floor(Math.random());

// let val1 = Math.floor(Math.random() * 10 + 1);

let r = Math.floor(Math.random() * 5 + 1);
console.log("13: "+r);

const val1 = "You are number one!";
if (r === 1) {
  console.log("14: "+val1);
} else if (r === 2) {
  console.log("14: Number two");
} else if (r === 3) {
  console.log("14: Number three");
} else if (r === 4) {
  console.log("14: Number four");
} else console.log("14: Number five");

const mixed = [true, "foo", 223, NaN];

console.log("15: "+mixed);

const cities = ["Rome", "Amsterdam", "Floriapa", "Aleppo", "Kerkira"];

// console.log(cities.length());

// console.log(cities[3]);

console.log(cities[cities.length - 1]);

// first and second last
const toDo = [
  "shop groceries",
  "feeding goats",
  "relax",
  "doing homework",
  "sleeping"
];

toDo[1] = "do nothing";
// change second item
toDo.push("do something");
// add item at the end
toDo.shift();
// remove first item
console.log(toDo);

// array methods
// add item to end

cities.push("Utrecht");

//remove last item //no args
cities.pop();

// remove first item
cities.shift();

// add item to beginning
cities.unshift("Darsalaam");

// swap with bracket notation
cities[2] = "Skagen";

console.log(cities);

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
euroCities[0] = "Berlin";
console.log(euroCities.length);
euroCities.pop();
euroCities.push("Budapest");
euroCities[2] = "Athens";
euroCities.reverse();
console.log(euroCities);
