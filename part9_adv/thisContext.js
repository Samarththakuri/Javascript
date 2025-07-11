const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi,I am ${this.name}`);
  },
};
person.greet();
const greetFunction = person.greet;
greetFunction();
// abb binding kardi uski
const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

// bind,call and apply
