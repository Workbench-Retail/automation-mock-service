
export async function initGenerator(existingPayload: any,sessionData: any){
    console.log("session data when init", sessionData)
    existingPayload.message.order.billing = sessionData.billing
    // existingPayload.message.order.payments = sessionData.payments
    existingPayload.message.order.items = sessionData.items
    return existingPayload;
}