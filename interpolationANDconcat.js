// String interpolation is a really useful programming language 
// feature that allows you to inject variables directly into a string. 
// Until the release of ES6, string interpolation was not available in JavaScript.


console.log("1:","this is an exercise in console logging");

let value = "This is the value.";
console.log("2:",value);

let firstName = "Lara";
let lastName = "Al HOSSNY";


let adressdata = ["Straße 12", " 16378 Paris", " Frankreich"];
//let adresse = adressdata.values();//
// string concatination with plus 
console.log("3: "+firstName+ " "+ lastName+ " hier wohne ich: "+adressdata.toString()+ ".");

let name = "John Smith";
let age = "43 years old";
let profession = "teacher";
let hometown = "Berlin";
// string concatination as a form of string interpolation
console.log("4: "+name+ " is a "+ age +" "+ profession+" who lives in "+ hometown+".");
//the current way of writing it-string interpolation with template-strings ans literals//
console.log(`5: ${name} is a ${age} ${profession} who lives in ${hometown}.`);