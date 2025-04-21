import { getFlowCompleteStatus } from "../services/flow-mapping-service";
import { Flow } from "../types/flow-types";
import { TransactionCache } from "../types/transaction-cache";

const tsData: TransactionCache = {
	sessionId: "4QOnBV1rq2dgcswGu9cm2Pc7pUTcovLl",
	flowId: "OnDemand_Assign_driver_on_onconfirm",
	latestAction: "on_init",
	subscriberType: "BAP",
	latestTimestamp: "2025-04-20T15:53:56.657Z",
	type: "manual",
	messageIds: [],
	apiList: [
		{
			action: "search",
			messageId: "2fce665a-2987-4b96-8c79-408922a28062",
			payloadId: "8edd2ce7-5e94-4234-8489-bafb99372be2",
			response: {
				message: {
					ack: {
						status: "ACK",
					},
				},
			},
			timestamp: "2025-04-20T15:53:42.254Z",
		},
		{
			action: "on_search",
			messageId: "2fce665a-2987-4b96-8c79-408922a28062",
			payloadId: "43cc1771-248f-4fad-b77a-c200bebbdd9d",
			response: {
				message: {
					ack: {
						status: "ACK",
					},
				},
			},
			timestamp: "2025-04-20T15:53:45.591Z",
		},
		{
			action: "select",
			messageId: "8885a05d-464c-4c72-9c06-672a4a4c321b",
			payloadId: "fc5a013c-937a-4764-8c6a-b53130edd68d",
			response: {
				message: {
					ack: {
						status: "ACK",
					},
				},
			},
			timestamp: "2025-04-20T15:53:48.093Z",
		},
		{
			action: "on_select",
			messageId: "8885a05d-464c-4c72-9c06-672a4a4c321b",
			payloadId: "610e9645-4480-4ec1-bd3f-ea5799cf8b54",
			response: {
				message: {
					ack: {
						status: "ACK",
					},
				},
			},
			timestamp: "2025-04-20T15:53:51.341Z",
		},
		{
			action: "init",
			messageId: "befa4aa2-abeb-4192-986e-e0df5ea774c9",
			payloadId: "3df3d8a9-1f89-41f6-8eb5-623a9c746126",
			response: {
				message: {
					ack: {
						status: "ACK",
					},
				},
			},
			timestamp: "2025-04-20T15:53:54.148Z",
		},
		{
			action: "on_init",
			messageId: "befa4aa2-abeb-4192-986e-e0df5ea774c9",
			payloadId: "3d932d2e-92e7-4369-bf02-442cec3b9d6a",
			response: {
				message: {
					ack: {
						status: "NACK",
					},
				},
				error: {
					code: "30000",
					message:
						"- **condition REQUIRED_message_order_fulfillments_id**: $.message.order.fulfillments[*].id must be present in the payload",
				},
			},
			timestamp: "2025-04-20T15:53:56.657Z",
		},
	],
};
const flow: Flow = {
	id: "OnDemand_Assign_driver_on_onconfirm",
	description: "On-Demand - Assign driver on on-confirm",
	sequence: [
		{
			key: "search_ride",
			type: "search",
			unsolicited: false,
			pair: "on_search",
			owner: "BAP",
			expect: true,
			input: [
				{
					name: "city_code",
					label: "Enter city code",
					type: "text",
					payloadField: "$.context.location.city.code",
				},
				{
					name: "start_gps",
					label: "Enter start gps coordinates",
					type: "text",
					payloadField:
						"$.message.intent.fulfillment.stops[?(@.type=='START')].location.gps",
				},
				{
					name: "end_gps",
					label: "Enter end gps coordinates",
					type: "text",
					payloadField:
						"$.message.intent.fulfillment.stops[?(@.type=='END')].location.gps",
				},
			],
		},
		{
			key: "on_search",
			type: "on_search",
			unsolicited: false,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "select",
			type: "select",
			unsolicited: false,
			pair: "on_select",
			owner: "BAP",
			expect: false,
		},
		{
			key: "on_select",
			type: "on_select",
			unsolicited: false,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "init",
			type: "init",
			unsolicited: false,
			pair: "on_init",
			owner: "BAP",
			expect: false,
		},
		{
			key: "on_init",
			type: "on_init",
			unsolicited: false,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "confirm",
			type: "confirm",
			unsolicited: false,
			pair: "on_confirm",
			owner: "BAP",
			expect: false,
		},
		{
			key: "on_confirm",
			type: "on_confirm",
			unsolicited: false,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "on_status_unsolicited",
			type: "on_status",
			unsolicited: true,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "track_ride",
			type: "track",
			unsolicited: false,
			pair: "on_track_ride",
			owner: "BAP",
			expect: false,
		},
		{
			key: "on_track_ride",
			type: "on_track",
			unsolicited: false,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "on_status_ride_arrived",
			type: "on_status",
			unsolicited: true,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "on_status_ride_started",
			type: "on_status",
			unsolicited: true,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "on_update",
			type: "on_update",
			unsolicited: true,
			pair: null,
			owner: "BPP",
			expect: false,
		},
		{
			key: "status",
			type: "status",
			unsolicited: false,
			pair: "on_status_solicited",
			owner: "BAP",
			expect: false,
		},
		{
			key: "on_status_solicited",
			type: "on_status",
			unsolicited: false,
			pair: null,
			owner: "BPP",
			expect: false,
		},
	],
};

console.log(JSON.stringify(getFlowCompleteStatus(tsData, flow)));
