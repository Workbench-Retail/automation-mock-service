import { FormConfigType } from "./flow-types";

export interface ReducedApiData {
	action: string;
	messageId: string;
	timestamp: string;
	subStatus: "SUCCESS" | "ERROR";
	payloads: {
		payloadId: string;
		response: any;
	}[];
}

export type ReducedApiList = ReducedApiData[];

export interface flowMap {
	sequence: MappedStep[];
}
export interface MappedStep {
	status:
		| "COMPLETE"
		| "LISTENING"
		| "RESPONDING"
		| "WAITING"
		| "INPUT-REQUIRED";
	actionId: string;
	owner: "BAP" | "BPP";
	actionType: string;
	input?: FormConfigType;
	payloads?: ReducedApiData;
}
