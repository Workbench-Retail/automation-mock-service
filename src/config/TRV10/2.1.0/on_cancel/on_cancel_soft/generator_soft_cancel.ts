import { SessionData } from "../../../session-types";

export async function onCancelSoftGenerator(existingPayload: any,sessionData: SessionData){
    if (sessionData.updated_payments.length > 0) {
      existingPayload.message.order.payments = sessionData.updated_payments;
      }
    
    if (sessionData.items.length > 0) {
    existingPayload.message.order.items = sessionData.items;
    }
  
    if (sessionData.fulfillments.length > 0) {
    existingPayload.message.order.fulfillments = sessionData.selected_fulfillments;
    }
    if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
    }
    if(sessionData.quote != null){
    existingPayload.message.order.quote = sessionData.quote
    }
    let quote  = existingPayload.message.order.quote
    const refund_price = existingPayload.message.order.quote.price.value
    quote.breakup.push({
      title: "CANCELLATION_CHARGES",
      price: {
          currency: "INR",
          value: "10"
      }
    },{
      title: "REFUND",
      price: {
          currency: "INR",
          value: String("-" + refund_price)
      }
      })
    existingPayload.message.order.quote.price = {currency: "INR",
      value: "10"}
    return existingPayload;
}