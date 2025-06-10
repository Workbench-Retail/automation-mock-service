import { SessionData } from "../../../../session-types";
import { RET12FASHION125Catalog } from "../../on_search/on_search/catalog";

export type SelectedItems = {
  id: string;
  quantity: {
    count: number;
  };
  location_id: string;
}[];

const breakupItem = {
  "@ondc/org/item_id": "I1",
  "@ondc/org/item_quantity": {
    count: 1,
  },
  title: "Butterfly Beautiful 13 Gold Necklace",
  "@ondc/org/title_type": "item",
  price: {
    currency: "INR",
    value: "2260.00",
  },
  item: {
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "10",
      },
    },
    price: {
      currency: "INR",
      value: "2260.00",
    },
  },
};

const breakup = [
  {
    "@ondc/org/item_id": "F1",
    title: "Delivery charges",
    "@ondc/org/title_type": "delivery",
    price: {
      currency: "INR",
      value: "493.75",
    },
  },
  {
    "@ondc/org/item_id": "F1",
    title: "Convenience Fee",
    "@ondc/org/title_type": "misc",
    price: {
      currency: "INR",
      value: "3.00",
    },
  },
];

export async function on_select_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  const selectedItemsObj = sessionData.selected_items as SelectedItems;
  console.log("Selected Items: ", selectedItemsObj);
  const catalog = RET12FASHION125Catalog;
  existingPayload.message.order.items = selectedItemsObj.map((item) => {
    return {
      id: item.id,
      fulfillment_id: "F1",
    };
  });
  const catalogItems = catalog.catalog["bpp/providers"][0].items.filter((i) => {
    console.log("Catalog Item: ", i.id);
    const idMap = selectedItemsObj.map((item) => item.id);
    console.log("ID Map: ", idMap);
    return idMap.includes(i.id);
  });
  console.log("Catalog Items: ", catalogItems);
  let totalPrice = 496.75;
  const breakupObject = [];
  for (const i of catalogItems) {
    const quantity =
      selectedItemsObj?.find((item) => item.id === i.id)?.quantity.count ?? 1;
    const price = parseFloat(i.price.value) * quantity;
    console.log("Price: ", price	, i.price.value);
    totalPrice += price;
    const item = structuredClone(breakupItem);
    item["@ondc/org/item_id"] = i.id    ;
    item["@ondc/org/item_quantity"].count = quantity;
    item.title = i.descriptor.name;
    item.price.value = `${price.toFixed(2)}`;
    item.item.price.value = i.price.value;
    item.item.quantity.available = i.quantity.available;
    item.item.quantity.maximum = i.quantity.maximum;
    console.log("item: ", item);
    breakupObject.push(item);
  }
  breakupObject.push(breakup[0]);
  breakupObject.push(breakup[1]);
  existingPayload.message.order.quote.breakup = breakupObject;
  existingPayload.message.order.quote.price.value = `${totalPrice.toFixed(2)}`;
  console.log("existingPayload", JSON.stringify(existingPayload));
  return existingPayload;
}
