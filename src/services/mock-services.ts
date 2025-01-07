export async function getMockResponseMetaData(action: string, body: any) {
	return {
		actionID: "search1",
		sessionData: await getSessionData(body.context.transaction_id),
	};
}

export async function getSessionData(transactionID: string) {
	return {};
}
