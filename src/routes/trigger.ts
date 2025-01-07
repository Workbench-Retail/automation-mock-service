import { Router } from "express";
import { saveDataMiddleware } from "../controllers/dataControllers";
import { Request } from "express";
import { generateMockResponseMiddleware } from "../controllers/generationController";

import logger from "../utils/logger";
import { sendToApiService } from "../utils/request-utils";
import { setAckResponse } from "../utils/ackUtils";

const triggerRouter = Router();

interface QuerySettings {
	transactionID: string;
	actionID: string;
	subscriberUrl?: string;
	[key: string]: undefined | string | string[] | any;
}
interface CustomRequest extends Request {
	mockResponse?: any;
	queryData?: QuerySettings;
}

triggerRouter.post(
	"/api-service/:action",
	generateMockResponseMiddleware,
	saveDataMiddleware,
	async (req: CustomRequest, res) => {
		try {
			if (!req.mockResponse) {
				throw new Error("Mock response not found");
			}
			const action = req.params.action;
			await sendToApiService(action, req.body, req.queryData);
			res.status(200).send(setAckResponse(true));
		} catch (err) {
			logger.error("Error in forwarding request to API service", err);
			res.status(500).send("Error in forwarding request to API service");
		}
	}
);

triggerRouter.get(
	"/payload/:action",
	generateMockResponseMiddleware,
	(req: CustomRequest, res) => {
		if (!req.mockResponse) {
			logger.error("Mock response not found");
			res.status(404).send("Mock response not found");
		}
		logger.info("Returning mock response");
		res.status(200).send(req.mockResponse);
	}
);

export default triggerRouter;
