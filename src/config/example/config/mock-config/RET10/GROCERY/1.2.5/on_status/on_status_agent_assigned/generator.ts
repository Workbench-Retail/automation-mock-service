import { SessionData } from "../../../../session-types";
import { createGenericOnStatus } from "../on_status_packed/generator";

export async function on_status_agent_assigned_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	const generalPayload = createGenericOnStatus(existingPayload, sessionData);
	return generalPayload;
}
