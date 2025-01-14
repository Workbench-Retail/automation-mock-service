
export async function initGenerator(existingPayload: any,sessionData: any){
    if (sessionData.billing && Object.keys(sessionData.billing).length > 0) {
        existingPayload.message.order.billing = sessionData.billing;
      }
      
    if (sessionData.items && sessionData.items.length > 0) {
    existingPayload.message.order.items = sessionData.items;
    }
    return existingPayload;
}