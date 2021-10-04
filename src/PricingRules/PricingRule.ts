import { Item } from "../Items/Item";

export const RULE_NAMES = {
  DEAL: "DEAL",
  DISCOUNT: "DISCOUNT",
};

export class PricingRule {
  constructor(private __name: string, private __rules: Array<any>) {}

  getName() {
    return this.__name;
  }

  getRules(itemName: string, ruleName: string) {
    return this.__rules
      .slice()
      .reverse()
      .find((rule) => {
        return rule.name === itemName && rule[ruleName] !== undefined;
      });
  }

  setRules(rules: Array<any>) {
    this.__rules = rules;
    return this.__rules;
  }

  addRule(rule: object) {
    this.__rules.push(rule);
    return this;
  }

  applyRules(itemList: Item[]) {
    let countMediumPizza = 0;
    for (var i = 0; i < itemList.length; i++) {
      const itemName = itemList[i].getName();
      const discountRule = this.getRules(itemName, RULE_NAMES.DISCOUNT);
      const dealRule = this.getRules(itemName, RULE_NAMES.DEAL);
      if (discountRule) {
        itemList[i].discount(discountRule[RULE_NAMES.DISCOUNT]);
      }
      if (dealRule) {
        countMediumPizza++;
        if (countMediumPizza % dealRule[RULE_NAMES.DEAL] === 0) {
          countMediumPizza = 0;
          itemList[i].discount(0);
        }
      }
    }
  }

  total(itemList: Item[]) {
    let result = 0;
    for (var i = 0; i < itemList.length; i++) {
      result += itemList[i].getFinalPrice();
    }
    return result;
  }
}
