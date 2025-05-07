import { SessionData } from "../../../../session-types";

export async function confirm_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	const timeIso = new Date().toISOString();
	existingPayload.message.order.created_at = timeIso;
	existingPayload.message.order.updated_at = timeIso;
	existingPayload.message.order.quote = sessionData.quote;
	existingPayload.message.order.billing = sessionData.billing;
	existingPayload.message.order.items = sessionData.items;
	existingPayload.message.order.provider = sessionData.provider;
	existingPayload.message.order.payment.params.amount =
		sessionData.quote?.price?.value;
	existingPayload.message.order.payment.params.transaction_id =
		sessionData.transaction_id;
	return existingPayload;
}
