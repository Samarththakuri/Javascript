function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai....`;
  }
  return `Chai order:${kind}`;
}

function orderChai(size: "small" | "medium" | "large" | number) {}

class KhulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}
class Cutting {
  serve() {
    return `Serving cutting Chai`;
  }
}
function servechai(chai: KhulhadChai | Cutting) {
  if (chai instanceof KhulhadChai) {
    return chai.serve();
  }
}
//Here we make a custom type
type ChaiOrder = {
  type: string;
  sugar: number;
};
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai ${item}`;
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; spicelevel: number };
type ElaichiChai = { type: "elaichi"; spicelevel: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;
function MakeChai(order: Chai) {
  switch (order.type) {
    case "elaichi":
      return `Elaichi Chai`;
      break;
    case "masala":
      return `Masala Chai`;
      break;
    case "ginger":
      return `Ginger Chai`;
      break;
    default:
      break;
  }
}
