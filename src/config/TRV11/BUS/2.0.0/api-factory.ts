import { confirmGenerator } from "./confirm/generator";
import { onCancelHardGenerator } from "./on_cancel/on_cancel_hard/generator";
import { onCancelSoftGenerator } from "./on_cancel/on_cancel_soft/generator";
import { onConfirmGenerator } from "./on_confirm/on_confirm/generator";
import { onConfirmDelayedGenerator } from "./on_confirm/on_confirm_delayed/generator";
import { onSelectGenerator } from "./on_select/generator";
import { selectGenerator } from "./select/generator";
import { statusGenerator } from "./status/status_active/generator";
import { onInitGenerator } from "./on_init/generator";
import { initGenerator } from "./init/generator";
import { search1Generator } from "./search/search1/generator";
import { search2Generator } from "./search/search2/generator";
import { cancelSoftGenerator } from "./cancel/cancel_soft/generator";
import { cancelHardGenerator } from "./cancel/cancel_hard/generator";
import { onSearch1Generator } from "./on_search/on_search1/generator";
import { onSearch2Generator } from "./on_search/on_search2/generator";
import { statusTechCancelGenerator } from "./status/status_tech_cancel/generator";
import { onStatusActiveGenerator } from "./on_status/on_status_active/generator";

export async function Generator(
	action_id: string,
	existingPayload: any,
	sessionData: any
) {
	switch (action_id) {
		case "search1_BUS":
			return await search1Generator(existingPayload, sessionData);
		case "search2_BUS":
			return await search2Generator(existingPayload, sessionData);
		case "select_BUS":
			return await selectGenerator(existingPayload, sessionData);
		case "init_BUS":
			return await initGenerator(existingPayload, sessionData);
		case "confirm_BUS":
			return await confirmGenerator(existingPayload, sessionData);
		case "status_BUS":
			return await statusGenerator(existingPayload, sessionData);
		case "status_tech_cancel_BUS":
			return await statusTechCancelGenerator(existingPayload,sessionData)
		case "cancel_soft_BUS":
			return await cancelSoftGenerator(existingPayload, sessionData);
		case "cancel_hard_BUS":
			return await cancelHardGenerator(existingPayload, sessionData);
		case "on_search1_BUS":
			return await onSearch1Generator(existingPayload, sessionData);
		case "on_search2_BUS":
			return await onSearch2Generator(existingPayload, sessionData);
		case "on_select_BUS":
			return await onSelectGenerator(existingPayload, sessionData);
		case "on_init_BUS":
			return await onInitGenerator(existingPayload, sessionData);
		case "on_confirm_BUS":
			return await onConfirmGenerator(existingPayload, sessionData);
		case "on_status_BUS":
			return await onStatusActiveGenerator(existingPayload, sessionData);
		case "on_status_active_BUS":
			return await onStatusActiveGenerator(existingPayload, sessionData);
		case "on_confirm_delayed_BUS":
			return await onConfirmDelayedGenerator(existingPayload, sessionData);
		case "on_cancel_soft_BUS":
			return await onCancelSoftGenerator(existingPayload, sessionData);
		case "on_cancel_hard_BUS":
			return await onCancelHardGenerator(existingPayload, sessionData);
		default:
			throw new Error(`Invalid request type ${action_id}`);
	}
}
