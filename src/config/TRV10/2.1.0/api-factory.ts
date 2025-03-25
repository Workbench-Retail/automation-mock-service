import { confirmMultipleStopsGenerator } from "./confirm/generator_multiple_stops";
import { initMultipleStopsGenerator } from "./init/generator_multiple_stops";
import { onConfirmMultipleStopsGenerator } from "./on_confirm/on_confirm_driver_assigned/generator_multiple_stops";
import { onInitMultipleStopsGenerator } from "./on_init/generator_multiple_stops";
import { onSearchMultipleStopsGenerator } from "./on_search/generator_multiple_stops";
import { onSelectMultipleStopsGenerator } from "./on_select/generator_multiple_stops";
import { onStatusRideArrivedGenerator } from "./on_status/generator_ride_arrived";
import { onStatusRidePaidGenerator } from "./on_status/generator_ride_paid";
import { onStatusRideEnrouteGenerator } from "./on_status/generator_ride_pickup";
import { onStatusRideStartedGenerator } from "./on_status/generator_ride_started";
import { onTrackMultipleStopsGenerator } from "./on_track/generator_multiple_stops";
import { onUpdateRideSoftUpdateGenerator } from "./on_update/generator_ride_soft_update";
import { onUpdateRideUpdatedGenerator } from "./on_update/generator_ride_updated";
import { searchMultipleStopsGenerator } from "./search/generator_multiple_stops";
import { selectMultipleStopsGenerator } from "./select/generator";
import { statusMultipleStopsGenerator } from "./status/generator_multiple_stops";
import { trackMultipleStopsGenerator } from "./track/generator_multiple_stops";
import { updateFulfillmentSoftGenerator } from "./update_/generator_fulfillment";
import { updateFulfillmentHardGenerator } from "./update_/generator_fulfillment_hard";


export async function Generator(
    action_id: string,
    existingPayload: any,
    sessionData: any
) {
    switch (action_id) {
        case "search":
            return await searchMultipleStopsGenerator(existingPayload, sessionData);
        case "on_search":
                return await onSearchMultipleStopsGenerator(existingPayload, sessionData);
        case "select":
            return await selectMultipleStopsGenerator(existingPayload, sessionData);
        case "on_select":
            return await onSelectMultipleStopsGenerator(existingPayload, sessionData);
        case "init":
            return await initMultipleStopsGenerator(existingPayload, sessionData);
        case "on_init":
            return await onInitMultipleStopsGenerator(existingPayload, sessionData);
        case "confirm":
            return await confirmMultipleStopsGenerator(existingPayload, sessionData);
        case "on_confirm":
            return await onConfirmMultipleStopsGenerator(existingPayload, sessionData);
        case "on_status_unsolicited":
            return await onStatusRideEnrouteGenerator(existingPayload, sessionData);
        case "track":
            return await trackMultipleStopsGenerator(existingPayload, sessionData);
        case "on_track":
            return await onTrackMultipleStopsGenerator(existingPayload, sessionData);
        case "on_status_ride_arrived":
            return await onStatusRideArrivedGenerator(existingPayload, sessionData);
        case "on_status_ride_started":
            return await onStatusRideStartedGenerator(existingPayload, sessionData);
        case "on_update":
            return await onStatusRideStartedGenerator(existingPayload, sessionData);
        case "status":
            return await statusMultipleStopsGenerator(existingPayload, sessionData);
        case "on_status_solicited":
            return await onStatusRidePaidGenerator(existingPayload, sessionData);
        case "update":
            return await updateFulfillmentSoftGenerator(existingPayload, sessionData);
        case "on_update_soft_update":
            return await onUpdateRideSoftUpdateGenerator(existingPayload, sessionData);
        case "update_hard":
            return await updateFulfillmentHardGenerator(existingPayload, sessionData);
        case "on_update_ride_updated":
            return await onUpdateRideUpdatedGenerator(existingPayload, sessionData);
        
            
            default:
                throw new Error(`Invalid request type ${action_id}`);
        }
}
