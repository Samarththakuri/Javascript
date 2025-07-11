function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}
let increment = outer(); //remeber rehta hai
console.log(increment());
console.log(increment());
console.log(increment());
