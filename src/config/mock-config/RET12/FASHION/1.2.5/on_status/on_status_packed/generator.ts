import { SessionData } from "../../../../session-types";
import { createGenericOnStatus } from "../on_status_pending/generator";

export async function on_status_packed_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  const generalPayload = createGenericOnStatus(existingPayload, sessionData);
  generalPayload.message.order.fulfillments = sessionData.fulfillments;
  return generalPayload;
}
