import { v4 as uuidv4 } from "uuid";
import { SessionData } from "../../../session-types";

export const confirmGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.id = uuidv4();

  existingPayload.message.order.provider.id = sessionData.provider_id;
  existingPayload.message.order.provider.locations[0].id =
    sessionData.location_id;

  existingPayload.message.order.items[0].category_id = sessionData.category_id;
  existingPayload.message.order.items[0].descriptor.code =
    sessionData.shipment_method;

  //create item
  //   existingPayload.

  // upate created at and update at at the root
  existingPayload.message.order.create_at = new Date().toISOString();
  existingPayload.message.order.updated_at = new Date().toISOString();

  return existingPayload;
};
