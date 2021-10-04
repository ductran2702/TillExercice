import { Item, ITEM_DETAILS } from "./Item";

const ITEM_DETAIL_LARGE = ITEM_DETAILS.LARGE;
export class LargePizza extends Item {
  constructor() {
    super(
      ITEM_DETAIL_LARGE.name,
      ITEM_DETAIL_LARGE.description,
      ITEM_DETAIL_LARGE.retailPrice
    );
  }
}
