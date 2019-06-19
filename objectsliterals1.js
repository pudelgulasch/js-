// Objects Literals

const person = {
  //   key: "value",
  name: "Katrin",
  age: 32,
  nationality: "German",
  address: {
    street: "Street 12",
    plz: 10273,
    city: "Berlin"
  },
  lovesMusic: true
};

let myAge = person.age;
console.log(myAge);
console.log(person.address.plz);
console.log(`My name is ${person.name} and I am ${person.age - 10} years old.`);

person.address.city = "Amsterdam";
person.age = 99;
console.log(
  `My name is ${person.name} and I am ${person.age} years old  and I live in ${
    person.address.city
  }.`
);
const movies = {
  title: "Amadeus",
  director: "Milos Foreman",
  releaseYear: 1984
};
console.log(`${movies.title} directed by ${movies.director}`);
movies.title = "Man On The Moon";
movies.releaseYear = 2002;
// console.log(
//   `${movies.title} directed by ${movies.director} released in ${releaseYear}`;
// );

const movieList = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  yearRelease: 1972,
  basedOnBook: true
};

const movieList2 = {
  title: "Mama Roma",
  director: "Pier Paolo Passolini",
  yearRelease: 1962
};

const getMovies = function(movie) {
  console.log(`${movie.title} directed by ${movie.director}`);
};

getMovies(movieList);
getMovies(movieList2);

// returns the the keys of an objects as an array
console.log(Object.keys(movieList2));

// JS DATA TYPES

// --objects (as complex as you want)
// function, arrays {}

// -- PRIMITIVES
//     - number
//     - string
//     - boolean
//     - undefined
//     - null -null(nothing)
//     - Symbol

// if its not a primitives, its an OBJECT
// PRIMITIVES are the building blocks of objects

// // COMPARISONS

// console.log(true === false); //false
// console.log(1 === 1); //true
// console.log(1001 === 1001); //true

// Primitives - if it looks the same, its probably the same

// console.log({} === {}); //false

// when you create an object, JS saves it at a unique location in memorys
// when you compare primitives, JS only compares the value
// comparing OBJECTS, we refer to REFERENCIES - JS only cares about the reference in memory

const myHouse = {};
console.log(myHouse === myHouse);
