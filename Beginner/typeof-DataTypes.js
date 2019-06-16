// Integers and floats are two different kinds of numerical data. 
// An integer (more commonly called an int) is a number without a decimal point. 
// A float is a floating-point number, which means it is a number that has a decimal place. 
// Floats are used when more precision is needed.
// check with the modulo if the remainer is equal to 0 

// Number()	Returns a number, converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns an integer

// when devided by 1 to know if it`s an integer or float 
let length = 16.78; //number/ float - long number with dot(the point is floating)//
console.log("0: "+length%1===0);
let lastName = "Johnson"; //string//
let car = ""; //string//
let isOpen = true; //boolean//
console.log("1: "+typeof length+ typeof lastName+ typeof car+ typeof isOpen);

let ageMark = "44";
let ageJohn = 30;
console.log("2: "+typeof ageMark+ typeof ageJohn);

let older = true;
let ages = ageJohn > ageMark ? older : false;
console.log("3: "+ages);

let x;
console.log("4: "+typeof x);
x = "yelp";
console.log("5: "+typeof x);
console.log("6: "+x[x.length-1]);
console.log("7: "+x.length+ typeof x.length);

let a = "5";
let b = "5";
let c = "15";
console.log("8: "+a == b, a == c, typeof (b == c));

//9. What is the type of Infinity? Comment your answer. Print the type of infinity to the console.//

console.log("8: "+typeof Infinity);
// Jede Division einer Zahl durch Infinity ergibt 0

//10. Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".//

let aVariable = "five hundred";
console.log("9: "+isNaN(aVariable));

//11. Print the data type of isNaN(variable) to the console.//

console.log("10: "+typeof isNaN(aVariable));

// typeof primitive types:
// string
// number
// boolean
// undefined

// type of Complex Data types:
// typeof types:
// function
// object
