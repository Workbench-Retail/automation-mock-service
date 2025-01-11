import { NextFunction, Request, Response } from "express";
import { CustomRequest } from "../routes/trigger";
import { loadSessionData } from "../services/data-services";
import logger from "../utils/logger";
import { createMockReponse } from "../config/TRV11/generation-pipline";
import { updateAllJsonPaths } from "../utils/json-editor-utils/jsonPathEditor";
import { delay } from "../utils/generic-utils";

export async function generateMockResponseMiddleware(
	req: CustomRequest,
	res: Response,
	next: NextFunction
) {
	await delay(500);
	req.queryData = req.query as any;
	if (req.body.payload) {
		req.mockResponse = req.body.payload;
		next();
	} else {
		const txn = req.queryData?.transaction_id;
		if (!txn) {
			logger.error("Transaction ID not found in query data");
			res.status(400).send("Transaction ID not found in query data");
			return;
		}
		if (!req.queryData?.action_id) {
			logger.error("Action ID not found in query data");
			res.status(400).send("Action ID not found in query data");
			return;
		}
		const sessionData = await loadSessionData(
			txn,
			req.queryData.subscriber_url
		);
		const mockResponse = await createMockReponse(
			req.queryData?.action_id,
			sessionData
		);
		req.mockResponse = mockResponse;
		next();
	}
}

export async function replaceJsonPaths(
	req: CustomRequest,
	res: Response,
	next: NextFunction
) {
	if (!req.body.json_path_changes) {
		next();
		return;
	}
	try {
		const payload = req.mockResponse;
		const changes = req.body.json_path_changes;
		req.mockResponse = updateAllJsonPaths(payload, changes);
		next();
	} catch (e) {
		logger.error("Error in replacing json paths", e);
		res.status(500).send("Error in replacing json paths");
	}
}
