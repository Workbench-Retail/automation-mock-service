import { SessionData } from "../../session-types";
import { selectMultipleStopsGenerator } from "./generator";

function findItem(sessionData: any, itemId: string) {
    return sessionData?.items?.find((item: any) => item.id === itemId) || null;
  }
  
  function updateItemPrice(item: any, amount: number) {
    if (!item || !item.price || typeof item.price.value !== "string") return null;
  
    const updatedItem = { ...item }; // Create a new object to avoid mutation
    const currentPrice = parseFloat(updatedItem.price.value);
    updatedItem.price.value = (currentPrice + amount).toString();
  
    return updatedItem;
  }
  

export async function selectPreOrderBidGenerator(existingPayload: any, sessionData: SessionData) {
    existingPayload = await selectMultipleStopsGenerator(existingPayload,sessionData)
    const item = findItem(sessionData,existingPayload.message.order.items[0].id)
    const updatedItem = updateItemPrice(item,20)
    
    return existingPayload;
}