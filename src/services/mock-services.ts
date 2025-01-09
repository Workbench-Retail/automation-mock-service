import { getActionData } from "../config/TRV11/getActionConfig";
import { defaultSelectionCodeTests } from "../generated/default-selector";
import logger from "../utils/logger";
import { loadSessionData } from "./data-services";

export async function getMockResponseMetaData(action: string, body: any) {
	logger.info("getting meta data for action " + action);
	console.log(JSON.stringify(body.message));
	const actionTests = defaultSelectionCodeTests(action, body, true);
	const successTest = actionTests.find(
		(test) => test.valid && test.code != 200
	);
	const code = successTest?.code;
	if (!code) {
		throw new Error("No valid test found");
	}
	const actionData = getActionData(code);
	const sessionData = await getSessionData(body.context.transaction_id);
	return {
		actionID: actionData.action_id,
		action: actionData.action,
		sessionData: sessionData,
	};
}

export async function getSessionData(transactionID: string) {
	return await loadSessionData(transactionID);
}