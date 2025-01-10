import { NextFunction, Request, Response } from "express";
import { CustomRequest } from "../routes/trigger";
import { loadSessionData } from "../services/data-services";
import logger from "../utils/logger";
import { createMockReponse } from "../config/TRV11/generation-pipline";

export async function generateMockResponseMiddleware(
	req: CustomRequest,
	res: Response,
	next: NextFunction
) {
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
		const sessionData = await loadSessionData(txn,req.queryData.subscriber_url);
		console.log("I want to see session data",sessionData,req.queryData?.action_id)
		const mockResponse = await createMockReponse(
			req.queryData?.action_id,
			sessionData
		);
		console.log('mock response is',JSON.stringify(mockResponse,null,2));
		req.mockResponse = mockResponse;
		next();
	}
}
