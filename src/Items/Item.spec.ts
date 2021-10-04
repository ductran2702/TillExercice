import { Item } from "./Item";
import { LargePizza } from "./LargePizza";
import { MediumPizza } from "./MediumPizza";
import { SmallPizza } from "./SmallPizza";

class DummyPizza extends Item {
  constructor() {
    super("name", "description", 100);
  }
}

describe("Test Item", () => {
  it("Test Item class", async function () {
    const pizza = new DummyPizza();
    expect(pizza.getFinalPrice()).toEqual(100);
    pizza.discount(50);
    expect(pizza.getFinalPrice()).toEqual(50);
  });
});

describe("Test Pizza", () => {
  it("Test Large Pizza", async function () {
    const largePizza = new LargePizza();
    largePizza.discount(1);
    expect(largePizza.getFinalPrice()).toEqual(1);
  });

  it("Test Medium Pizza", async function () {
    const largePizza = new MediumPizza();
    largePizza.discount(1);
    expect(largePizza.getFinalPrice()).toEqual(1);
  });

  it("Test Small Pizza", async function () {
    const largePizza = new SmallPizza();
    largePizza.discount(1);
    expect(largePizza.getFinalPrice()).toEqual(1);
  });
});
