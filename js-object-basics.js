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

const peter = {
  firstname: "Anna",
  lastname: "Mueller",
  bankaccountUs: -200,
  countryOfResidence: "Greece",
  createCurrency: function() {
    peter.bankCountry = peter.bankaccountUs * 0.88;
  }
};
const ines = {
  firstname: "Ines",
  lastname: "Mueller",
  bankaccountUs: 5000,
  countryOfResidence: "Switzerland",
  createCurrency: function() {
    ines.bankCountry = ines.bankaccountUs * 2.4;
  }
};
const sascha = {
  firstname: "Sascha",
  lastname: "Mueller",
  bankaccountUs: 100,
  countryOfResidence: "Australia",
  createCurrency: function() {
    sascha.bankCountry = sascha.bankaccountUs * 5.4;
  }
};

peter.createCurrency();
ines.createCurrency();
sascha.createCurrency();
console.log(peter);
console.log(ines);
console.log(sascha);
