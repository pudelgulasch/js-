let length = 16.78; //number/ float - long number with dot(the point is floating)//
let lastName = "Johnson"; //string//
let car = ""; //string//
let isOpen = true; //boolean//
console.log(typeof length, typeof lastName, typeof car, typeof isOpen);

let ageMark = "20";
let ageJohn = 30;
console.log(typeof ageMark, typeof ageJohn);

let older = true;
let ages = ageJohn > ageMark ? older : false;
console.log(ages);

let x;
console.log(typeof x);
x = "yelp";
console.log(typeof x);
console.log(x[x.length - 1]);
console.log(x.length, typeof x.length);

let a = "5";
let b = "5";
let c = "15";
console.log(a == b, a == c, typeof (b == c));

//9. What is the type of Infinity? Comment your answer. Print the type of infinity to the console.//

console.log(typeof Infinity);

//10. Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".//

let aVariable = "five hundred";
console.log(isNaN(aVariable));

//11. Print the data type of isNaN(variable) to the console.//

console.log(typeof isNaN(aVariable));
