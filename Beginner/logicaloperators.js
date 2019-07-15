// increment +1, decrement -1 /Variablenänderung bleibt bestehen bei Weiterverwendug

let x = 30;
let y = 10;
console.log(++x, --y);

//the AND operator (&&) returns TRUE if both expressions are TRUE, otherwise FALSE

let val;
val = x > 10 && y < 200;

// the OR operator(||) returns TRUE if one or both expessions are TRUE, false otherwise

val = x == 10 || y == 5;
val = x == 8 || y == 7;

// The NOT operator returns FALSE for TRUE statements and FALSE statements

val = x != 30;
val = !(x < 100);
console.log(val);
