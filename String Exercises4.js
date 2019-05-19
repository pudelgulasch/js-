// #String Exercises

// These exercises are aimed at making you more familiar with strings, namely string methods as well as string interpolation. 
// inpolation adding a value inside a string `#{string}, value`
// Print your results of each exercise to the console. Use the terminal to view your results. 

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let one="I can walk in the park all day!"
console.log(one.substr(18,4));
console.log(one.slice(18,22));
// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
let two="JavaScript";
console.log(two.substring(3,6));
// 3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let three="Hello World";
console.log(three.toLocaleUpperCase());
// 4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let four="Hello Earthling";
console.log(four.toLocaleLowerCase());
// 5. Check if the sentence "nice shoes" contains the letter l or n. 
console.log("nice shoes".includes("l"),"nice shoes".includes("n"));
// 6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
let six=two.substr(0,1)+two+two.substr(0,1);
console.log(six);
// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let seven=two.substr(-3,3)+two+two.substr(-3,3);
console.log(seven);
// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
let eight="KaffeeJava";
console.log(eight.toUpperCase(), eight.includes("Java"));
// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
let nine=two.slice(9,10)+two.slice(1,9)+two.slice(0,1);
console.log(nine);
// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 
let firstName="Katrin";
let myCity="Berlin";
let profession="student";
console.log("Hej, my name is",`${firstName}`+",", "I live in",`${myCity}`, "and Iam a",`${profession}`, "at DCI.");
// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let eleven="the quick brown fox";
console.log(eleven.substring(0, 1).toUpperCase() + eleven.substring(1));
