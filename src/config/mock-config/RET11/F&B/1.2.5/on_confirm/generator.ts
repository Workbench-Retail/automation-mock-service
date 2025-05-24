import { SessionData } from "../../../session-types";

export const onConfirmGenerator = (
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

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (sessionData.fulfillments) {
    existingPayload.message.order.fulfillments[0] = {
      state: {
        descriptor: {
          code: "Pending",
        },
      },
      start: {
        location: {
          id: "L1",
          descriptor: {
            name: "ABC Store",
          },
          gps: "12.9563,77.6368",
          address: {
            locality: "Jayanagar",
            city: "Bengaluru",
            area_code: "560076",
            state: "KA",
          },
        },
        contact: {
          phone: "9886098860",
          email: "nobody@nomail.com",
        },
      },
      ...sessionData.fulfillments[0],
    };
  }

  existingPayload.message.order.created_at = sessionData.confirm_created_at_timestamp
  existingPayload.message.order.updated_at = existingPayload.context.timestamp

  return existingPayload;
};
