import { Item } from "./Items/Item";
import { PricingRule } from "./PricingRules/PricingRule";

export class Checkout {
  private __itemList: Item[];
  constructor(private __pricingRule: PricingRule) {
    this.__itemList = [];
  }

  add(item: Item) {
    this.__itemList.push(item);
  }

  total() {
    this.__pricingRule.applyRules(this.__itemList);
    return this.__pricingRule.total(this.__itemList);
  }
}
