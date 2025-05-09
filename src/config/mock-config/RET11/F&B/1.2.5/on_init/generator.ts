import { SessionData } from "../../../session-types";

export async function onInitGenerator(
  existingPayload: any,
  sessionData: SessionData
) {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  if (sessionData?.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  if (sessionData?.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;
  }

  if (sessionData?.quote) {
    existingPayload.message.order.quote = sessionData.quote;
  }

  return existingPayload;
}
