import { SessionData } from "../../../../session-types";

export async function on_status_pending_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  const generalPayload = createGenericOnStatus(existingPayload, sessionData);
  const timestamp = new Date(generalPayload.context.timestamp);
  const oneDay = 1 * 24 * 60 * 60 * 1000;
  generalPayload.message.order.fulfillments[0].start.time.range = {
    start: new Date(timestamp.getTime()),
    end: new Date(timestamp.getTime() + oneDay),
  };
  generalPayload.message.order.fulfillments[0].end.time.range = {
    start: new Date(timestamp.getTime() + oneDay),
    end: new Date(timestamp.getTime() + 2 * oneDay),
  };

  return generalPayload;
}

export function createGenericOnStatus(
  existingPayload: any,
  sessionData: SessionData
) {
  const timeIso = new Date().toISOString();
  existingPayload.message.order.created_at =
    sessionData.confirm_created_at_timestamp;
  existingPayload.message.order.updated_at = timeIso;
  existingPayload.message.order.id = sessionData.order_id;
  existingPayload.message.order.billing = sessionData.billing;
  existingPayload.message.order.items = sessionData.items;
  existingPayload.message.order.provider = sessionData.provider;
  existingPayload.message.order.quote = sessionData.quote;
  existingPayload.message.order.payment = sessionData.payment;

  return existingPayload;
}
