import { SessionData, Input } from "../../../../session-types";

export const onUpdateReturnGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  action_id: string
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }

  if (sessionData.order_state) {
    existingPayload.message.order.state = sessionData.order_state;
  }

  if (sessionData.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  if (sessionData.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  if (sessionData.quote) {
    existingPayload.message.order.quote = sessionData.quote;
  }

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (sessionData.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;

    if (
      sessionData.update_return_fulfillments &&
      action_id === "on_update_return_intermin"
    ) {
      existingPayload.message.order.fulfillments.push({
        id: "R1",
        type: "Return",
        state: {
          descriptor: {
            code: "Return_Initiated",
          },
        },
        tags: sessionData.update_return_fulfillments[0].tags,
      });
    }

    if (
      sessionData.update_return_fulfillments &&
      action_id === "on_update_return_final"
    ) {
      const quoteTrailTag: any[] = [];

      sessionData.quote.breakup.forEach((item: any) => {
        if (item["@ondc/org/item_id"] === sessionData.return_item_id) {
          quoteTrailTag.push({
            code: "quote_trail",
            list: [
              {
                code: "type",
                value: item["@ondc/org/title_type"],
              },
              {
                code: "id",
                value: sessionData.return_item_id,
              },
              {
                code: "currency",
                value: "INR",
              },
              {
                code: "value",
                value:
                  item["@ondc/org/title_type"] !== "item"
                    ? "-" + item.price.value
                    : "-" +
                      (
                        parseInt(item.item.price.value) *
                        parseInt(sessionData.return_item_count || "1")
                      ).toString(),
              },
            ],
          });
        }
      });

      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillment: any) => {
          if (fulfillment.type === "Return") {
            return {
              id: "R1",
              type: "Return",
              state: {
                descriptor: {
                  code: "Liquidated",
                },
              },
              tags: [
                ...sessionData?.update_return_fulfillments?.[0]?.tags,
                ...quoteTrailTag,
              ],
            };
          }

          return fulfillment;
        });
    }
  }

  return existingPayload;
};
