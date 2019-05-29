// let salary, employeesTotal, i, budgetTotal, budgetPaid, departments;

// salary=[10000,7500,3000,2000,1500,1000,5000,4000];
// employeesTotal=72;
// i=0;
// budgetTotal=100000;
// budgetPaid=0;

// while (budgetPaid<=budgetTotal){
//         if (i===0) {
//           budgetPaid += salary[0]
//         } else if (i<2) {
//           budgetPaid += salary[1]
//         } else if (i<4)  {
//           budgetPaid += salary[2]
//         } else if (i<8){
//           budgetPaid += salary[3]
//         } else if (i<12) {
//           budgetPaid += salary[4]
//         } else if (i<62) {
//         budgetPaid += salary[5]
//         } else if (i<67) {
//         budgetPaid += salary[6]
//         } else {
//         budgetPaid += salary[7]
//         }
//         i++;
//     }
    
//     console.log(`${employeesTotal-i-1} employees have not received their paycheck. ${budgetPaid-budgetTotal} remains of the budget.`)
      
    // Write a program that will iterate from 0 to 10. For each iteration of the for loop, 
    // it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

    // let multi;
     
    // for (multi=0;multi<11;multi++){
    //     // Laufe 11 mal, mit den Werten von Schritt 0 bis 10 
    //     console.log(`${multi*9}`)
    // }

// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same 
// backwards as forwards, e.g. madam or tarrattarrat
// Solution Benjamin - asks only the same length devided by 2 not the charakters themselves 
// const word = "Racecar";
//    const halfLength = Math.floor(word.length / 2);
//    for(let i = 0; i < halfLength; i++){
//      const currentChar = word[i];
//      const endOffsetChar = word[word.length - 1 - i];
//      if(currentChar !== endOffsetChar){
//        console.log(false);
//      } else {
//        console.log(true);
//      }
//    }

let cashier=150;
let shirt=10;
let jeans=30;
let jacket=150;
let i;

for (i=0;i=78;i++){
console.log(`${shirt*3}${jeans*2}${jacket+cashier} $`)
break
}
