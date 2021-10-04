import { Item, ITEM_DETAILS } from "./Item";

const ITEM_DETAIL_SMALL = ITEM_DETAILS.SMALL;
export class SmallPizza extends Item {
  constructor() {
    super(
      ITEM_DETAIL_SMALL.name,
      ITEM_DETAIL_SMALL.description,
      ITEM_DETAIL_SMALL.retailPrice
    );
  }
}
