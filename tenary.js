let age = 8;
let beverage = age >= 16 ? "Beer" : "Mineral water";

console.log(beverage);

// if(condition is true) {
//     do this
// } otherwise {
//     do this instead
// }

// #Ternary Worksheet

// 1. Declare a variable named canDrive. Check if someone's age is over 18. If so, print 'yes, can drive' and if not, print 'no, too young!'
let canDrive = age >= 18 ? "yes, can drive" : "no, too young!";
console.log("1: ", canDrive);
// 2. Declare a variable named speedCheck. If speed is above 130km, print 'you're going too fast!'. If speed is lower than 130km, print 'You're driving below the speed limit'.
let speed = 100 + "km";
let speedCheck =
  speed >= 130
    ? "you're going too fast!"
    : "You're driving below the speed limit";
console.log("2: ", speedCheck);
// 3. Declare a variable named personAge. If age is below 21, print "serve juice". Otherwise print "serve wine".
let personAge = age <= 21 ? "serve juice" : "serve wine";
console.log("3: ", personAge);
// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent;
isStudent = true || false ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log("4: ", isStudent);
// 5. Declare a variable named timeOfDay. Check if the time of day is 'morning' - if so, print "Good Morning". If not, print "Good Evening".
let timeOfDay=;
let timeOfDay= "morning" || ;