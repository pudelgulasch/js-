// Telephone country Problem
// Given that you have this data structure:

// Write an arrow function that accepts a string (a country code from the array above) and returns the country itself.
// Bonus: Try to accomplish this result without using any if statements, switch cases or ternary operators.
// You can use of course loops and any known array function. Maybe you will find the 'find' array method documentation
// below very useful in order to achieve this.In a nutshell the Array's find method accepts a function
// (like map, forEach, filter or reduce)and loops through each element until it finds the first match given the specified
// condition inside the testing function. If it finds it returns the element itself, otherwise returns undefined. Find more
// about this method by clicking the link below.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

let telephoneData = [
  { countryCode: "0030", country: "Greece" },
  { countryCode: "0039", country: "Italy" },
  { countryCode: "00972", country: "Israel" },
  { countryCode: "0007", country: "Russia" },
  { countryCode: "0044", country: "United Kingdom" },
  { countryCode: "0001", country: "United States" },
  { countryCode: "00963", country: "Syria" },
  { countryCode: "0029", country: "Belgium" },
  { countryCode: "0031", country: "Holland" },
  { countryCode: "0049", country: "Germany" }
];

// console.log(Object.keys(telephoneData));
// console.log(Object.values(telephoneData));

// let myCountry = telephoneData.find(x => x.countryCode === "0030");
// console.log(myCountry.country);

// *****************************************************

// const findCountryByCode = code => {
//   const foundCountry = telephoneData.find(countryInfo => countryInfo.countryCode === code);
//   if (foundCountry) {
//     return foundCountry.country;
//   } else {
//     return 'Country with the specific code was not found!';
//   }
// }
// *****************************************************

// const findCountryByCode = code => telephoneData.find(obj => obj.countryCode === code).country;

// console.log(findCountryByCode("0049"));

// //ES5
// function whichCountry5(code) {
//   return telephoneData.find(function(obj) {
//     return obj.countryCode === code;
//   }).country;
// }
// console.log(whichCountry5("0031"));
// //ES6
// const whichCountry6 = code =>
//   telephoneData.find(obj => obj.countryCode === code).country;
// console.log(whichCountry6("0031"));
