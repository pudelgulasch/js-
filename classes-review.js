// Object constructors ae useful when we want to create mutiple objects that share similar
// properties or methods

class Movie {
  constructor(title, year, director, genre, isSeen) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.genre = genre;
    this.isSeen = false; //or isSeen or true
  }
  canRecommend() {
    // to ass a method
    if (this.isSeen === true) {
      return `${this.title} is a dope film!`;
    } else {
      return `Why are you asking me? I've have not seen ${this.title}`;
    }
  }
}

console.log(typeof Movie);

const firstMovie = new Movie(
  "John Wick",
  2013,
  "Chad Stahelski",
  "action",
  true
);
// console.log(firstMovie);
console.log(firstMovie.canRecommend());

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs at ${this.speed} km/h `);
  }
}

// ###############################################################################################

// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }

// ###############################################################################################

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} hides!`);
//   }
// }

// let rabbit1 = new Rabbit("Spotted Rabbit");
// rabbit1.run(5);
// rabbit1.hide();

// // ###############################################################################################

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name); // gets it from animal
//     this.earLength = ear.Length;
//   }
// }

// let newRabbit = new Rabbit("Sandy", 20);
// newRabbit.run(12);
// newRabbit.hide();
// console.log(
//   `${newRabbit.name} has ears that are ${newRabbit.earLength} cm long.`
// );

class Day {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  daysInMonth() {
    return new Date(this.year, this.month, 0).getDate();
  }
}

const day1 = new Day(2019, 14); // new Day starts with 1 so if we type 0 its jumps back, with other
// methods it is zero
console.log(day1.daysInMonth());

// FOR IN LOOPS

const euroCapitals = {
  Germany: "Berlin",
  Italy: "Rome",
  Denmark: "Copenhagen",
  Sweden: "Stockholm"
};

for (const prop in euroCapitals) {
  console.log(`The capital of ${prop} is ${euroCapitals[prop]}.`);
}

const obj2 = { one: 1, two: 2, three: 3 };
let total = 0;

for (const prop in obj2) {
  total += obj2[prop];
}
console.log(total);
