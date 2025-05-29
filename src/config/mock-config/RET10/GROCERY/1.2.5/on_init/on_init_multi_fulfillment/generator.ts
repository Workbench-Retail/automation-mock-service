import { SessionData } from "../../../../session-types";
import { Fulfillments } from "../../api-objects/fulfillments";
import { on_init_generator } from "../on_init/generator";

export async function on_init_multi_fulfillment_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	const payload = await on_init_generator(existingPayload, sessionData);

	const fulfillments = payload.message.order.fulfillments as Fulfillments;

	const newFlowConfig: any = [];
	fulfillments.forEach((fulfillment, index) => {
		const duplicateFlowConfig = JSON.parse(JSON.stringify(flowConfig));
		duplicateFlowConfig.map((f: any) => {
			return {
				...f,
				key: `${f.key}_${index}`,
				description: `${f.description} - for fulfillment: ${fulfillment.id}`,
			};
		});
		newFlowConfig.push(...duplicateFlowConfig);
	});
	if (sessionData.protocol_session_id) {
		// const protocolSessionId = await
	}
	return payload;
}

const flowConfig = [
	{
		key: "on_status_packed",
		type: "on_status",
		unsolicited: true,
		pair: null,
		owner: "BPP",
		expect: false,
		description: "Status updates - order packed",
	},
	{
		key: "on_status_agent_assigned",
		type: "on_status",
		unsolicited: true,
		pair: null,
		owner: "BPP",
		expect: false,
		description: "Status updates - agent assigned",
	},
	{
		key: "on_status_picked",
		type: "on_status",
		unsolicited: true,
		pair: null,
		owner: "BPP",
		expect: false,
		description: "Status updates - order picked up",
	},
	{
		key: "on_status_out_for_delivery",
		type: "on_status",
		unsolicited: true,
		pair: null,
		owner: "BPP",
		expect: false,
		description: "Status updates - order out for delivery",
	},
	{
		key: "on_status_order_delivered",
		type: "on_status",
		unsolicited: true,
		pair: null,
		owner: "BPP",
		expect: false,
		description: "Status updates - order delivered",
	},
];
