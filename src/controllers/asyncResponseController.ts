import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { getMockResponseMetaData } from "../services/mock-services";
import { createMockReponse } from "../config/TRV11/generation-pipline";
import { sendToApiService } from "../utils/request-utils";

export async function initAsyncMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		if (isManual(req.body)) {
			next();
		}
		setTimeout(async () => {
			await sendResponse(req.params.action, req.body);
		}, 2000);
		next();
	} catch (err) {
		logger.error("Error in initAsyncMiddleware", err);
	}
}

async function sendResponse(action: string, body: any) {
	try {
		// ! check l2 error here
		const mockResponseMetaData = await getMockResponseMetaData(action, body);
		const mockReponse = createMockReponse(
			mockResponseMetaData.actionID,
			mockResponseMetaData.sessionData
		);
		await sendToApiService(action, mockReponse);
	} catch (err) {
		logger.error("Error in sending repsonse to api service", err);
		throw err;
	}
}

function isManual(payload: any) {
	const txn = payload.txn;
	return true;
}
