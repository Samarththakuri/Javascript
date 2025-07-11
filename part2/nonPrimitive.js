let username = {
  "first name": "hitesh",
  isLoggedin: true,
};
const myfirstName = "Samarth";
username.firstname = "Mr.H";
console.log(username["first name"]);
console.log(username.firstname);
console.log(typeof username);
//Array
let heroes = ["a", "b", "c", true];
//console.log(heroes[0]);
//Implicit conversion
console.log(1 + "1");
let isValue = true;
console.log(isValue + 1); //true is 1 and false if 0
let isvalue = "2abc";
console.log(typeof Number(isvalue));
