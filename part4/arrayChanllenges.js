// challenge 1
let teaFlavours = ["green tea", "black tea", "oolong tea"];

let teaFL = new Array("green tea", "black tea", "oolong tea");
const firstea = teaFlavours[0];
//challenge 2
let cities = ["London", "Tokyo", "Pairs", "New york"];
const favoriteCity = cities[2];

//challenge 3
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "masala tea";
// console.log(teaTypes);

// challenge 4
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited[2] = "Berlin";
citiesVisited.push("Dehradun");
// console.log(citiesVisited);

// challenge 5
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
teaOrders.pop();
// console.log(teaOrders);

// challenge 6-softcopies***
let popularteas = ["green tea", "oolong tea", "chai"];
// let var1 = 5;
// let var2 = var1;
// console.log(var2);
let softcopyteas = popularteas;
popularteas.pop();
// console.log(softcopyteas);
// console.log(popularteas);

// challenge 7-hard copy**
let topCities = ["Berlin", "Singapore", "New York"];
let hardcopycities = [...topCities];
// let harcopycities=topcities.slice();
topCities.pop();
// console.log(hardcopycities);
// challenge 8
let europeancities = ["Paris", "Rome"];
let asiancities = ["tokyo", "bangkok"];

let worldcities = europeancities.concat(asiancities);
console.log(worldcities);
// challenge 9
let teaMenu = ["Masala chai", "oolong Tea", "green tea", "earl grey"];
let menulength = teaMenu.length;

// challenge 10
let citybucketlist = ["Kyoto", "London", "Cape town", "Vancouver"];
let islondoninlist = citybucketlist.includes("London");
console.log(islondoninlist);
// idhar upar lower ka scene hai
let islondoninNOTlist = citybucketlist.includes("london");
console.log(islondoninNOTlist);
