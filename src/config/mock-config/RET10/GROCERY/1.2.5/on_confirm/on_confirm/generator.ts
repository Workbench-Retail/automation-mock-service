import { SessionData } from "../../../../session-types";

export async function on_confirm_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	const timeIso = new Date().toISOString();
	existingPayload.message.order.updated_at = timeIso;
	existingPayload.message.order.id = sessionData.order_id;
	existingPayload.message.order.billing = sessionData.billing;
	existingPayload.message.order.items = sessionData.items;
	existingPayload.message.order.provider = sessionData.provider;
	existingPayload.message.order.fulfillments = sessionData.fulfillments;
	existingPayload.message.order.quote = sessionData.quote;
	return existingPayload;
}
