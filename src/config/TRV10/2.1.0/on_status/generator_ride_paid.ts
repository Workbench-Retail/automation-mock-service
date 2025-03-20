import { SessionData } from "../../session-types";
import { onStatusMultipleStopsGenerator } from "./generator_multiple_stops";

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
    existingPayload = onStatusMultipleStopsGenerator(existingPayload,sessionData)
    existingPayload.message.order = updatePaymentFromQuote(existingPayload.message.order)
    return existingPayload;
}