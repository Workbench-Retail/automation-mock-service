
export async function cancelHardGenerator(existingPayload: any,sessionData: any){
    existingPayload.message.order_id = sessionData.order_id
    return existingPayload;
}