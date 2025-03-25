import { SessionData } from "../../session-types";
import { onStatusMultipleStopsGenerator } from "./generator_multiple_stops";


function updateFulfillmentStatus(order: any) {
  // Check if fulfillments exist
  if (order.fulfillments) {
    order.fulfillments.forEach((fulfillment: any) => {
        fulfillment.state.descriptor.code = "RIDE_ENDED";
    });
  }
  return order;
}

function updatePaymentFromQuote(order: any) {

    const amount = order.quote.price.value; // Extract amount from quote
  
    if (order.payments) {
      order.payments.forEach((payment: any) => {
          payment.params = { amount: amount }; // Set amount from quote
          payment.status = "PAID"; // Change status to PAID
      });
    }
  
    return order;
  }
export async function onStatusRidePaidGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload = await onStatusMultipleStopsGenerator(existingPayload,sessionData)
    existingPayload.message.order = updatePaymentFromQuote(existingPayload.message.order)
    existingPayload.message.order = updateFulfillmentStatus(existingPayload.message.order)
    return existingPayload;
}