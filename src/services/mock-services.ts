import { getActionData } from "../config/TRV11/getActionConfig";
import { defaultSelectionCodeTests } from "../generated/default-selector";

export async function getMockResponseMetaData(action: string, body: any) {
	const actionTests = defaultSelectionCodeTests(action, body);
	const successTest = actionTests.find((test) => test.valid);
	const code = successTest?.code;
	if (!code) {
		throw new Error("No valid test found");
	}
	const actionData = getActionData(code);
	return {
		actionID: actionData.action_id,
		sessionData: await getSessionData(body.context.transaction_id),
	};
}

export async function getSessionData(transactionID: string) {
	return {};
}
