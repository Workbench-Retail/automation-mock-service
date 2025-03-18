import { SessionData } from "../../session-types";

const customer = {
    "contact": {
        "phone": "9876556789"
    },
    "person": {
        "name": "Joe Adams"
    }
}

export async function onInitMultipleStopsGenerator(
    existingPayload: any,
    sessionData: SessionData
) {
    const randomPaymentId = Math.random().toString(36).substring(2, 15);

    if (sessionData.items.length > 0) {
        existingPayload.message.order.items = sessionData.items;
        existingPayload.message.order.items[0]["payment_ids"] = [randomPaymentId]
    }
    if (sessionData.fulfillments.length > 0) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;
    existingPayload.order.fulfillments[0]["customer"] = customer
    existingPayload.message.order.fulfillments[0]["type"] = "DELIVERY"
    }
    if(sessionData.payments.length > 0){
        existingPayload.message.order.payments["id"] = randomPaymentId
        }
    if(sessionData.quote != null){
    existingPayload.message.order.quote = sessionData.quote
    }
    return existingPayload;
}
