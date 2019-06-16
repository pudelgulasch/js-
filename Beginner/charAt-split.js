let city = "Amsterdam";
console.log("1: "+city);
console.log("2: "+city.charAt(1)+ city.charAt(5));

let name = "Berta";
let age = "1";
let year = "2018";
console.log("3: "+name+ " is "+ age+ " in "+ year);

let isMarried = false;
console.log("4: "+name+ " is married: "+ isMarried);
let status = (name = isMarried ? true : false);
console.log("5: "+status);

let programmingLanguage = "Java Script";
let isFun = true;
console.log("6: "+programmingLanguage+ " is fun: "+ isFun + ".");

console.log("7: "+programmingLanguage.charAt(0), programmingLanguage.charAt(4));

console.log("8: "+programmingLanguage[0], programmingLanguage[4]);
    
console.log("9: "+programmingLanguage.length);
// programminglanguage.split("") to get the Bits, String Indexes get read like an array //
console.log("10: "+programmingLanguage.split(' '));
let split= programmingLanguage.split(' ');
console.log(split[1]);
console.log(split[1][split[1].length-1]);