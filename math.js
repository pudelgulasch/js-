let num1 = 50;
let num2 = 100;

let val;

val = Math.PI.toFixed(2);
// Pi Number till Index 2
val = Math.E;

val = Math.round(2.4999999);
// rounds to the nearest integer
val = Math.ceil(198.0001);
// aufrunden, goes to the ceiling
val = Math.floor(20.99999);
// abrunden, goes to the floor
val = Math.round(4.99999).toFixed(2);
val = Math.sqrt(64);
// Quadratwurzel
val = Math.abs(-199);
// absolute number, returns a positive number
val = Math.pow(10, 9);
// multiply by
val = Math.min(13, 200, 3, 28726, -1, -Infinity);
// number with the lowest value
val = Math.max(299, 1, 98, 23, 874321);
val = Math.random();
// random number between 0 (inclusive), and 1 (exclusive)
val = Math.floor(Math.random() * 10 + 1);
// creates random number between 1 and 10 than rounds it to whole number with floor +1 so you don get 0
// color picker
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
console.log(`r = ${r} - g = ${g} - b = ${b}`);
console.log(val);
console.log(Math.random());
console.log(Math.floor(2828.4));
