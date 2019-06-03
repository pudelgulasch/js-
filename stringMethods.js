const firstName = "Horst";
const lastName = "Schuhmacher";
const age = 20;
let str = "Welcome to dci";

let val;
// Concatination 
val = firstName + lastName;
console.log(val);
// if you only what to print the first Name
(val = firstName), lastName;

//Template Strings or Template Literals
val = `My uncle is ${firstName}, last name ${lastName} and I am ${age} years old.`;

//Append
val = "Hildegard";
val += "Smith";

//length
val = firstName.length;

//concat
val = firstName.concat("", lastName);

//Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// indexOf
val = firstName.indexOf("H");
val = lastName.lastIndexOf("h");

//charAT(
val = firstName.charAt(0);
val = firstName[0];

//get last charakter
val = firstName.charAt(firstName.length - 1);

//substring() wraps around character
val = firstName.substring(4, 1);

//slice - used more of arrays
val = firstName.slice(0, 4);

//replace()

val = str.replace("dci", "the jungle");

//match()
val = str.match("zxh");

//includes() / returns boolean
val = str.includes("e");

