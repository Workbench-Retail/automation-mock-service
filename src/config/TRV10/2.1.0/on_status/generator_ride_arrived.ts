import { SessionData } from "../../session-types";
import { onStatusMultipleStopsGenerator } from "./generator_multiple_stops";

function updateFulfillmentStatus(order: any) {
    // Check if fulfillments exist
    if (order.fulfillments) {
      order.fulfillments.forEach((fulfillment: any) => {
          fulfillment.state.descriptor.code = "RIDE_ARRIVED_PICKUP";
      });
    }
    return order;
  }

export async function onStatusRideArrivedGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload = await onStatusMultipleStopsGenerator(existingPayload,sessionData)
    existingPayload.message.order = updateFulfillmentStatus(existingPayload.message.order)
    if (existingPayload.message.order.fulfillments[0]["_EXTERNAL"]){
      delete existingPayload.message.order.fulfillments[0]["_EXTERNAL"]
    }
    existingPayload.message.order.payments = sessionData.payments
    if (existingPayload.message.order.payments[0]["_EXTERNAL"]){
      delete existingPayload.message.order.payments[0]["_EXTERNAL"]
    }
    return existingPayload;
}