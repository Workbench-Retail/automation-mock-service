import { searchGenerator } from "./search/generator";
import { initGenerator } from "./init/generator";
import { confirmGenerator } from "./confirm/generator";
import { updateGenerator } from "./update/generator";
import { trackGenerator } from "./track/generator";
import { onSearch1Generator } from "./on_search/generator";
import { onInitGenerator } from "./on_init/generator";
import { onConfirmGenerator } from "./on_confirm/generator";
import { onUpdateGenerator } from "./on_update/generator";
import { cancelGenerator } from "./cancel/generator";
import { onStatusGenerator } from "./on_status/generator";
import { onTrackGenerator } from "./on_track/generator";
import { onCancelGenerator } from "./on_cancel/generators";
import { statusGenerator } from "./status/generator";
import { search1Generator } from "./search/search_1/generator";
import { onUpdate1Generator } from "./on_update/on_update_1/generator";

export async function Generator(
  action_id: string,
  existingPayload: any,
  sessionData: any,
  inputs?: Record<string, string>
) {
  console.log("inside generator");
  switch (action_id) {
    case "search_LOGISTICS":
      return await searchGenerator(existingPayload, sessionData, inputs);
    case "init_LOGISTICS":
      return await initGenerator(existingPayload, sessionData);
    case "confirm_LOGISTICS":
      return await confirmGenerator(existingPayload, sessionData);
    case "update_LOGISTICS":
      return await updateGenerator(existingPayload, sessionData);
    case "track_LOGISTICS":
      return await trackGenerator(existingPayload, sessionData);
    case "cancel_LOGISTICS":
      return await cancelGenerator(existingPayload, sessionData);
    case "on_search_LOGISTICS":
      return await onSearch1Generator(existingPayload, sessionData, inputs);
    case "on_init_LOGISTICS":
      return await onInitGenerator(existingPayload, sessionData);
    case "on_confirm_LOGISTICS":
      return await onConfirmGenerator(existingPayload, sessionData);
    case "on_update_LOGISTICS":
      return await onUpdateGenerator(existingPayload, sessionData);
    case "on_status_LOGISTICS":
      return await onStatusGenerator(existingPayload, sessionData);
    case "on_status_1_LOGISTICS":
      return await onStatusGenerator(existingPayload, {
        ...sessionData,
        stateCode: "Order-picked-up",
      });
    case "on_status_2_LOGISTICS":
      return await onStatusGenerator(existingPayload, {
        ...sessionData,
        stateCode: "Out-for-delivery",
      });
    case "on_status_3_LOGISTICS":
      return await onStatusGenerator(existingPayload, {
        ...sessionData,
        stateCode: "Order-delivered",
      });
    case "on_status_4_LOGISTICS":
      return await onStatusGenerator(existingPayload, {
        ...sessionData,
        stateCode: "RTO-Delivered",
      });
    case "on_status_5_LOGISTICS":
      return await onStatusGenerator(existingPayload, {
        ...sessionData,
        stateCode: "At-pickup",
      });
    case "on_status_6_LOGISTICS":
      return await onStatusGenerator(existingPayload, {
        ...sessionData,
        stateCode: "At-destination-hub",
      });
    case "on_status_7_LOGISTICS":
      return await onStatusGenerator(existingPayload, {
        ...sessionData,
        stateCode: "In-transit",
      });
    case "on_track_LOGISTICS":
      return await onTrackGenerator(existingPayload, sessionData);
    case "on_cancel_LOGISTICS":
      return await onCancelGenerator(existingPayload, sessionData);
    case "status_LOGISTICS":
      return await statusGenerator(existingPayload, sessionData);
    case "search_1_LOGISITCS":
      return await search1Generator(existingPayload, sessionData);
    case "on_update_1_LOGISTICS":
      return await onUpdate1Generator(existingPayload, sessionData);
    default:
      throw new Error(`Invalid request type ${action_id}`);
  }
}
