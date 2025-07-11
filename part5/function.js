function greet(name) {
  console.log("hello ${name}");
}
greet("samarth");

// challenges 1
function makeTea(Teatype) {
  return "Making ${typeofTea}";
  console.log(test); //**/
}
let teaOrder = makeTea("Lemon tea");
console.log(teaOrder);

// challenge 2
function orderTea(teaType) {
  function confirmOrder() {
    return "Order confirmed for chai";
  }
  return confirmOrder();
}
let answer = orderTea("chai");
console.log(answer);

//challenge 3-Arrow Function
//  function greet (){}
//  const greet=()=>{}
//  ()=>{}
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(300, 4);
console.log(totalCost);
// const calculateTotal=(price,quantity)=>price*quantity

// challenge 4
function makeTea(teaType) {
  return `maketea:${teaType}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);

// challenge 5
function createTeaMaker() {
  let score = 100;
  return function (teaType) {
    return `Making ${teaType} ${score}`;
  };
}
let teaMaker = createTeaMaker();
console.log(teaMaker);
console.log(teaMaker());
