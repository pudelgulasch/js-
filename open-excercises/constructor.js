// Constructors
// 1. Hero
// Create a constructor function called Hero That will accept a variable name as an argument.
// Use the Hero constructor to create an object myHero with the name 'Link'.

// 2. Playlist
// Create a constructor function called Song. Song should take in two arguments, title and artist,
// which should both be added as properties when the Song constructor function is used. The Song function
// should also have a method called play on its prototype. When called, the play function should console.log
// the name of that specific song preceded by the word 'Playing:'.

// For example:

// let song1 = new Song('Time', 'Pink Floyd');
// let song2 = new Song('Sweet Life', 'Frank Ocean');
// let song3 = new Song('Intro', 'M83');
// let song4 = new Song('Bloom', 'ODESZA');
// let song5 = new Song('The Less I Know The Better', 'Tame Impala');

// song4.play(); //logs 'Playing: Bloom'
// song2.play(); //logs 'Playing: Sweet Life'
// song3.play(); //logs 'Playing: Intro'

// 3. Person
// Create a constructor function called Person That will accept the arguments name and occupation.
// Use Person.prototype to add a method whoAreYou that will return: My name is [the person's name]
// and I am a [the person's occupation].
// Use the person constructor to create an object person1 with the name Michaelangello and occupation
// Ninja.
// Use the whoAreYou method to log to the console person1's name and occupation.

// 4.
// Create a constructor function called arrayString that will take an array as an argument.
// This constructor will join the array to a single string, and store the string in a variable called str.
// For example, the following code:

// let joined = new arrayString(['c','a','t']);
// console.log(joined);
// // will log to the console:
// { str: 'cat' }
// 5. Calendar App
// As part of a calendar app, you will need to create an object that, for any given month, will store all
// the days in that month.

// Create a constructor called Day(year, month, day) that will be given a number each for the month, the
// day and the year.
// Create a function called getDaysinMonth(year, month) that will be given a number each for the month
// and the year. This function will return array of Day objects, which will be equal in length to the number
// of days in the given month. For example:

// let daysInJune2016 = getDaysinMonth(2016, 6);
// console.log(daysInJune2016)

// will log to the console:

// [ { month: 6, day: 1, year: 2016 },
//   { month: 6, day: 2, year: 2016 },
//   { month: 6, day: 3, year: 2016 },
//   // ...
//   // ...
//   // ...
//   { month: 6, day: 28, year: 2016 },
//   { month: 6, day: 29, year: 2016 },
//   { month: 6, day: 30, year: 2016 } ]
// hint: create a new Date object and use the getDate method to get the number of days in a given month.

class AttackSkill {
  constructor(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
}

class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  learnAttackSkill(skill) {
    this.skills.push(skill);
  }
  attack(num, pokemon) {
    if (this.skills[num].magic <= this.magic) {
      this.magic -= this.skills[num].magic;
      pokemon.health -= this.skills[num].damage;
      console.log(
        `${this.name} launched skill "${this.skills[num].name}" successfully!`
      );
      console.log(`${pokemon.name} got ${this.skills[num].damage} damage`);

      return this.skills[num];
    } else {
      console.log("Not enough magic");
    }
  }

  getMagic(num) {
    this.magic += num;
    console.log(`${this.name} magic-level is now ${this.magic}`);
  }
  showStatus() {
    console.log(`${this.name} Health: ${this.health}, Magic:${this.magic}`);
  }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(poisonSeed);
bulbasaur.learnAttackSkill(poisonSeed);

console.log(pikachu.skills);

pikachu.attack(1, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

function Pokemon(name, health, magic) {
  this.name = name;
  this.health = health;
  this.magic = magic;
  this.skills = [];
  this.learnAttackSkill = function(attack) {
    this.skills.push(attack);
  };
  this.showStatus = function() {
    console.log(
      `status: name: ${this.name}, health: ${this.health}, magic: ${this.magic}`
    );
  };
  this.attack = function(skillIndex, enemy) {
    if (this.magic <= this.skills[skillIndex].magic) {
      console.log(`Not enough magic, cannot attack!`);
      return;
    }
    if (this.skills[skillIndex].damage > enemy.health) {
      console.log(
        `${this.name} just launched "${
          this.skills[skillIndex].attack
        }" successfully! \n${enemy.name} is killed`
      );

      enemy.health -= this.skills[skillIndex].damage;
      this.magic -= this.skills[skillIndex].magic;
      return;
    }
    if (enemy.health <= 0) {
      console.log(`${enemy.name} is already dead`);
      return;
    }
    console.log(
      `${this.name} just launched "${
        this.skills[skillIndex].attack
      }" successfully! \n${enemy.name} took ${
        this.skills[skillIndex].damage
      } damage`
    );

    enemy.health -= this.skills[skillIndex].damage;
    this.magic -= this.skills[skillIndex].magic;
    return;
  };
  this.getMagic = function() {
    this.magic += 5;
    console.log(`${this.name} gained 5 magic. Total magic = ${this.magic}`);
  };
}

//attack skill
function AttackSkill(attack, damage, magic) {
  this.attack = attack;
  this.damage = damage;
  this.magic = magic;
}
// name, health, magic
let pikachu = new Pokemon("pikachu", 100, 80);
let bulbasaur = new Pokemon("bulbasaur", 75, 120);
// console.log(pikachu);

//attack, damage, magic needed
let lightning = new AttackSkill("lightning", 30, 20);
let beatUp = new AttackSkill("beat up", 25, 15);

pikachu.showStatus();
bulbasaur.showStatus();
console.log(`---------`);
pikachu.learnAttackSkill(lightning);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
console.log(`---------`);
bulbasaur.learnAttackSkill(beatUp);
bulbasaur.attack(0, pikachu);
bulbasaur.getMagic();
console.log(`---------`);
pikachu.showStatus();
bulbasaur.showStatus();
