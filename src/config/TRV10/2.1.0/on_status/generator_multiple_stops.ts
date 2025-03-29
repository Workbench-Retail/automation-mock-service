import { SessionData } from "../../session-types";

export async function onStatusMultipleStopsGenerator(existingPayload: any,sessionData: SessionData){
    if (sessionData.updated_payments.length > 0) {
        existingPayload.message.order.payments = sessionData.payments;
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
    if (existingPayload.message.order.fulfillments[0]["_EXTERNAL"]){
      delete existingPayload.message.order.fulfillments[0]["_EXTERNAL"]
    }
    existingPayload.message.order.payments = sessionData.payments
    if (existingPayload.message.order.payments[0]["_EXTERNAL"]){
        delete existingPayload.message.order.payments[0]["_EXTERNAL"]
    }
    return existingPayload;
}