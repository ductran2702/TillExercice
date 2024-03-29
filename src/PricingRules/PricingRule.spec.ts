import { PricingRule } from "./PricingRule";

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

describe("Test PricingRule", () => {
  it("Test constructor", async function () {
    const pricingRule = new PricingRule(
      _INIT_PRICING_RULE_FACEBOOK.name,
      _INIT_PRICING_RULE_FACEBOOK.rulesSet
    );
    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DEAL)
    ).toEqual(5);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(389.99);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DEAL)
    ).toEqual(undefined);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(undefined);
  });

  it("Test addRule discount", async function () {
    const pricingRule = new PricingRule(
      _INIT_PRICING_RULE_FACEBOOK.name,
      _INIT_PRICING_RULE_FACEBOOK.rulesSet
    );

    pricingRule.addRule({
      name: _ITEM_DETAILS.MEDIUM.name,
      DISCOUNT: 99.99,
    });

    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DEAL)
    ).toEqual(5);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(99.99);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DEAL)
    ).toEqual(undefined);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(389.99);
  });

  it("Test addRule deal", async function () {
    const pricingRule = new PricingRule(
      _INIT_PRICING_RULE_FACEBOOK.name,
      _INIT_PRICING_RULE_FACEBOOK.rulesSet
    );

    pricingRule.addRule({
      name: _ITEM_DETAILS.MEDIUM.name,
      DEAL: 4,
    });

    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DEAL)
    ).toEqual(4);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(99.99);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DEAL)
    ).toEqual(undefined);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(389.99);
  });

  it("Test addRule deal again", async function () {
    const pricingRule = new PricingRule(
      _INIT_PRICING_RULE_FACEBOOK.name,
      _INIT_PRICING_RULE_FACEBOOK.rulesSet
    );
    pricingRule.addRule({
      name: _ITEM_DETAILS.MEDIUM.name,
      DEAL: 3,
    });

    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DEAL)
    ).toEqual(3);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(99.99);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DEAL)
    ).toEqual(undefined);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(389.99);
  });

  it("Test setRules", async function () {
    const pricingRule = new PricingRule(
      _INIT_PRICING_RULE_FACEBOOK.name,
      _INIT_PRICING_RULE_FACEBOOK.rulesSet
    );
    const newRulesSet = [{ name: _ITEM_DETAILS.MEDIUM.name, DEAL: 3 }];
    pricingRule.setRules(newRulesSet);

    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DEAL)
    ).toEqual(3);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.MEDIUM.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(undefined);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DEAL)
    ).toEqual(undefined);
    expect(
      pricingRule.getRule(_ITEM_DETAILS.LARGE.name, _RULE_NAMES.DISCOUNT)
    ).toEqual(undefined);
  });
});
