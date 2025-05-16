import { SessionData, Input } from "../../../../session-types";

export const updateBuyerInstGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }
  return existingPayload;
};
