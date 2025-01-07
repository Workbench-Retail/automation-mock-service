import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { getMockResponseMetaData } from "../services/mock-services";

export async function initAsyncMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		if (isManual(req.body)) {
			next();
		}
		// ! check l2 error here
		const action = req.params.action;
		const body = req.body;
		const mockResponseMetaData = await getMockResponseMetaData(action, body);

		next();
	} catch (err) {
		logger.error("Error in initAsyncMiddleware", err);
	}
}

function isManual(payload: any) {
	const txn = payload.txn;
	return true;
}
