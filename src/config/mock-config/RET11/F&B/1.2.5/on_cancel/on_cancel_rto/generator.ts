import { SessionData, Input } from "../../../../session-types";
import {
  generateQuoteTrail,
  buildRetailQuote,
} from "../../../../../../../utils/generic-utils";

export const onCancelRTOGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.state = "Cancelled";

  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
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

  const updatedItems: any = [];

  if (sessionData.items) {
    const fulfillmentId = sessionData.fulfillments?.find(
      (fulfillment) => fulfillment.type === "Delivery"
    ).id;

    sessionData.items.forEach((item: any) => {
      if (item.fulfillment_id === fulfillmentId) {
        updatedItems.push({
          ...item,
          quantity: {
            count: 0,
          },
        });
        updatedItems.push({
          ...item,
          fulfillment_id: "F1-RTO",
          parent_item_id: `${item.parent_item_id}-RTO`,
        });
      } else {
        updatedItems.push(item);
      }
    });

    existingPayload.message.order.items = updatedItems;
  }

  let startFulfillment: any = {};
  let endFulfillment: any = {};

  existingPayload.message.order.fulfillments =
    existingPayload.message.order.fulfillments.map((fulfillment: any) => {
      if (fulfillment.type === "Delivery") {
        startFulfillment = fulfillment.start;
        endFulfillment = fulfillment.end;
        return {
          ...fulfillment,
          state: {
            descriptor: {
              code: "Cancelled",
            },
            tags: [
              ...fulfillment?.tags,
              {
                code: "cancel_request",
                list: [
                  {
                    code: "rto_id",
                    value: "F1-RTO",
                  },
                  {
                    code: "reason_id",
                    value: "013",
                  },
                  {
                    code: "initiated_by",
                    value: "lsp.com",
                  },
                ],
              },
              {
                code: "precancel_state",
                list: [
                  {
                    code: "fulfillment_state",
                    value: "Order-picked-up",
                  },
                  {
                    code: "updated_at",
                    value: existingPayload.context.timestamp,
                  },
                ],
              },
            ],
          },
        };
      } else {
        return fulfillment;
      }
    });

  existingPayload.message.order.fulfillments.push({
    id: "F1-RTO",
    type: "RTO",
    state: {
      descriptor: {
        code: "RTO-Initiated",
      },
    },
    start: endFulfillment,
    end: startFulfillment,
    tags: generateQuoteTrail(sessionData.quote.breakup, {
      fulfillmentState: "POST",
      isRTO: true,
    }),
  });

  existingPayload.message.order.quote = buildRetailQuote(
    updatedItems,
    sessionData.on_search_items,
    existingPayload.message.order.fulfillments
  );

  existingPayload.message.order.created_at = existingPayload.context.timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  return existingPayload;
};
