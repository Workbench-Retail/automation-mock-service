import { SessionData } from "../../../../session-types";

export async function on_search_inc_disable_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	existingPayload.context.city = "*"
	let newExistingPayload = JSON.parse(JSON.stringify(existingPayload));
	
	return existingPayload;
}
