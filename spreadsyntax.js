// spread syntax
// spread syntax allows an interable such as an array or string to be expanded
// interable - has an index, repeats

// const sum = (a, b, c) => a + b + c;
// const nums = [1, 2, 3];

// console.log(sum(...nums));

// // on math object
// const numsArr = [652, 98, 945, 12];
// let result = Math.max(...numsArr);
// console.log(result);

// arrays

// const mcs = ["Biggie", "Tupac", "Jay-Z"];
// // // const mcs2 = mcs;
// // const mcs2 = [...mcs];
// // mcs.push("Snoop");
// // // mcs2 and msc share the same adress, with spread syntax it's a copy

// // console.log(mcs2);
// // console.log(mcs);

// const mcs2 = ["Nas", "KRS-1"];
// const legends = [...mcs2, ...mcs]; //instead of concat
// console.log(legends);
// console.log(mcs);

//string to split array
const team = "Fantastic15";
const splitTeam = team.split(""); //or [...team];
console.log(splitTeam);
