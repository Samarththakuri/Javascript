function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const array = sumAndMultiply(2, 3);
const [sum, multiply, divison = "no division"] = sumAndMultiply(2, 3);

console.log(array);

const person = {
  Name: "Samarth",
  age: 20,
  address: {
    city: "DehraDun",
    state: "UK",
  },
};
// const { Name, age } = person;
//this does a mapping
// const { Name: firstName, age } = person;
//if name had not been present in it woh fallback karta to john
// const { Name: firstName = "John", age = 34 } = person;
const { name: firstName, ...rest } = person;

console.log(firstName); //will give samarth
