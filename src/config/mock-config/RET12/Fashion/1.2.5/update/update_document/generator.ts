import { SessionData } from "../../../../session-types";

export const updateDocumentGenerator = (
  existingPayload: any,
  sessionData: SessionData
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
  }

  existingPayload.message.order.documents = [
    {
      url: "https://invoice_url",
      label: "Invoice",
    },
  ];

  existingPayload.message.order.created_at =
    sessionData.confirm_created_at_timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  return existingPayload;
};
