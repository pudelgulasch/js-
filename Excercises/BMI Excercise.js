// 1. Store Mark's and John's mass and height in variables.
let markMass = 50;
let markHeight = 1.8;
let johnMass = 60;
let johnHeight = 1.7;
// 2. Calculate both their BMIs and store their BMIs in variables.
let markBmi = Math.round(markMass / (markHeight * markHeight));
let johnBmi = Math.round(johnMass / (johnHeight * johnHeight));
console.log(markBmi,johnBmi);
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let vs=markBmi>johnBmi;
console.log(vs);
// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? true").
console.log(`Is Marks BMI higher than Johns BMI? ${vs}`);
// 5. Create an if statement which prints the name and BMI of the person with the highest BMI.
markBmi=markBmi+" Mark";
johnBmi=johnBmi+" John";
if (Math.pow(markBmi,johnBmi)==markBmi){
    console.log("BMI: "+markBmi);   
} else (console.log("BMI: "+johnBmi));