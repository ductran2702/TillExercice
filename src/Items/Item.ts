// Should add ID and use ID instead of name
export const ITEM_DETAILS = {
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

export abstract class Item {
  private __discountPrice: number;
  private __isDiscount: boolean;
  constructor(
    private __name: string,
    private __description: string,
    private __retailPrice: number
  ) {
    this.__discountPrice = this.__retailPrice;
    this.__isDiscount = false;
  }

  getName(): string {
    return this.__name;
  }

  getRetailPrice(): number {
    return this.__retailPrice;
  }

  getFinalPrice(): number {
    return this.__isDiscount ? this.__discountPrice : this.__retailPrice;
  }

  discount(discountPrice: number) {
    this.__isDiscount = true;
    this.__discountPrice = discountPrice;
  }
}
