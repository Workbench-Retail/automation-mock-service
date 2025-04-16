import { BecknContext } from "../../types/BeknTypes";
import { Flow } from "../../types/flow-types";
import logger from "../logger";

export function computeSubscriber(context: BecknContext) {
	const action = context.action;
	if (action.startsWith("on")) {
		if (!context.bpp_uri) {
			logger.error("BPP URI is not present in the context");
			throw new Error("BPP URI is not present in the context");
		}
		logger.info(
			"computed subscriber for action " + action + " is " + context.bpp_uri
		);
		return context.bpp_uri;
	}
	logger.info(
		"computed subscriber for action " + action + " is " + context.bap_uri
	);
	return context.bap_uri;
}

export async function fetchFlow(
	domain: string,
	version: string,
	flowId: string
): Promise<Flow> {
	// Placeholder for fetching flow logic
	// This should be replaced with actual implementation
	logger.info(
		`Fetching flow for domain: ${domain}, version: ${version}, flowId: ${flowId}`
	);
	return {
		id: "STATION_CODE_FLOW_ORDER",
		description: "User uses station code for searching metro",
		sequence: [
			{
				key: "search1_METRO_201",
				type: "search",
				unsolicited: false,
				description:
					"User searches over the network to avail the metro mode of transport in the city",
				pair: "on_search1_METRO_201",
				owner: "BAP",
				expect: true,
			},
			{
				key: "on_search1_METRO_201",
				type: "on_search",
				unsolicited: false,
				description: "Response with all station codes",
				pair: null,
				owner: "BPP",
			},
			{
				key: "search2_METRO_201",
				type: "search",
				unsolicited: false,
				description:
					"User searches over the network to avail the metro mode of transport from one station to another",
				pair: "on_search2_METRO_201",
				owner: "BAP",
				expect: false,
				input: [
					{
						name: "vehicle_category",
						label: "Select vehicle category",
						type: "select",
						values: ["METRO"],
						payloadField: "$.message.intent.fulfillment.vehicle.category",
					},
					{
						name: "city_code",
						label: "Enter city code",
						type: "text",
						payloadField: "$.context.location.city.code",
					},
					{
						name: "start_code",
						label: "Enter start station code",
						type: "text",
						payloadField:
							"$.message.intent.fulfillment.stops[?(@.type=='START')].location.descriptor.code",
					},
					{
						name: "end_code",
						label: "Enter end station code",
						type: "text",
						payloadField:
							"$.message.intent.fulfillment.stops[?(@.type=='END')].location.descriptor.code",
					},
					{
						name: "bpp_id",
						label: "enter your bpp_id",
						type: "text",
						payloadField: "$.context.bpp_id",
					},
				],
			},
			{
				key: "on_search2_METRO_201",
				type: "on_search",
				unsolicited: false,
				description: "Response with start and end station code",
				pair: null,
				owner: "BPP",
			},
			{
				key: "select_METRO_201",
				type: "select",
				unsolicited: false,
				description: "User selects the station code",
				pair: "on_select_METRO_201",
				owner: "BAP",
			},
			{
				key: "on_select_METRO_201",
				type: "on_select",
				unsolicited: false,
				description: "Response with selected station code",
				pair: null,
				owner: "BPP",
			},
			{
				key: "init_METRO_201",
				type: "init",
				unsolicited: false,
				description:
					"Consumer platform shares the terms of order and initializes the order",
				pair: "on_init_METRO_201",
				owner: "BAP",
			},
			{
				key: "on_init_METRO_201",
				type: "on_init",
				unsolicited: false,
				description:
					"Provider platform accepts the terms of orders and ap_201pends its own terms and responds with the final draft",
				pair: null,
				owner: "BPP",
			},
			{
				key: "confirm_METRO_201",
				type: "confirm",
				unsolicited: false,
				description:
					"Consumer platform confirms the booking and provides all information required for confirmation as per the terms of order",
				pair: "on_confirm_METRO_201",
				owner: "BAP",
			},
			{
				key: "on_confirm_METRO_201",
				type: "on_confirm",
				unsolicited: false,
				description:
					"Provider platform confirms the order and provides details of the journey on confirmation",
				pair: null,
				owner: "BPP",
			},
			{
				key: "status_METRO_201",
				type: "status",
				unsolicited: false,
				description: "Consumer platform requests for the status of the order",
				pair: "on_status_complete_METRO_201",
				owner: "BAP",
			},
			{
				key: "on_status_complete_METRO_201",
				type: "on_status",
				unsolicited: false,
				description: "Provider platform responds with the status of the order",
				pair: null,
				owner: "BPP",
			},
		],
	};
}
