import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { getMockResponseMetaData } from "../services/mock-services";
import { sendToApiService } from "../utils/request-utils";
import { ApiRequest } from "../routes/manual";
import { generateMockResponse } from "../config/mock-config";

export async function initAsyncMiddleware(
	req: ApiRequest,
	res: Response,
	next: NextFunction
) {
	try {
		if (isManual(req.body)) {
			next();
		}
		const body = req.body;

		setTimeout(async () => {
			await sendResponse(body);
		}, 2000);
		next();
	} catch (err) {
		logger.error("Error in initAsyncMiddleware", err);
	}
}

async function sendResponse(body: any) {
	try {
		// ! check l2 error here
		const mockResponseMetaData = await getMockResponseMetaData(
			body.context.action,
			body
		);
		console.log(mockResponseMetaData.action, mockResponseMetaData.actionID);
		const mockReponse = await generateMockResponse(
			body.context.version,
			mockResponseMetaData.sessionData,
			mockResponseMetaData.actionID
		);
		await sendToApiService(mockResponseMetaData.action, mockReponse);
	} catch (err) {
		logger.error("Error in sending repsonse to api service", err);
	}
}

function isManual(payload: any) {
	const txn = payload.txn;
	return false;
}
