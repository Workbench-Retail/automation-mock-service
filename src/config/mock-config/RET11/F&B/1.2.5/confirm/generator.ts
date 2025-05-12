import { SessionData } from "../../../session-types";

export const confirmGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
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

  if (sessionData.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;
  }

  existingPayload.message.order.payment = {
    uri: "https://ondc.transaction.com/payment",
    tl_method: "http/get",
    params: {
      currency: "INR",
      transaction_id: "3937",
      amount: sessionData.quote.price.value,
    },
    status: "PAID",
    type: "ON-ORDER",
    collected_by: "BAP",
    "@ondc/org/settlement_basis": "delivery",
    "@ondc/org/settlement_window": "P1D",
    "@ondc/org/withholding_amount": "10.00",
    ...sessionData.payment,
  };

  existingPayload.message.order.created_at = existingPayload.context.timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  return existingPayload;
};
