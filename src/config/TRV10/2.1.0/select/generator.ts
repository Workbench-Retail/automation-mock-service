import { SessionData } from "../../session-types";
function getRandomId(items: any[]): number {
    if (items.length === 0) throw new Error("Array is empty");
  
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
export async function selectMultipleStopsGenerator(existingPayload: any, sessionData: SessionData) {
    const item_ids = sessionData.item_ids
    const item_id = getRandomId(item_ids)
    existingPayload.order.items[0].id = item_id
    return existingPayload;
}