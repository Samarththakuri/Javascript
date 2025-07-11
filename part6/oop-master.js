let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John Doe", 20);
console.log(john.name);

// prototypial chain

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} make a sound`;
};

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.hitesh());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make}:This is an inheritance example`;
  }
}
// let myCar = Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return `${this.#balance} is the remaining balance`;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let account = new BankAccount();
console.log(account.getBalance());

class Bird {
  fly() {
    return `Flying......`;
  }
}
class Penguin extends Bird {
  fly() {
    return `Penguin can't fly`;
  }
}

// Getter and setter
class Emplooye {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }
  set salary(value) {
    this._salary = value;
  }
}
let emp = new Emplooye("Alice", 50000);
console.log(emp._salary);
