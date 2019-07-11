// let pi = 3.14159;

// pi.toFixed(10000);
// console.log(pi);
// RangeError: toFixed() digits argument must be between 0 and 100

// function foo() {
//   bar++;
// }
// console.log(foo());
// ReferenceError: bar is not defined

// if (foo){
// SyntaxError: Unexpected token

// let foo = {};
// foo.bar();
// TypeError: foo.bar is not a function

// decodeURIComponent("%");
// URIError: URI malformed

// Eval Error thrown when the eval() function is improperly used - dangerous!!!
// its passes with privileges of the caller

// try {
//   // attempt to execute this code
// } catch (exception) {
//   // this code handles exeptions
// } finally {
//   // this code always gets executed
// }
// gets executed when an error ocurs

// throw <error object>

// TRY lets us test for errors and CATCH lets us handle those errors

// try {
//   myFunc(); // ReferenceError: myFunc is not defined
// } catch (e) {
//   console.log(e);
// }
// console.log("Script continues");
// to catch the error
// try {
//   myFunc(); // ReferenceError: myFunc is not defined
// } catch (e) {
//   console.log(e.name);
// } finally {
//   console.log("This will run no matter what!");
// }
// console.log("Script continues");

// Type error

// try {
//   null.myFunc();
// } catch (e) {
//   console.log(`${e.name}-not gonna work!`);
// }
// console.log("Programm continues...");

// const user = { email: "maxmustermann@outlook.de", name: "Max Mustermann" };

// // if (!user.name) {
// //   throw "User has no name!";
// // }

// try {
//   if (!user.name) {
//     // needs condition to catch error
//     throw new SyntaxError("User has no name");
//   }
// } catch (e) {
//   console.log(`User error:${e.message}`);
// } finally {
//   console.log("FINALLY is running");
// }

// console.log("Programm continues!");

// const tipCalc = amount => {
//   return amount * 0.15;
// };

// const result = tipCalc(20);
// console.log(result);

// const tipCalc = amount => {
//   if (typeof amount === "number") {
//     return amount * 0.15;
//   } else {
//     throw new Error("Input must be a number");
//   }
// };
// // const result = tipCalc("true");
// // console.log(result);

// try {
//   const result = tipCalc("blue");
//   console.log(result);
// } catch (e) {
//   console.log(e.message);
// }
