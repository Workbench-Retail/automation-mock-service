import { populateFulfillmentConfim } from "../common_generator";
import { SessionData } from "../../../session-types";

export const onConfirmGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.id = sessionData.order_id;

  if (sessionData?.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  existingPayload.message.order.items = sessionData?.items;

  if (sessionData?.confirm_create_at_timestamp) {
    existingPayload.message.order.created_at =
      sessionData.confirm_create_at_timestamp;
  }
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  if (sessionData?.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;
  }
  existingPayload = populateFulfillmentConfim(existingPayload, sessionData);

  existingPayload.message.order.fulfillments =
    existingPayload.message.order.fulfillments.map((fulfillmet: any) => {
      fulfillmet.state = {
        descriptor: {
          code: "Pending",
        },
      };
      fulfillmet.tags.push({
        code: "weather_check",
        list: [
          {
            code: "raining",
            value: "no",
          },
        ],
      });

      return fulfillmet;
    });

  existingPayload.message.order.quote = sessionData.quote;

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (
    sessionData.payment_type === "ON-ORDER" &&
    existingPayload.message.order.payment.collected_by === "BPP"
  ) {
    existingPayload.message.order.payment.params = {
      currency: "INR",
      transaction_id: "txn1234",
      amount: existingPayload.message.order.quote.price.value,
    };
    existingPayload.message.order.payment.tags = [
      {
        code: "wallet_balance",
        list: [
          {
            code: "currency",
            value: "INR",
          },
          {
            code: "value",
            value: (
              5000 -
              parseInt(
                existingPayload.message.order.quote.price.value || "4850"
              )
            ).toString(),
          },
        ],
      },
    ];
  }

  return existingPayload;
};
