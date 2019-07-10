// 1. Create an object about a person that lives in your country for some years (unknown how many,
//     you define it) and holds the information below.

// Firstname, lastname, age, years of residence in your country, his own nationality, current profession
// and current salary.

// Then create a method that changes it's nationality to your country's nationality if the years of
// residence is greater or equal to 7.

// const anna = {
//   firstname: "Anna",
//   lastname: "Mueller",
//   age: 45,
//   yearsofresidence: 10,
//   nationality: "french",
//   currentprof: "Lawyer",
//   currentsal: 4000,
//   changeNationality: function(nationality) {
//     this.nationality = nationality;
//   }
// };

// anna.changeNationality(anna.yearsofresidence >= 7 ? "german" : "french");
// console.log("1: ", anna);

// 2. Create three objects for three people with the following info. Firstname, lastname, bank account
// (a number in us dollars) and country of residence.

// The bank account is going to be a number that the person has to his/her bank account in US dollars.

// Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.

// The persons are coming from Greece, Switzerland and Australia respectively.

// Create a function that creates a new property for each person that shows the bank account in his
// country's money.

// const peter = {
//   firstname: "Anna",
//   lastname: "Mueller",
//   bankaccountUs: -200,
//   countryOfResidence: "Greece",
//   createCurrency: function() {
//     peter.bankCountry = peter.bankaccountUs * 0.88;
//   }
// };
// const ines = {
//   firstname: "Ines",
//   lastname: "Mueller",
//   bankaccountUs: 5000,
//   countryOfResidence: "Switzerland",
//   createCurrency: function() {
//     ines.bankCountry = ines.bankaccountUs * 0.99;
//   }
// };
// const sascha = {
//   firstname: "Sascha",
//   lastname: "Mueller",
//   bankaccountUs: 100,
//   countryOfResidence: "Australia",
//   createCurrency: function() {
//     sascha.bankCountry = sascha.bankaccountUs * 1.43;
//   }
// };

// peter.createCurrency();
// ines.createCurrency();
// sascha.createCurrency();
// console.log(peter);
// console.log(ines);
// console.log(sascha);

// tigers inheritance
// class AllSpecies {
//   constructor(species, numOfEyes, numOfLegs, haveTail) {
//     this.species = species;
//     this.numOfEyes = numOfEyes;
//     this.numOfLegs = numOfLegs;
//     this.haveTail = haveTail;
//   }
// }

// class Tiger extends AllSpecies {
//   constructor(colorFur, eyeColor, region, eatMeat) {
//     super("Tiger", 2, 4, true);
//     this.colorFur = colorFur;
//     this.eyeColor = eyeColor;
//     this.region = region;
//     this.eatMeat = eatMeat;
//   }
// }

// class BengalTiger extends Tiger {
//   constructor(name, age, height, length, gender) {
//     super("orange-black", "brown", "India", true);
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.lentgh = length;
//     this.gender = gender;
//   }
// }

// class SiberianTiger extends Tiger {
//   constructor(name, age, height, length, gender) {
//     super("white-black", "blue", "Siberia", false);
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.length = length;
//     this.gender = gender;
//   }
// }

// let richardParker = new BengalTiger("Richard Parker", 15, 82, 226, "male");
// let nightKing = new SiberianTiger("Night King", 990, 88, 204, "female");
// // console.table(richardParker);
// console.table(nightKing);

// calculate average

class Person {
  constructor(firstName, lastName, html, css, js) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = { html: html, css: css, js: js };
  }

  calculateAverage() {
    let sum = 0,
      countSkills = 0;
    for (let i in this.skills) {
      countSkills++;
      sum += this.skills[i];
    }
    return (sum / countSkills).toFixed(2); // skills score += sum, then divided by 3
  }
}

const Sonja = new Person("Sonja", "Martinez", 92, 88, 65);
const Marcelo = new Person("Marcelo", "Mastroani", 88, 39, 81);
console.log(Sonja.calculateAverage());
console.log(Marcelo.calculateAverage());

let num1 = Sonja.calculateAverage();
let num2 = Marcelo.calculateAverage();
console.log((parseInt(num1) + parseInt(num2)) / 2);
