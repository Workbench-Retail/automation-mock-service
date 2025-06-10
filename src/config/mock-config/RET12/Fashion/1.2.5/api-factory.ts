import { searchGenerator } from "./search/generator";
import { searchIncGenerator } from "./search/search_inc/generator";
import { searchIncStopGenerator } from "./search/search_inc_stop/generator";
import { onSearchGenerator } from "./on_search/generator";
import { onSearchIncGenerator } from "./on_search/on_search_inc/generator";
import { onSearchIncDisableGenerator } from "./on_search/on_search_inc_disable/generator";

export async function Generator(
  action_id: string,
  existingPayload: any,
  sessionData: any,
  inputs?: Record<string, string>
) {
  switch (action_id) {
    case "search":
      return await searchGenerator(existingPayload, sessionData, inputs);
    case "search_inc":
      return await searchIncGenerator(existingPayload, sessionData, inputs);
    case "search_inc_stop":
      return await searchIncStopGenerator(existingPayload, sessionData);
    case "on_search":
      return await onSearchGenerator(existingPayload, sessionData, inputs);
    case "on_search_inc":
      return await onSearchIncGenerator(existingPayload, sessionData);
    case "on_search_inc_disable":
      return await onSearchIncDisableGenerator(existingPayload, sessionData);
    default:
      throw new Error(`Invalid request type ${action_id}`);
  }
}
