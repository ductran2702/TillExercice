import { Item, ITEM_DETAILS } from "./Item";

const ITEM_DETAIL_MEDIUM = ITEM_DETAILS.MEDIUM;
export class MediumPizza extends Item {
  constructor() {
    super(
      ITEM_DETAIL_MEDIUM.name,
      ITEM_DETAIL_MEDIUM.description,
      ITEM_DETAIL_MEDIUM.retailPrice
    );
  }
}
