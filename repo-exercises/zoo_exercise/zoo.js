//Max, rounded price code
//I used this code so I can then use the index of the prices array to determine the type of client.
let prices = [10.3, 5.1, 3.55];
let clients = ["student", "child", "uncle"];
let maxPrice = Math.max(...prices);

let maxIndex = prices.indexOf(maxPrice);
let priceUp = Math.ceil(maxPrice);
console.log(
  `The highest price is ${priceUp} Euro and would be paid by ${
    clients[maxIndex]
  }`
);
// end

//Alternative max,rounded price code
//This code is much simpler and would also be acceptable
let x = Math.max(10.3, 5.1, 3.55);
console.log(Math.ceil(x));
//end

//Get hour of day
let hour = new Date().getHours();
let time;

//Is it day or night
if (hour >= 8 && hour <= 20) {
  time = "day";
} else {
  time = "night";
}

//Declare locations
let locations = ["petting zoo", "sleeping house", "escaped"];

//Place animals in the correct location according to the time of day.
switch (time) {
  case "day":
    location = locations[0];
    break;
  case "night":
    location = locations[1];
    break;
  default:
    location = locations[2];
}

//Output results
if (location !== "escaped") {
  console.log(
    `It is ${time} time therefore the animals will be in the ${location}`
  );
} else {
  console.log(`It is ${time} time therefore the animals will have ${location}`);
}
