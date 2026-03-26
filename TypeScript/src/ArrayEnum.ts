const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];
type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  {
    name: "Masala",
    price: 15,
  },
  {
    name: "Adrak",
    price: 25,
  },
];
const citis: readonly string[] = ["Delhi", "DehraDun"];
//cities.push("Pune")

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
//in tuple the order matters
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];

let userInfo: [string, number, boolean?];
userInfo = ["Hekko", 24, true];
userInfo = ["Hekko", 24];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}
const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED,
  CANCELLED,
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(`Making:${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala"); erroneous
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Sugars.HIGH;
enum RandomEnum {
  ID = 1,
  NAME = "chai",
}
