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

  return existingPayload;
};
