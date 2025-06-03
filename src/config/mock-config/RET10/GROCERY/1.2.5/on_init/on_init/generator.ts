import { SessionData } from "../../../../session-types";

export async function on_init_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	existingPayload.message.order.items = sessionData.items;
	existingPayload.message.order.fulfillments = sessionData.fulfillments;
	existingPayload.message.order.billing = sessionData.billing;
	existingPayload.message.order.provider = sessionData.provider;
	existingPayload.message.order.quote = sessionData.quote;
	return existingPayload;
}
