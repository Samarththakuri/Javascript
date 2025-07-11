// challenge 1
let temp = ["green tea", " black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < temp.length; i++) {
  if (temp[i] === "chai") {
    break;
  }

  selectedTeas.push(temp[i]);
}
console.log(selectedTeas);

// Challenge 2
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
console.log(visitedCities);

// challenge 3
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const nums of numbers) {
  if (nums === 4) {
    break;
  }
  smallNumbers.push(nums);
}
console.log(smallNumbers);
// challenge 4 for of loop
let teaTypes = ["green tea", " black tea", "chai", "oolong tea"];
let prefferedTea = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
}
// challenge 5
let citiesPopulation = {
  London: 890000,
  "New York": 840000,
  Paris: 220000,
  Berlin: 3500000,
};

let cityNewpopulation = {};
for (const city in citiesPopulation) {
  console.log(citiesPopulation[city]);
}
for (const city in citiesPopulation) {
  // key=value
  if (city == "Paris") {
    break;
  }
  // assign
  cityNewpopulation[city] = citiesPopulation[city];
}
console.log(cityNewpopulation);

//challenge 7
let temp1 = ["green tea", " black tea", "chai", "oolong tea"];
let availableTeas = [];
temp1.forEach((tea) => {
  console.log(tea);
});

// function hello() {
//   console.log("abc");
// }
temp1.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);
// challenge 8
let cities1 = ["London", "New York", "Paris", "Berlin"];
let travelledCities = [];
cities1.forEach(function (city) {
  if (city === "Sydeny") {
    return;
  }
  travelledCities.push(city);
});
console.log(travelledCities);
