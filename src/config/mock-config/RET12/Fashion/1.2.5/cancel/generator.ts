import { SessionData, Input } from "../../../session-types";

export const cancelGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData?.order_id) {
    existingPayload.message.order_id = sessionData.order_id;
  }

  return existingPayload;
};
