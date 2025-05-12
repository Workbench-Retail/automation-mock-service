import { SessionData } from "../../../session-types";

export const onSelectGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  const breakup: any = [];
  let totalPrice = 0;

  sessionData.items.forEach((item: any) => {
    const initialItemsData: any = sessionData?.on_search_items?.filter(
      (on_search_item) => on_search_item.id === item.id
    )[0];

    totalPrice += parseInt(initialItemsData.price.value);

    console.log("iinitalalsd", initialItemsData);
    breakup.push({
      "@ondc/org/item_id": item.id,
      "@ondc/org/item_quantity": {
        count: 1,
      },
      title: initialItemsData.descriptor.name,
      "@ondc/org/title_type": "item", /// ??????
      price: {
        currency: "INR",
        value: initialItemsData.price.value, /// ??????
      },
      item: {
        parent_item_id: item.parent_item_id,
        quantity: {
          available: {
            count: initialItemsData.quantity.available,
          },
          maximum: {
            count: initialItemsData.quantity.maximum,
          },
        },
        price: {
          currency: "INR",
          value: initialItemsData.price.value, /// ?????????
        },
        tags: item.tags,
      },
    });
  });

  existingPayload.message.order.quote.price = {
    currency: "INR",
    value: totalPrice.toString(),
  };

  existingPayload.message.order.quote.breakup = breakup;

  return existingPayload;
};
