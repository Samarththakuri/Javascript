// A higher-order function is a function that takes another function as an argument
// or returns a function.
function greet(name) {
  return `Hello ${name}`;
}
function processUserInput(callback) {
  const name = "Samarth";
  return callback(name);
}
