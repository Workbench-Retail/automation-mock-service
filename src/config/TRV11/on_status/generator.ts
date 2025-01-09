import { SessionData } from "../session-types"


export async function onStatusGenerator(existingPayload: any,sessionData: SessionData){
    // console.log(sessionData)
    existingPayload.message.order.payments = sessionData.updated_payments
    existingPayload.message.order.items = sessionData.items
    existingPayload.message.order.fulfillments = sessionData.fulfillments
    existingPayload.message.order.quote = sessionData.quote
    existingPayload.message.order.id = sessionData.order_id
    existingPayload.message.order.status = sessionData.status
    return existingPayload;
}