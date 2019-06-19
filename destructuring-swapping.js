// The destructuring assignment syntax is a JavaScript expression that makes it possible
// to unpack values from arrays or properties from objects into distint variables.

//REST IN ARRAY DESTRUCTURING

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(rest);

// const x = [1, 2, 3, 4, 5];
// let [y, z, w] = x;
// console.log(y); //1
// console.log(z); //2
// console.log(w); //3

// const foo = ["one", "two", "three"];
// let [one, two, three] = foo;
// console.log(one); //one
// console.log(two); //two
// console.log(three); //three

//ASSIGNMENT SEPERATE FROM DECLARATION
// let a, b;
// [a, b] = [1, 2];
// console.log(a);
// console.log(b);

//DEFAULT VALUES
// let a, b;
// [a = 5, b = 7] = [, 1];
// console.log(a); //5
// console.log(b); //1

//SWAPPING VARIABLES
// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// console.log(a); //a
// console.log(b); //b

//ASSIGNING THE REST OF AN ARRAY
// const [a, ...b] = [1, 2, 3];
// console.log(a);
// console.log(b);

//OBJECT DESTRUCTION
// const lunch = {
//   Adrian: "mineral water",
//   Nizar: "Hummus",
//   Richard: "Kartoffelsalat"
// };
// const { Adrain, Nizar, Richard } = lunch;
// console.log(Adrian);
// console.log(Richard, Nizar);

// const o = { p: 42, q: true };
// let { p, q } = o;
// console.log(p);
// console.log(q);

//ASSIGMENT WITHOUT DECLARATION
//A variable can be assignment its value with destructing seperate from its declaration
// let a, b;
// ({ a, b } = { a: 1, b: 2 });
// console.log(a);
// console.log(b);

//ASSIGNING TO NEW NAMES
//A property can be unpacked from an object and assigned to a variable with a different name than the object property

// const o = { p: 42, q: false };
// const { p: foo, q: baz } = o;
// console.log(foo); //42
// console.log(baz); //false

//COMBINED ARRAY AND OBJECT DESTRUCTURING

// const probs = [
//   { id: 1, name: "Fizz" },
//   { id: 2, name: "Buzz" },
//   { id: 3, name: "FizzBuzz" }
// ];
// const [, { name }] = probs;
// console.log(name);
