// OOP INTRUCTION - Object-oriented programming

// const person = {
//   name: "Vassia",
//   age: 33
// };

// console.log(person["name"]);

// PERSON CONSTRUCTOR
// CONSTRUCTOR FUNCTION
// function Person(name) {
//   this.name = name;
// }

// const leonard = new Person("Leonard");
// const arturo = new Person("Arturo");

// console.log(arturo);

//=======================================

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   this.getFullName = function() {
//     return `${this.name} ${this.surname}`;
//   };
// }

// const nizar = new Person("Nizar", "Alawar");
// console.log(nizar.getFullName());

function Person(name, surname, dob) {
  this.name = name;
  this.surname = surname;
  this.birthday = new Date(dob);
  this.getFullName = function() {
    return `${this.name} ${this.surname}`;
  };
  this.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
  };
}

const nancy = new Person("Nancy", "Drew", "10/11/1985");
const katrin = new Person("Katrin", "Salac", "12/30/1985 16:30:00 GMT");
console.log(katrin);

// ARRAYS

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr2);
