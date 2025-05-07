import { SessionData } from "../../../../session-types";

export async function track_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	existingPayload.message.order.order_id = sessionData.order_id;
	return existingPayload;
}
