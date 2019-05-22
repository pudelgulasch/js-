let two = 2;
let one = two.toString();
if (one.includes(".") == true) {
  console.log("triple espresso");
} else if (one.includes(".") == false) {
  console.log("coffee");
}

console.log(one);

let num = 2.78;
let ans = num % 1 === 0 ? "coffee" : "triple espresso";
console.log(ans);

if (num % 2 < 1 && num % 2 != 0) {
  console.log("triple espresso");
} else {
  console.log("espresso");
}

if (num === Math.floor(num)) {
  console.log("coffee");
} else {
  console.log("triple espresso");
}

// Pitfalls
// e number

console.log(4e2);

const sum = 23 / 0;
console.log(typeof Infinity);

// rounding possible mistakes due to binary calculation

let sum1 = (0.1 + 0.2).toFixed(2);
sum2 = parseFloat(sum1);
console.log(sum1);
console.log(sum2);

// NaN
let val = 0 / 0;
console.log(val);

// Hoisting first console than declaring
console.log(foo);

var foo = "hello world";

// var, let, const
// const a = "foo";
// a = "bar";

// Global Scope(Static Scope) cannot see the block scope
// Block scope can see the gobal scope

let x = 1;

{
  let x = 2;
  console.log(x + "block");
}

console.log(x + "Global");

// let ran = Math.random;
// let r = Math.floor(Math.random());

// let val1 = Math.floor(Math.random() * 10 + 1);

let r = Math.floor(Math.random() * 5 + 1);

const val1 = "You are number one!";
if (r === 1) {
  console.log(val1);
} else if (r === 2) {
  console.log("Number two");
} else if (r === 3) {
  console.log("Number three");
} else if (r === 4) {
  console.log("Number four");
} else console.log("Number five");

const mixed = [true, "foo", 223, NaN];

console.log(mixed);

const cities = ["Rome", "Amsterdam", "Floriapa", "Aleppo", "Kerkira"];

// console.log(cities.length());

// console.log(cities[1,2]+cities[]);

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
