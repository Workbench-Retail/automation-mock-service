import { Flow, FormConfigType } from "../types/flow-types";
import { flowMap, MappedStep, ReducedApiData } from "../types/mapped-flow";
import { ApiData, TransactionCache } from "../types/transaction-cache";

export function getNextActionMetaData(
	transactionData: TransactionCache,
	flow: Flow
) {
	const flowDetails = getFlowCompleteStatus(transactionData, flow);
	const latestApi = flowDetails.sequence.find((s) =>
		["LISTENING", "RESPONDING", "INPUT-REQUIRED"].includes(s.status)
	);
	return latestApi;
}

export function getFlowCompleteStatus(
	transactionData: TransactionCache,
	flow: Flow
) {
	const apiList = reduceApiDataList(transactionData.apiList).sort(
		(a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
	);
	const subscriberType = transactionData.subscriberType;
	const mappedFlow: flowMap = {
		sequence: [],
	};
	let index = 0;
	for (const item of flow.sequence) {
		if (index < apiList.length) {
			mappedFlow.sequence.push({
				status: "COMPLETE",
				actionId: item.key,
				owner: item.owner,
				actionType: item.type,
				input: item.input,
				payloads: apiList[index],
			});
		} else if (index === apiList.length) {
			const base: MappedStep = {
				status: "LISTENING",
				actionId: item.key,
				owner: item.owner,
				actionType: item.type,
				input: item.input,
			};
			if (subscriberType === item.owner) {
				mappedFlow.sequence.push(base);
			} else {
				if (item.input) {
					mappedFlow.sequence.push({
						...base,
						status: "INPUT-REQUIRED",
					});
				} else {
					mappedFlow.sequence.push({
						...base,
						status: "RESPONDING",
					});
				}
			}
		} else {
			mappedFlow.sequence.push({
				status: "WAITING",
				actionId: item.key,
				owner: item.owner,
				actionType: item.type,
				input: item.input,
			});
		}
	}
	return mappedFlow;
}

function reduceApiDataList(data: ApiData[]): ReducedApiData[] {
	const map = new Map<string, ReducedApiData>();

	for (const item of data) {
		const key = `${item.action}|${item.messageId}`;

		if (!map.has(key)) {
			map.set(key, {
				action: item.action,
				messageId: item.messageId,
				timestamp: item.timestamp,
				subStatus: checkPerfectAck(item.response),
				payloads: [
					{
						payloadId: item.payloadId,
						response: item.response,
					},
				],
			});
		}

		map
			.get(key)!
			.payloads.push({ payloadId: item.payloadId, response: item.response });
	}

	return Array.from(map.values());
}

function checkPerfectAck(response: any): "SUCCESS" | "ERROR" {
	if (response?.ack?.status === "ACK") {
		return "SUCCESS";
	}
	return "ERROR";
}
