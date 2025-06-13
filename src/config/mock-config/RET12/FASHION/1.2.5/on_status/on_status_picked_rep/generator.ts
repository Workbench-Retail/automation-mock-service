import { createFulfillments } from "../../api-objects/fulfillments";
import { createGenericOnStatus } from "../../api-objects/on_status";

export async function on_status_picked_rep_generator(existingPayload: any, sessionData: any) {
     const generalPayload = createGenericOnStatus(existingPayload, sessionData);
      generalPayload.message.order.fulfillments = createFulfillments(
        "on_status",
        "on_status_picked",
        sessionData,
        generalPayload.message.order.fulfillments
      );
      return generalPayload;
}
