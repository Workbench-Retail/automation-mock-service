import { SessionData } from "../../../../session-types";

export const updateSettlelmentGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }

  existingPayload.message.order.fulfillments[0].id =
    sessionData.fulfillments?.find(
      (fulfillment: any) => fulfillment.type === "Cancel"
    )?.id;

  return existingPayload;
};
