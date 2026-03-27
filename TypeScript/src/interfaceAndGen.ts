interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "ChaiCode caffe" };
interface DiscountCalculator {
  (price: number): number;
}
// apply50 must be a function that follows the rules of DiscountCalculator
const apply50: DiscountCalculator = (price) => {
  return 50;
};
interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavour: string]: number; //“This object can have any number of properties
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Samarth",
  age: 42,
};
