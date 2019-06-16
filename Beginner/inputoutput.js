let one = "FANTASTIC";
let two = "BLOOM";
let three = "IMPORTENT";
let four = "HOWDY";

console.log(one.charAt(8));

if (one.charAt(8) != "") {
  console.log("This string has at least 8 charakters.");
} else {
  console.log("This string is shorter than 8 charakters.");
}

let sum = "257";
console.log(typeof sum);
let sum2 = parseInt(sum);
console.log(sum2);

let first = 21;
// true
let second = 30;
// true
let third = 11;
// false
let fo = 67;
// false

if (first >= 20 && first <= 35) {
  console.log("This is in the range 20-35.");
} else {
  console.log("This is out of range.");
}

if (third >= 20 && third <= 35) {
  console.log("This is in the range 20-35.");
} else {
  console.log("This is out of range.");
}

if (third % 3 == 0) {
  console.log("Multiple of 3.");
} else {
  console.log("Not a multiple of 3.");
}

let s1 = "HOWDOYOUDO?";
let s2 = "MY NAME IS BILL";
let s3 = "CANIHAVEALIGHT?";
let s4 = "THIS IS BORING!";

// console.log(s2.includes(" "));

if (s2.includes(" ") === true) {
  console.log("Yep!");
} else {
  console.log("Nope!");
}
