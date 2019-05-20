// increment +1, decrement -1 /Variablenänderung bleibt bestehen bei Weiterverwendug

let x = 30;
let y = 10;
// console.log(++x, --y);

//the AND operator (&&) returns TRUE if both expressions are TRUE, otherwise FALSE

// let val;
// val = x > 10 && y < 200;

// the OR operator(||) returns TRUE if one or both expessions are TRUE, false otherwise

// val = x == 10 || y == 5;
// val = x == 8 || y == 7;

// The NOT operator returns FALSE for TRUE statements and FALSE statments

// val = x != 30;
// val = !(x < 100);
// console.log(val);

//1. Add x and y, and print the result to the console.

// console.log(x + y);

//2. Subtract y from x, and print the result to the console. Then, subtract x from y and print the result to the console.

// console.log(y - x, x - y);

//3. Multiply x and y, and print the result to the console.

// console.log(x * y);

//4. Divide x and y, and print the result to the console.

// console.log(x / y);

//5. Declare another variable "z" with the value "10". Multiply x and y. Then, divide the result by z. Store the result in a new variable named "resultOne". Print "result" to the console.

let z = 10;
let resultOne = (x * y) / z;
let result = resultOne;
console.log(result);

//5. Declare two variables "a" with the value of 15 and "b" with the value of 9. Print the remainder when a is divided by b.

a = 15;
b = 9;
console.log(a % b);

//6. Declare another variable "c" with the value of 20. Add a and b, then multiply the result by c. Store the result in variable "resultTwo".  Print "resultTwo" to the console.

c = 20;
resultTwo = (c + a + b) * c;
console.log(resultTwo);

//7. Increment a. Print the result to the console.

console.log(++a);

//8. Decrement b. Print the result to the console.

console.log(--b);

//9. Subtract a from b and store this in a new variable "d". Add d and c. Print the result to the console.

let d = b - a;
console.log(d + c);

//10. Print the remainder when "resultOne" is divided by "resultTwo" to the console.

console.log(resultOne % resultTwo);

//1. Check whether x and y are equal.

console.log(x == y);

//2. Check whether x and y are **not** equal.

console.log(x !== y);

//3. Check whether x is greater than y.

console.log(x > y);

//4. Check whether x is less than or equal to y.

console.log(x <= y);

//5. Check whether y is greater than x.

console.log(y > x);

//6. Declare another variable "z" and give it a value of 5. Multiply z and x and, check whether this result is greater than z added to y.

z = 5;
let res = z * x;
console.log(res > z + y);

//7. Subtract z from x and check whether this result is less than y divided by z.

console.log(x - z < y / z);

//8. Check whether z, x and y are equal.

console.log((x == y) == z);

//9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.

console.log(x % z == y % z);

//10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true.

console.log(x + z == y - z);
