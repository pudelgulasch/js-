// Create an array filled with your friends' and family's names. 
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
// **Bonus**: Print the indexes of each item in the array. Expected output example: 
// Mike is at index 1 of my friends array.

// let friends=["Elisa", "Oli","Ursula","Peter","Mathis","Richard"];
// console.log(friends.length);

// for (let i=0;i < friends.length; i++){
//  console.log(`Hallo ${friends[i]}!`);
 
// }

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
// let product;
// let i=1;

// while(i <= 100){
//     let j = 1;
// 	while(j <= 100){
// 	console.log(i +"  *  " + j + "  =  " + i * j);
// 	j++;
// 	}
// 	i++;
// }

// Write a program to calculate the average marks of the following students Then, 
// this average is used to determine the corresponding grade for the class.
// John    90
// Tom     60
// Jane    77
// Maria   81
// Carl    65
// The marks are graded as follows :
// Range   Grade
// <60  F
// <70  D
// <80  C
// <90  B
// <100 A

// let i=1;
// let studentMarks=[90+ " John", 60 +" Tom",77+ " Jane",81+ " Maria",65+ " Carl"];

// while (i<=4){
//     if (parseInt(studentMarks[i])<60){
//         console.log(studentMarks[i]+" F")
//     } else if (parseInt(studentMarks[i])<70){
//         console.log(studentMarks[i]+" D");
//     }
//     else if (parseInt(studentMarks[i])<80){
//         console.log(studentMarks[i]+" C");
//     }   
//     else if (parseInt(studentMarks[i])<90){
//         console.log(studentMarks[i]+" B");
//     }    
//     else if (parseInt(studentMarks[i])<100){
//         console.log(studentMarks[i]+" A");
//     }
//     i++;
// }


// Check all numbers from 1 to 100 and print to the console only the primes.
// Primes are the numbers that are perfectly divisible ONLY by themselves and 1

// let j=Math.floor(Math.random()*100);

// while (i<=100){
//     if (i<3){
//     if (i%i===0 && i%1===0){
//         j++;
//     if(j>3 && i%j!=0){
//             console.log(i +" is a Prime number.")
//     }}}
//     else console.log(i);
//     i++;
//     }
let j=3;
let i;
for (i=0; i<=100; i++){
for (i=2; i<j; i++){
    if (j%i===0){
        console.log(i+" is not a prime number!")
    } else (i+" is a prime number");
}
j++;
}
