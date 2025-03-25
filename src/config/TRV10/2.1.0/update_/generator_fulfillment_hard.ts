import { SessionData } from "../../session-types";

export async function updateFulfillmentHardGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload.message.order.id = sessionData.order_id
    existingPayload.message.order.status = "CONFIRM_UPDATE"
    return existingPayload;
}