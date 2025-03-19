import { searchGenerator } from "./search/generator";
import { initGenerator } from "./init/generator";
import { confirmGenerator } from "./confirm/generator";
import { updateGenerator } from "./update/generator";
import { trackGenerator } from "./track/generator";

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
    default:
      throw new Error(`Invalid request type ${action_id}`);
  }
}
