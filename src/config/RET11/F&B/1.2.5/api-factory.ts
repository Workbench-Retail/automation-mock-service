import { searchGenerator } from "./search/generator";
import { onSearchGenerator } from "./on_search/generator";

export async function Generator(
  action_id: string,
  existingPayload: any,
  sessionData: any,
  inputs?: Record<string, string>
) {
  console.log("inside generator");
  switch (action_id) {
    case "search":
      return await searchGenerator(existingPayload, sessionData);
    case "on_search":
      return await onSearchGenerator(existingPayload, sessionData);
    default:
      throw new Error(`Invalid request type ${action_id}`);
  }
}
