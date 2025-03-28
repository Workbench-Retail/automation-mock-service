import { SessionData } from "../../../session-types";

export const onCancelGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.id = sessionData.order_id;
  existingPayload.message.order.fulfillments[0].start.time.timestamp =
    sessionData.fulfillment_pickup_timestamp;
  return existingPayload;
};
