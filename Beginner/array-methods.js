const africanCities = ["Lagos", "Kinshasa", "Alexandria", "Mogadishu"];
const asianCities = ["Busan", "Taipei", "Kuala Lumpur", "Osaka"];
const myNums = [82, 15, 100, 2076, 999];

// To check if something is an array
// console.log("1: ",Array.isArray("Hot"));

// to add on the end .push(value)
asianCities.push("Bangkok");

// to add on the front .unshift(value)
africanCities.unshift("Dar Es Salaam");

// take off from the end .pop(value)
// asianCities.pop();

// take off from the end .shift()
// asianCities.shift();

// take off from the anywhere .splice
// asianCities.splice(1, 2, "Beijing");

// concatenate Arrays
// const worldCities = asianCities.concat(africanCities); - old way to do it
// new ES6 with spread syntax
const worldCities = [...africanCities, ...africanCities];
// console.log("2: ",worldCities);

// sorting arrays
// console.log("3: ",worldCities.sort());
console.log("4: ",myNums.sort()); //sortiert nur nach der ersten Indexstelle

//compare function (callback) - arr.sort([compareFunction])
// Bsp.: numbers.sort((a, b) => a - b);
// Objekte können anhand der Werte eines ihrer Eigenschaften sortiert werden.
val = myNums.sort(function(x, y) {
  return x - y;
});
console.log("5: ",val);

// reversing arrays
// console.log("6: ",asianCities.reverse());

// to String
console.log("7: ",asianCities.toString());

// gives out the sliced out part, starts at 1, ends before 3
let asianCities2 = asianCities.slice(1, 3);
console.log("8: ",asianCities2);
