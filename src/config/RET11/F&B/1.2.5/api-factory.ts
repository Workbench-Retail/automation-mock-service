import { searchGenerator } from "./search/generator";
import { onSearchGenerator } from "./on_search/generator";
import { search1Generator } from "./search/search_1/generator";
import { onSearch1Generator } from "./on_search/on_search_1/generator";
import { onSearch2Generator } from "./on_search/on_search_2/generator";

export async function Generator(
  action_id: string,
  existingPayload: any,
  sessionData: any,
  inputs?: Record<string, string>
) {
  switch (action_id) {
    case "search":
      return await searchGenerator(existingPayload, sessionData);
    case "on_search":
      return await onSearchGenerator(existingPayload, sessionData);
    case "search_1":
      return await search1Generator(existingPayload, sessionData, inputs);
    case "on_search_1":
      return await onSearch1Generator(existingPayload, sessionData);
    case "on_search_2":
      return await onSearch2Generator(existingPayload, sessionData);
    default:
      throw new Error(`Invalid request type ${action_id}`);
  }
}
