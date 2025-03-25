import { SessionData } from "../../session-types";

export async function onUpdateMultipleStopsGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload = onUpdateMultipleStopsGenerator(existingPayload,sessionData)
    if(sessionData.quote != null){
    existingPayload.message.order.quote = sessionData.update_quote
    }
    return existingPayload;
}