function Person(name, age) {
  this.name = name;
  }
//   constructor function 
function Car(make, model) {
  this.model = model;
  this.make = make;
}
let myCar = new Car("Toyota", "Camry");
console.log(myCar);
let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

function Tea(type) {
  this.type = type;
  //   Right now, every Tea object you create will have its own copy of the describe function.
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());
console.log(lemonTea);
Tea.prototype.describe = function () {
  return `this is a cup of ${this.type}`;
};

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name=name;
}
