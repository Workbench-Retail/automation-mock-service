import { SessionData } from "../../session-types";

export async function onSearchMultipleStopsGenerator(existingPayload: any, sessionData: SessionData) {
    console.log(existingPayload.message.catalog.providers[0].fulfillments)
    for(let fulfillment of existingPayload.message.catalog.providers[0].fulfillments){
        fulfillment.stops = sessionData.stops
    }
    return existingPayload;
}