import { SessionData } from "../../session-types";

export async function onSearchMultipleStopsGenerator(existingPayload: any, sessionData: SessionData) {
    for(const fulfillment of existingPayload.catalog.providers.fulfillments){
        fulfillment.stops = sessionData.stops
    }
    return existingPayload;
}