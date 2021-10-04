import { Checkout } from "./Checkout";
import { Item } from "./Items/Item";
import { PricingRule } from "./PricingRules/PricingRule";

const _RULE_NAMES = {
  DEAL: "DEAL",
  DISCOUNT: "DISCOUNT",
};
const _ITEM_DETAILS = {
  SMALL: {
    name: "Small Pizza",
    description: "10'' pizza for one person",
    retailPrice: 269.99,
  },
  MEDIUM: {
    name: "Medium Pizza",
    description: "12'' pizza for one person",
    retailPrice: 322.99,
  },
  LARGE: {
    name: "Large Pizza",
    description: "15'' pizza for one person",
    retailPrice: 394.99,
  },
};

const _INIT_PRICING_RULE_FACEBOOK = {
  name: "FACEBOOK",
  rulesSet: [
    { name: _ITEM_DETAILS.MEDIUM.name, DEAL: 5 },
    { name: _ITEM_DETAILS.LARGE.name, DISCOUNT: 389.99 },
  ],
};

let pricingRule: PricingRule;
beforeAll(() => {
  pricingRule = new PricingRule(
    _INIT_PRICING_RULE_FACEBOOK.name,
    _INIT_PRICING_RULE_FACEBOOK.rulesSet
  );
});

describe("Test PricingRule", () => {
  class DummyMediumPizza extends Item {
    constructor() {
      super(_ITEM_DETAILS.MEDIUM.name, "description1", 100);
    }
  }
  class DummyLargePizza extends Item {
    constructor() {
      super(_ITEM_DETAILS.LARGE.name, "description2", 500);
    }
  }
  it("Test total with default rule", async function () {
    const co = new Checkout(new PricingRule("default rule", []));
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyLargePizza());
    co.add(new DummyLargePizza());
    expect(co.total()).toEqual(1500);
  });

  it("Test total with pricingRule", async function () {
    pricingRule = new PricingRule(
      _INIT_PRICING_RULE_FACEBOOK.name,
      _INIT_PRICING_RULE_FACEBOOK.rulesSet
    );
    const co = new Checkout(pricingRule);
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyMediumPizza());
    co.add(new DummyLargePizza());
    co.add(new DummyLargePizza());
    expect(co.total()).toEqual(1179.98);
    expect(co.total()).toEqual(1179.98);
  });
});
