import { Item } from "./Items/Item";
import { PricingRule, RULE_NAMES } from "./PricingRules/PricingRule";

export class Checkout {
  private __itemList: Item[];
  private __total: number;
  constructor(private __pricingRule: PricingRule) {
    this.__itemList = [];
    this.__total = -1;
  }

  add(item: Item) {
    this.__itemList.push(item);
  }

  applyRules() {
    let countMediumPizza = 0;
    for (var i = 0; i < this.__itemList.length; i++) {
      const itemName = this.__itemList[i].getName();
      const discountRule = this.__pricingRule.getRule(
        itemName,
        RULE_NAMES.DISCOUNT
      );
      const dealRule = this.__pricingRule.getRule(itemName, RULE_NAMES.DEAL);
      if (discountRule) {
        this.__itemList[i].discount(discountRule);
      }
      if (dealRule) {
        countMediumPizza++;
        if (countMediumPizza % dealRule === 0) {
          countMediumPizza = 0;
          this.__itemList[i].discount(0);
        }
      }
    }
  }

  total(): number {
    if (this.__total >= 0) return this.__total;
    this.applyRules();
    let result = 0;
    for (var i = 0; i < this.__itemList.length; i++) {
      result += this.__itemList[i].getFinalPrice();
    }
    this.__total = result;
    return this.__total;
  }
}
