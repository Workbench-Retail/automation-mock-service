import { confirmGenerator } from "./confirm/generator";
import { onCancelHardGenerator } from "./on_cancel/on_cancel_hard/generator";
import { onCancelSoftGenerator } from "./on_cancel/on_cancel_soft/generator";
import { onConfirmGenerator } from "./on_confirm/on_confirm/generator";
import { onConfirmDelayedGenerator } from "./on_confirm/on_confirm_delayed/generator";
import { onSelectGenerator } from "./on_select/generator";
import { selectGenerator } from "./select/generator";
import { statusActiveGenerator} from "./status/status_active/generator";
import { onInitGenerator } from "./on_init/generator";
import { initGenerator } from "./init/generator";
import { search1Generator } from "./search/search1/generator";
import { search2Generator } from "./search/search2/generator";
import { cancelSoftGenerator } from "./cancel/cancel_soft/generator";
import { cancelHardGenerator } from "./cancel/cancel_hard/generator";
import { onSearch1Generator } from "./on_search/on_search1/generator";
import { onSearch2Generator } from "./on_search/on_search2/generator";
import { onStatusCompleteGenerator } from "./on_status/on_status_complete/generator";
import { statusTechCancelGenerator } from "./status/status_tech_cancel/generator";
import { onStatusActiveGenerator } from "./on_status/on_status_active/generator";

export async function Generator(
	action_id: string,
	existingPayload: any,
	sessionData: any
) {
	switch (action_id) {
		case "search1_METRO":
			return await search1Generator(existingPayload, sessionData);
		case "search2_METRO":
			return await search2Generator(existingPayload, sessionData);
		case "select_METRO":
			return await selectGenerator(existingPayload, sessionData);
		case "init_METRO":
			return await initGenerator(existingPayload, sessionData);
		case "confirm_METRO":
			return await confirmGenerator(existingPayload, sessionData);
		case "status_METRO":
			return await statusActiveGenerator(existingPayload, sessionData);
		case "status_tech_cancel_METRO":
			return await statusTechCancelGenerator(existingPayload, sessionData);
		case "cancel_soft_METRO":
			return await cancelSoftGenerator(existingPayload, sessionData);
		case "cancel_hard_METRO":
			return await cancelHardGenerator(existingPayload, sessionData);
		case "on_search1_METRO":
			return await onSearch1Generator(existingPayload, sessionData);
		case "on_search2_METRO":
			return await onSearch2Generator(existingPayload, sessionData);
		case "on_select_METRO":
			return await onSelectGenerator(existingPayload, sessionData);
		case "on_init_METRO":
			return await onInitGenerator(existingPayload, sessionData);
		case "on_confirm_METRO":
			return await onConfirmGenerator(existingPayload, sessionData);
		case "on_status":
			return await onStatusActiveGenerator(existingPayload, sessionData);
		case "on_status_complete_METRO":
			return await onStatusCompleteGenerator(existingPayload, sessionData);
		case "on_confirm_delayed_METRO":
			return await onConfirmDelayedGenerator(existingPayload, sessionData);
		case "on_cancel_soft_METRO":
			return await onCancelSoftGenerator(existingPayload, sessionData);
		case "on_cancel_hard_METRO":
			return await onCancelHardGenerator(existingPayload, sessionData);
		default:
			throw new Error(`Invalid request type ${action_id}`);
	}
}
