// higher order functions

//for each
//the for Each Method Executes a provided function once for each array element

//function outputs =(item,index, array )

const arr = [1, 2, 3, 4, 5];

arr.forEach(number => console.log(number * 2)); //is a callback or:
// let num2 = arr.forEach(number => number * 2);
// console.log(num2);

// arr.forEach(function(num, id, array) {
//   console.log(`${id + 1}:${num}-${array}`);
// });

// const stuff = ["my stuff", "whatever", "your stuff"];
// stuff.forEach((list, id) => console.log(`${id + 1}-${list}`));

//For loop

const items = ["item1", "item2", "item3"];
const copy = [];
// for (let i = 0; i < items.length; i++) {
//   copy.push(items[i]);
// }
// console.log(copy);

// for each

// items.forEach(function(item) {
//   copy.push(item);
// });

// console.log(copy);

const cities = ["Lima", "Montevideo", "Rio de Janero", "Sao Paulo", "Santiago"];

// cities.forEach((city, index) => {
//   if (city === "Sao Paulo") {
//     city = city.toUpperCase();
//   } else {
//     city = city.toLowerCase();
//   }
//   console.log(index + 1, city);
// });

// cities.forEach((city, index) => {
//   if (city === "Montevideo") {
//     //scipts Montevideo
//     return;
//   }
//   console.log(index + 1, city);
// });

//map
//the map() method creates a new array with the results of calling a provided function on every element in the calling array
//the callback runs for each value in the array and each new value in the resulting array
//keep in mind that the resulting array will always be the same length as the original array

// const array = [2, 3, 10, 20];
// const map1 = array.map(x => x * 2); //creates new array
// console.log(map1);

// let newArr = array.map((val, index, array) => {
//   return {
//     index: index + 1,
//     value: val
//   };
// });
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.map((val, index) => {
//   if (val % 2 === 0) {
//     return val * 5;
//   } else {
//     return val;
//   }
// });
// console.log(newArr);

//filter
//the filter() methods creates a new array with all elements that pass the test implemented by three
// proved function

// const word = ["polar", "iceberg", "snow", "skiing", "frozen", "penguin"];
// const result = word.filter(word => word.length > 5);
// console.log(result);

// const nums = [2, 8, 12, 563, 1007, 27896];
// const even = nums.filter(nums => nums % 2 === 0);
// console.log(even);

// let data = [
//   {
//     country: "China",
//     population: 1409517397
//   },
//   {
//     country: "India",
//     population: 1339180127
//   },
//   {
//     country: "usa",
//     population: 324459463
//   },
//   {
//     country: "Indonesia",
//     population: 26399137
//   }
// ];

// let countries = data.filter(val => {
//   return val.population > 500000000;
// });
// console.log(countries);

//Reduce

//the reduce() method executes a reduce function (that we provide) on each element in an array,
//resulting in a single value

//let result=array.reduce (callback)
// optionally we can specifiy an initial value

// sums all values in an array
// const array1 = [1, 2, 3, 4];
// const reducer = array1.reduce((total, num) => total + num); //total = accumulator, num=currentValue, see chart on md

// console.log(reducer); //10

const numbers = [165, 44, 22, 8];
// let solution = numbers.reduce((acc, val) => acc - val);
// console.log(solution);

//specifying an intital value
// let sum = numbers.reduce((acc, val) => {
//   return acc + val;
// }, 100);

// console.log(sum);

// const names = [
//   "Kim",
//   "Bob",
//   "Tupac",
//   "Kim",
//   "Ed",
//   "Bob",
//   "Tupac",
//   "Ed",
//   "Fred",
//   "Sal",
//   "Bob",
//   "Sal"
// ];

// const countInstances = names.reduce((allNames, name) => {
//   if (name in allNames) {
//     allNames[name]++; //increments the existing property
//   } else {
//     allNames[name] = 1; //creates a property and assings al value of 1
//   }
//   return allNames;
// }, {}); //the value starts as an empty object

// console.log(countInstances);

// const countedNames = {};
// for (let i = 0; i < names.length; i++) {
//   let name = names[i];
//   if (countedNames[name] != null) {
//     countedNames[name]++;
//   } else {
//     countedNames[name] = 1;
//   }
// }
// console.log(countedNames);
