import { SessionData } from "../../../../session-types";

export async function on_status_packed_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	const generalPayload = createGenericOnStatus(existingPayload, sessionData);
	return generalPayload;
}

export function createGenericOnStatus(
	existingPayload: any,
	sessionData: SessionData
) {
	existingPayload.message.order.id = sessionData.order_id;
	existingPayload.message.order.provider = sessionData.provider;
	existingPayload.message.order.items = sessionData.items;
	existingPayload.message.order.billing = sessionData.billing;
	// existingPayload.message.order.fulfillments = sessionData.fulfillments;
	existingPayload.message.order.quote = sessionData.quote;
	const timeISO = new Date().toISOString();
	existingPayload.message.order.updated_at = timeISO;
	return existingPayload;
}
