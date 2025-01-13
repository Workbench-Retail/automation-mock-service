import { SessionData } from "../../session-types"


export async function onStatusActiveGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload.message.order.payments = sessionData.updated_payments
    existingPayload.message.order.items = sessionData.items
    existingPayload.message.order.fulfillments = sessionData.fulfillments
    existingPayload.message.order.quote = sessionData.quote
    existingPayload.message.order.id = sessionData.order_id
    existingPayload.message.order.status = "ACTIVE"
    return existingPayload;
}