export async function onCancelInitGenerator(existingPayload: any,sessionData: any){
    existingPayload.message.order.payments = sessionData.updated_payments;
	existingPayload.message.order.items = sessionData.items;
	existingPayload.message.order.fulfillments = sessionData.fulfillments;
	existingPayload.message.order.quote = sessionData.quote
	existingPayload.message.order.id = sessionData.order_id;
    existingPayload.message.status = "CANCEL_INITIATED"
    return existingPayload;
}