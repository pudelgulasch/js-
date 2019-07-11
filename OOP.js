// var Animal = function(name, type) {
//   (this.kind = name), (this.breed = type);
// };

// var playground = {
//   animals: [],

//   addAnimal(animal) {
//     this.animals.push(animal);
//   },

//   listAnimalKind(kind) {
//     this.animals.forEach(function(animal) {
//       if (animal.kind == kind) {
//         console.log(animal.breed);
//       }
//     });
//   }
// };

// playground.addAnimal(new Animal("dog", "Labrador"));
// playground.addAnimal(new Animal("dog", "Goldren Retriever"));
// playground.addAnimal(new Animal("rabbit", "Angola"));
// playground.listAnimalKind("dog");

// var Dream = function(day, mood) {
//   this.day = day;
//   this.mood = mood;
// };

// var DreamFactory = {
//   dreams: [],

//   createDream: function(day, mood) {
//     return new Dream(day, mood);
//   },

//   addDream: function(dream) {
//     this.dreams.push(dream);
//   },

//   listDreams() {
//     this.dreams.forEach(function(dream) {
//       console.log("You dreamed a " + dream.mood + " dream on " + dream.day);
//     });
//   }
// };

// DreamFactory.addDream(DreamFactory.createDream("Sunday", "dark"));
// DreamFactory.addDream(DreamFactory.createDream("Monday", "funny"));

// DreamFactory.listDreams();

// Q3. javascript-constructors-1
// Create a constructor function called Hero that will accept a variable name as an argument.
// Use the Hero constructor to create an object myHero with the name 'Link'.

function Hero(name) {
  this.name = Link;
}
myHero = Hero(myHero);
console.log(myHero);
