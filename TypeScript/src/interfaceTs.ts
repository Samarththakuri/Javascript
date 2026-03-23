interface Cupsize {
  size: "small" | "large";
}

class Chai implements Cupsize {
  size: "small" | "large" = "large";
}

type Response = { ok: true } | { ok: false };

// class MyRes implements Response{
//     ok
// }

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };
// this is an intersection
type MasalaChai = BaseChai & Extra;
const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};
type User = {
  username: string;
  //conditional or optional data
  bio?: string;
};
const u1: User = { username: "Saamarth" };
const u2: User = { username: "Saamarth", bio: "working rn" };
