// **Conditionals Exercises**

// These exercises are aimed at making you more comfortable with using conditionals as well as operators.
// Use if statements to complete the following exercises.
// **Print your results to the console**

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
// Print true if either of them are in the range.
let one = 30;
let two = 60;
if (one >= 50 && one <= 99 || two >= 50 && two <= 99) {
  console.log("1: "+true);
}
// 2. Check if three given integer values are in the range 50 to 99 (inclusive).
// Print true if one or more of them are in the range.
let three = 20;
let four= 10;
let five= 150;
if (three>=50 && three<=99 || four>=50 && four<=99 || five>=50 && five<=99){
  console.log("2: "+true);
} 
// 3. Declare the variables a, b and c - give them number values. 
// Check which one out of the three variables has the largest value and print it to the console. 
// Then change the values of the variables to see if your conditional still works.
let a = 50;
let b = 8;
let c = 7;
// console.log(Math.max(a,b,c)); another way without if else statement
if (a>b && a>c){
  console.log("3: "+a);
} else if(b>a && b>c){
  console.log("3: "+b);
} else console.log("3: "+c);

// 4. Create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then print the original string.
let example="hton";
let programm="Py"+example;
if (programm.substr(0,2)==="Py"){
  console.log("4: "+programm);
}
// 5. Calculate the sum of the two integers. If the sum is in the range 50..80 print 65 other wise print 80.
let sum2=a+b;
if (sum2>=50 && sum2<=80){
  console.log("5: "+65);
} else console.log("5: "+80);

// 6. Check whether the sum of two integers is 8 or whether their difference is 8. 
// If one of these is the case, print true.
if (sum2===8 || a-b===8){
  console.log("6: "+true);
}
// 7. Check whether one of two integers is 15 or if their sum is 15. If one of these is the case, print true.
if (sum2===15 || a+b===15){
  console.log("7: "+true);
}
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if ((a % 7) === 0 || (b % 11) === 0){
  console.log("8: "+true);
}

// 9. Calculate the sum of the two given integers. If the two values are same, then print triple their sum.
let sum =a+c;
if (a===c){
  console.log("9: "+sum*3);
}
// 10. Calculate the difference between a specified number and 19. 
// Print double the difference if the specified number is greater than 19.
let diff=a-19;
if(diff>19){
  console.log("10: "+diff*2);
}