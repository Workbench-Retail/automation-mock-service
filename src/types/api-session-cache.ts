export interface SessionCache {
	// against session_id
	transactionIds: string[];
	// flowMap: Record<FlowId, TransactionId | undefined>;
	npType: "BAP" | "BPP";
	domain: string;
	version: string;
	usecaseId: string;
	subscriberId?: string;
	subscriberUrl: string;
	env: "STAGING" | "PRE-PRODUCTION";
	// sessionDifficulty: SessionDifficulty;
}