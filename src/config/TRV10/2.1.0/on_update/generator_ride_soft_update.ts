import { SessionData } from "../../session-types";
import { onUpdateMultipleStopsGenerator } from "./generator_multiple_stops";

function updateFulfillmentStatus(order: any) {
    // Check if fulfillments exist
    if (order.fulfillments) {
      order.fulfillments.forEach((fulfillment: any) => {
          fulfillment.state.descriptor.code = "RIDE_STARTED";
      });
    }
    return order;
  }

export async function onUpdateRideSoftUpdateGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload = await onUpdateMultipleStopsGenerator(existingPayload,sessionData)
    if(existingPayload.fulfillments){
      existingPayload.message.order = updateFulfillmentStatus(existingPayload.message.order)
    }
    existingPayload.message.order.status = "SOFT_UPDATE"
    return existingPayload;
}