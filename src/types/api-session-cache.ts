export interface SessionCache {
	// against session_id
	transactionIds: string[];
	flowMap: Record<string, string | undefined>;
	npType: "BAP" | "BPP";
	domain: string;
	version: string;
	subscriberId?: string;
	subscriberUrl: string;
	usecaseId: string;
	env: "STAGING" | "PRE-PRODUCTION";
	// sessionDifficulty: SessionDifficulty;
}

export interface SubscriberCache {
	activeSessions: Expectation[];
}

export type Expectation = {
	sessionId: string;
	flowId: string;
	expectedAction?: string;
	expireAt: string;
};
