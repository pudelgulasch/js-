// classes

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }
//   greeting() {
//     return `Yoooo ${this.firstName} ${this.lastName}`;
//   }
//   calcAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return ageDate.getUTCFullYear() - 1970;
//   }
// }

// const saori = new Person("Saori", "Sometami", "12/9/1988");

// console.log(saori.greeting());

// console.log(saori.calcAge());

// Extends and super

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hej hej ${this.firstName} ${this.lastName}`;
  }
}

class Person2 extends Person {
  constructor(firstName, lastName, age, nationality) {
    super(firstName, lastName); // calls the parent class constructor
    this.age = age;
    this.nationality = nationality;
  }
}

const hildegard = new Person2("Hildegard", "Meier", 86, "Austrian");
console.log(hildegard.greeting());
console.log(hildegard.age);
console.log(Person.firstname); // undefined because extends only copys features
