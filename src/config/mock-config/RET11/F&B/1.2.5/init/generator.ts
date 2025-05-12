import { SessionData } from "../../../session-types";

export async function initGenerator(
  existingPayload: any,
  sessionData: SessionData
) {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  existingPayload.message.order.billing.created_at =
    existingPayload.context.timestamp;
  existingPayload.message.order.billing.updated_at =
    existingPayload.context.timestamp;

  if (sessionData.select_fulfillment) {
    existingPayload.message.order.fulfillments[0] = {
      id: sessionData?.fulfillments[0].id,
      type: sessionData.fulfillments[0].type,
      end: {
        location: {
          gps: sessionData?.select_fulfillment[0].end.location.gps,
          address: existingPayload.message.order.billing.address,
        },
        contact: {
          phone: "9886098860",
        },
      },
    };
  }

  return existingPayload;
}
