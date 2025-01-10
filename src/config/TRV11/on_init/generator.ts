import { SessionData } from "../session-types";

export async function onInitGenerator(
	existingPayload: any,
	sessionData: SessionData
) {
	// console.log(sessionData, "session_data of on_init")
	// existingPayload.fulfillments = stations[city_code as keyof typeof stations]
	const randomId = Math.random().toString(36).substring(2, 15);

	const payments = [
		{
			id: randomId,
			params: {
				bank_code: "XXXXXXXX",
				bank_account_number: "xxxxxxxxxxxxxx",
			},
		},
	];
	existingPayload.message.order.payments = payments;
	existingPayload.message.order.items = sessionData.items;
	existingPayload.message.order.fulfillments = sessionData.fulfillments;
	existingPayload.message.order.quote = sessionData.quote;
	return existingPayload;
}
