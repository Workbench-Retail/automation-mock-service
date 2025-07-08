import { SessionData } from "../../../../session-types";

export async function cancel_force_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	await delay(5000);
	existingPayload.message.order_id = sessionData.order_id;
	return existingPayload;
}

/**
 * Returns a Promise that resolves after a given delay in milliseconds.
 */
export function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
