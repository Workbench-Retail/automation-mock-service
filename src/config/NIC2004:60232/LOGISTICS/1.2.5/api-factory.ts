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

export async function Generator(
  action_id: string,
  existingPayload: any,
  sessionData: any
) {
  switch (action_id) {
    case "search_LOGISTICS":
      return await searchGenerator(existingPayload, sessionData);
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
      return await onSearch1Generator(existingPayload, sessionData);
    case "on_init_LOGISTICS":
      return await onInitGenerator(existingPayload, sessionData);
    case "on_confirm_LOGISTICS":
      return await onConfirmGenerator(existingPayload, sessionData);
    case "on_udpate_LOGISTICS":
      return await onUpdateGenerator(existingPayload, sessionData);
    default:
      throw new Error(`Invalid request type ${action_id}`);
  }
}
