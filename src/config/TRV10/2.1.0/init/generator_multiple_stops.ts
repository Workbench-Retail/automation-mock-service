import { SessionData } from "../../session-types";

const customer = {
    "contact": {
        "phone": "9876556789"
    },
    "person": {
        "name": "Joe Adams"
    }
}
export async function initGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload.order.fulfillments = sessionData.fulfillments
    existingPayload.order.fulfillments[0]["customer"] = customer
    delete existingPayload.order.fulfillments[0].type
    existingPayload.order.items[0] = {
        id : sessionData.selected_item_id 
    }
    return existingPayload;
}