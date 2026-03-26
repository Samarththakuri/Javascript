class Chai {
  flavour: string;
  price: number;
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}
const masalaChai = new Chai("masala", 20);
masalaChai.flavour = "masala";

class Chais {
  public flavour: string = "Masala";
  private secretIngredients = "Cardamom";
  reveal() {
    return this.secretIngredients;
  }
  protected shopName = "Chai corner";
}

class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; //OK
  }
}
class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;
  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) {
      throw new Error("Too sweet");
    }
    this._sugar = value;
  }
}

class EkChai {
  static shopName = "Chocolate Caffe";
  constructor(public flavour: string) {}
}
