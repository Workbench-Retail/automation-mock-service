import { SessionData } from "../../session-types";
import { onUpdateMultipleStopsGenerator } from "./generator_multiple_stops";

export async function onUpdateUpdateQuoteGenerator(existingPayload: any,sessionData: SessionData){
    existingPayload = await onUpdateMultipleStopsGenerator(existingPayload,sessionData)
    if(sessionData.quote != null){
    existingPayload.message.order.quote = sessionData.update_quote
    }
    console.log(existingPayload.message)
    existingPayload.message.order.status = "RIDE_ENDED"
    return existingPayload;
}