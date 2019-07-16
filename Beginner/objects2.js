const myHometown = {
  city: "Berlin",
  country: "Germany",
  population: 357500000,
  isCold: true,
  newcomers: function(x) {
    return this.population + x;
  }
};

for (let x in myHometown) {
  console.log(`${x}-${myHometown[x]}`);
}

// adding new properties

myHometown.state = "Berlin";

// delete properties, if you console.log a delete you get a boolean
delete myHometown.isCold;
console.log(myHometown);

// testing our method
console.log(myHometown.newcomers(1000));

const movies = [
  {
    title: "Spartacus",
    director: "Stanley Kubrick",
    isGood: true
  },
  {
    title: "Jaws",
    director: "Steven Spielberg",
    isGood: true
  },
  {
    title: "Titanic",
    director: "James Cameron",
    isGood: false
  }
];

// for in loop
for (let i in movies) {
  if (movies[i].isGood) {
    console.log(`I looooove ${movies[i].title}!`);
  } else {
    console.log(`${movies[i].title} suuuucks!`);
  }
}

// outputs the keys of an object in an array
console.log(Object.keys(myHometown));
console.log(Object.keys(myHometown).length);
