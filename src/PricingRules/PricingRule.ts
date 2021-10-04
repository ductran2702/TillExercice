import { Item } from "../Items/Item";

export const RULE_NAMES = {
  DEAL: "DEAL",
  DISCOUNT: "DISCOUNT",
};

export class PricingRule {
  constructor(private __name: string, private __rules: Array<any>) {}

  getName(): string {
    return this.__name;
  }

  getRule(itemName: string, ruleName: string): number {
    const rule = this.__rules.find((rule) => {
      return rule.name === itemName && rule[ruleName] !== undefined;
    });
    return rule && rule[ruleName];
  }

  setRules(rules: Array<any>): PricingRule {
    this.__rules = rules;
    return this;
  }

  addRule(rule: object): PricingRule {
    this.__rules.unshift(rule);
    return this;
  }
}
