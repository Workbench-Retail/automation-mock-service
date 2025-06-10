import { SessionData } from "../../../../session-types";
import { createGenericOnStatus } from "../on_status_pending/generator";

export async function on_status_picked_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  const generalPayload = createGenericOnStatus(existingPayload, sessionData);
  generalPayload.message.order.fulfillments = sessionData.fulfillments;
  generalPayload.message.order.fulfillments[0].start.time.timestamp =
    generalPayload.context.timestamp;
  return generalPayload;
}
