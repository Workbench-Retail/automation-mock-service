import { SessionData } from "../../../session-types";

export const onInitGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.provider.id = sessionData.provider_id;
  existingPayload.message.order.provider.locations[0].id =
    sessionData.location_id;

  const tempItems = sessionData.items;
  delete tempItems.category_id;
  delete tempItems.descriptor;

  existingPayload.message.order.items = tempItems;
  existingPayload.message.order.fulfillments = sessionData.fulfillments;

  existingPayload.message.order.quote = {
    price: {
      currency: "INR",
      value: "59.00",
    },
    breakup: [
      {
        "@ondc/org/item_id": sessionData.items[0].id,
        "@ondc/org/title_type": "delivery",
        price: {
          currency: "INR",
          value: "50.00",
        },
      },
      {
        "@ondc/org/item_id": sessionData.items[0].id,
        "@ondc/org/title_type": "tax",
        price: {
          currency: "INR",
          value: "9.00",
        },
      },
    ],
    ttl: "PT15M",
  };

  existingPayload.message.order.fulfillments[0].tags.push({
    code: "rider_check",
    list: [
      {
        code: "inline_check_for_rider",
        value: "yes",
      },
    ],
  });

  return existingPayload;
};
