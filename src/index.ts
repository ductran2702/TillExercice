import { Checkout } from "./Checkout";
import { ITEM_DETAILS } from "./Items/Item";
import { LargePizza } from "./Items/LargePizza";
import { MediumPizza } from "./Items/MediumPizza";
import { SmallPizza } from "./Items/SmallPizza";
import { PricingRule } from "./PricingRules/PricingRule";

// Can use ID instead of name
export const INIT_PRICING_RULES = {
  DEFAULT: { name: "DEFAULT", rulesSet: [] },
  AMAZON: {
    name: "AMAZON",
    rulesSet: [{ name: ITEM_DETAILS.LARGE.name, DISCOUNT: 299.99 }],
  },
  FACEBOOK: {
    name: "FACEBOOK",
    rulesSet: [
      { name: ITEM_DETAILS.MEDIUM.name, DEAL: 5 },
      { name: ITEM_DETAILS.LARGE.name, DISCOUNT: 389.99 },
    ],
  },
  INFOSYS: {
    name: "INFOSYS",
    rulesSet: [{ name: ITEM_DETAILS.SMALL.name, DEAL: 3 }],
  },
};

const co1 = new Checkout(
  new PricingRule(
    INIT_PRICING_RULES.DEFAULT.name,
    INIT_PRICING_RULES.DEFAULT.rulesSet
  )
);
co1.add(new SmallPizza());
co1.add(new MediumPizza());
co1.add(new LargePizza());
const total1 = co1.total();
console.log("total1", total1);

var co2 = new Checkout(
  new PricingRule(
    INIT_PRICING_RULES.INFOSYS.name,
    INIT_PRICING_RULES.INFOSYS.rulesSet
  )
);
co2.add(new SmallPizza());
co2.add(new SmallPizza());
co2.add(new SmallPizza());
co2.add(new LargePizza());
const total2 = co2.total();
console.log("total2", total2);

var co3 = new Checkout(
  new PricingRule(
    INIT_PRICING_RULES.AMAZON.name,
    INIT_PRICING_RULES.AMAZON.rulesSet
  )
);
co3.add(new MediumPizza());
co3.add(new MediumPizza());
co3.add(new MediumPizza());
co3.add(new LargePizza());
const total3 = co3.total();
console.log("total3", total3);

var co4 = new Checkout(
  new PricingRule(
    INIT_PRICING_RULES.FACEBOOK.name,
    INIT_PRICING_RULES.FACEBOOK.rulesSet
  ).addRule({
    name: ITEM_DETAILS.SMALL.name,
    DISCOUNT: 99.99,
  })
);
co4.add(new MediumPizza());
co4.add(new MediumPizza());
co4.add(new MediumPizza());
co4.add(new MediumPizza());
co4.add(new MediumPizza());
co4.add(new LargePizza());
co4.add(new SmallPizza());
const total4 = co4.total();
console.log("total4", total4);

var co5 = new Checkout(
  new PricingRule(
    INIT_PRICING_RULES.FACEBOOK.name,
    INIT_PRICING_RULES.FACEBOOK.rulesSet
  )
    .addRule({
      name: ITEM_DETAILS.SMALL.name,
      DISCOUNT: 99.99,
    })
    .addRule({
      name: ITEM_DETAILS.MEDIUM.name,
      DISCOUNT: 199.99,
    })
);
co5.add(new MediumPizza());
co5.add(new MediumPizza());
co5.add(new MediumPizza());
co5.add(new MediumPizza());
co5.add(new MediumPizza());
co5.add(new LargePizza());
co5.add(new SmallPizza());
const total5 = co5.total();
console.log("total5", total5);
