import { SessionData } from "../../session-types";

export async function onSearchMultipleStopsRentalGenerator(existingPayload: any, sessionData: SessionData) {
    console.log(existingPayload.message.catalog.providers[0].fulfillments)
    for(let fulfillment of existingPayload.message.catalog.providers[0].fulfillments){
        if(fulfillment.type === "START"){
            fulfillment.stops = sessionData.stops
        }
    }
    return existingPayload;
}