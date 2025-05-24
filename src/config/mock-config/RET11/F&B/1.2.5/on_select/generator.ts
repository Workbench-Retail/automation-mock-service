import { SessionData } from "../../../session-types";

type TagEntry = {
  code: string;
  value: string;
};

type Tag = {
  code: string;
  list: TagEntry[];
};

function getTagType(tags: Tag[]): string | undefined {
  const typeTag = tags.find((tag) => tag.code === "type");

  if (!typeTag) return undefined;

  const typeEntry = typeTag.list.find((entry) => entry.code === "type");

  return typeEntry?.value;
}

export const onSelectGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  const tempItems = JSON.parse(JSON.stringify(sessionData.items));

  if (sessionData?.items && sessionData?.select_fulfillment?.length) {
    existingPayload.message.order.items = tempItems.map((item: any) => {
      delete item.quantity;
      return {
        ...item,
        fulfillment_id: existingPayload.message.order.fulfillments?.find(
          (fulfillment: any) => fulfillment.type === "Delivery"
        )?.id,
      };
    });
  }

  let breakup: any = [];
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
            count: initialItemsData.quantity.available.count,
          },
          maximum: {
            count: initialItemsData.quantity.maximum.count,
          },
        },
        price: {
          currency: "INR",
          value: initialItemsData.price.value, /// ?????????
        },
        tags: item.tags,
      },
    });

    const type = getTagType(item.tags);
    const taxPrice = (parseInt(initialItemsData.price.value) * 0.05).toString();

    totalPrice += parseInt(taxPrice);

    breakup.push({
      "@ondc/org/item_id": item.id,
      title: "Tax",
      "@ondc/org/title_type": "tax",
      price: {
        currency: "INR",
        value: taxPrice,
      },
      item: {
        parent_item_id: item.parent_item_id,
        tags: item.tags,
      },
    });
  });

  const deliveryBreakup = [
    {
      "@ondc/org/item_id": "F1",
      title: "Delivery charges",
      "@ondc/org/title_type": "delivery",
      price: {
        currency: "INR",
        value: "50.00",
      },
    },
    {
      "@ondc/org/item_id": "F1",
      title: "Packing charges",
      "@ondc/org/title_type": "packing",
      price: {
        currency: "INR",
        value: "25.00",
      },
    },
  ];

  breakup = [...breakup, ...deliveryBreakup];

  totalPrice += 75;

  existingPayload.message.order.quote.price = {
    currency: "INR",
    value: totalPrice.toString(),
  };

  existingPayload.message.order.quote.breakup = breakup;

  return existingPayload;
};
