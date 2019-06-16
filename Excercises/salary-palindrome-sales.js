
// 1. Pay the employees today!Imagine that you are currently the big boss of a company. 
// It is the first day of the month and you want to pay your employees. 
// In the company there are now working 72 employees.The cashier/balance of your company 
// now is 100.000$. You will use these to pay the salaries to your workers. Your company 
// is comprised of:
// 50 workers with ops and general duties: each earns 1.000$.
// 10 web developers:
// 4 of them are Frontend Developers: each earns 1.500$
// 4 of them are Backend Developers: each earns 2.000$
// 2 of them are FullStack developers: each earns 3.000$
// 5 Project managers: each earns 4.000$
// 5 DevOps Engineers: each earns 5.000$
// 2 Data Scientists:
// 1 Data Analyst: earns 7.500$
// 1 Machine Learning Engineer: earns 10.000$
// Suppose you want to start paying them one by one and pay as many as you can. 
// But there is an order. Everyone has an identifying number.
// The Data Scientist come first (from 1 to 2).
// Then the web devs (3 to 4, Full stack come first), 
// (5 to 8, here come the Backend Devs), 
// then the Frontend Devs.Then the normal workers.
// Then DevOps EngineersProject Managers last.
// Print a message to the console after the program to know exactly howmany people have not 
// received their payment yet, in order to keep track on the amount of people who are waiting 
// for the salaries. Additionally print how much money is left in the balance after the payment

let salary, employeesTotal, i, budgetTotal, budgetPaid, departments;

salary=[10000,7500,3000,2000,1500,1000,5000,4000];
employeesTotal=72;
i=0;
budgetTotal=100000;
budgetPaid=0;

while (budgetPaid<=budgetTotal){
        if (i===0) {
          budgetPaid += salary[0]
        } else if (i<2) {
          budgetPaid += salary[1]
        } else if (i<4)  {
          budgetPaid += salary[2]
        } else if (i<8){
          budgetPaid += salary[3]
        } else if (i<12) {
          budgetPaid += salary[4]
        } else if (i<62) {
        budgetPaid += salary[5]
        } else if (i<67) {
        budgetPaid += salary[6]
        } else {
        budgetPaid += salary[7]
        }
        i++;
    }
    
    console.log(`1: ${employeesTotal-i-1} employees have not received their paycheck. ${budgetPaid-budgetTotal} remains of the budget.`)
      
// 2. Write a program that will iterate from 0 to 10. For each iteration of the for loop, 
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let multi;
     
for (multi=0;multi<11;multi++){
// Laufe 11 mal, mit den Werten von Schritt 0 bis 10 
console.log(`2: ${multi*9}`)
}

// 3. Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same 
// backwards as forwards, e.g. madam or tarrattarrat
// Solution Benjamin

const word = "Racecar";
   const halfLength = Math.floor(word.length / 2);
   console.log(halfLength); // 3
   for(let i = 0; i < halfLength; i++){
     const currentChar = word[i]; //liest word von vorn
    //  console.log(currentChar);
     const endOffsetChar = word[word.length - 1 - i]; //liest word von hinten
    //  console.log(endOffsetChar);
     if(currentChar !== endOffsetChar){
       console.log("4: ",false);
     } else {
       console.log("4: ",true);
     }
   }
   
// 4. The clothing sales problem
// Imagine that you work in sales at a clothing shop and you are responsible for selling 3 products:
// A t-shirt that costs 10$
// A pair of Jeans that costs 30$
// and a Jacket that costs 150$
// You have noticed a paradox pattern. Every three customers, the new customer buys the same things.
// For example the first customer buys 3 t-shirts.
// The second customer buys 2 Jeans.
// The third customer buys a jacket.
// And then again the same from the beginning.
// The fourth customer buys again 3 t-shirts.
// The fifth customer buys again 2 jeans.
// The sixth customer buys again one jacket.
// That continues until the end of the day.
// Find out how much money your cashier has if the initial cashier was already at 150$ 
// and the total number of customers at the end of the day was 78.

let cashier=150;
let shirt=10;
let jeans=30;
let jacket=150;
// 78%3=26 customers by 3 shirts etc.  
for (let i=0;i<26;i++){
cashier+=(shirt*3)+(jeans*2)+jacket;
}
console.log(`4: ${cashier}`)