import { SessionData } from "../../session-types";

const customer = {
    "contact": {
        "phone": "9876556789"
    },
    "person": {
        "name": "Joe Adams"
    }
}
export async function initMultipleStopsGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload.message.order.fulfillments = sessionData.selected_fulfillments
    console.log("In this func",sessionData)
    delete existingPayload.message.order.fulfillments[0].type
    existingPayload.message.order.items[0] = {
        id : sessionData.selected_item_id 
    }
    return existingPayload;
}