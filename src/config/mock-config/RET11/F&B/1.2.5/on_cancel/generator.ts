import { SessionData, Input } from "../../../session-types";
import { generateQuoteTrail } from "../../../../../../utils/generic-utils";

export const onCancelGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData?.order_id) {
    existingPayload.message.order_id = sessionData.order_id;
  }

  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  existingPayload.message.order.cancellation = {
    cancelled_by: existingPayload.context.bap_id,
    reason: {
      id: sessionData?.cancellation_reason_id || "002",
    },
  };

  let newItems: any = [];

  sessionData.items.forEach((item: any) => {
    newItems.push({
      ...item,
      fulfillment_id: item.fulfillment_id,
      quantity: {
        count: 0,
      },
    });
    newItems.push({
      ...item,
      fulfillment_id: "C1",
      quantity: {
        count: item.quantity.count,
      },
    });
  });

  existingPayload.message.order.items = newItems;

  if (sessionData.fulfillments) {
    existingPayload.message.order.fulfillments[0] = {
      ...sessionData.fulfillments[0],
      state: {
        descriptor: {
          code: "Cancelled",
        },
      },
      tags: [
        {
          code: "cancel_request",
          list: [
            {
              code: "reason_id",
              value: sessionData?.cancellation_reason_id || "002",
            },
            {
              code: "initiated_by",
              value: existingPayload.context.bap_id,
            },
          ],
        },
        {
          code: "precancel_state",
          list: [
            {
              code: "fulfillment_state",
              value: sessionData.fulfillments[0].state.descriptor.code,
            },
            {
              code: "updated_at",
              value: existingPayload.context.timestamp,
            },
          ],
        },
      ],
    };

    existingPayload.message.order.fulfillments[1] = {
      id: "C1",
      type: "Cancel",
      state: {
        descriptor: {
          code: "Cancelled",
        },
      },
      tags: generateQuoteTrail(sessionData.quote.breakup, {}),
    };
  }

  if (sessionData.quote) {
    let newTotalPrice = 0;
    existingPayload.message.order.quote.breakup = sessionData.quote.breakup.map(
      (item: any) => {
        if (item["@ondc/org/title_type"] === "item") {
          return {
            ...item,
            "@ondc/org/item_quantity": { count: 0 },
            price: { currency: "INR", value: "0.00" },
          };
        } else if (item["@ondc/org/title_type"] === "tax") {
          return {
            ...item,
            price: { currency: "INR", value: "0.00" },
          };
        } else {
          newTotalPrice += parseInt(item.price.value);
          return item;
        }
      }
    );
    existingPayload.message.order.quote.price.value = newTotalPrice.toString();
  }

  existingPayload.message.order.created_at = existingPayload.context.timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  return existingPayload;
};
