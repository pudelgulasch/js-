const firstName = "Horst";
const lastName = "Schuhmacher";
const age = 20;
let str = "Welcome to dci";

let val;
// Concatination
val = firstName + lastName;
// if you only what to print the first Name
(val = firstName), lastName; //Horst

//Template Strings or Template Literals
val = `My uncle is ${firstName}, last name ${lastName} and I am ${age} years old.`;

//Append
val = "Hildegard";
val += "Smith"; //HildegardSmith
//length
val = firstName.length; //5

//concat
val = firstName.concat("", lastName); //Horst Schuhmacher

//Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// indexOf
val = firstName.indexOf("H"); //0
val = lastName.lastIndexOf("h"); //8

//charAT(
val = firstName.charAt(0); //H
val = firstName[0]; //H

//get last charakter
val = firstName.charAt(firstName.length - 1); //t

//substring() wraps around character
val = firstName.substring(4, 1); //ors

//slice - used more of arrays
val = firstName.slice(0, 4); //Hors

//replace()
val = str.replace("dci", "the jungle"); //Welcome to the jungle

//match()
val = str.match("zxh"); //null

//includes() / returns boolean
val = str.includes("e"); //true
// console.log(val);
