import { Router, Request } from "express";

import {
	generateMockResponseMiddleware,
	replaceJsonPaths,
} from "../controllers/generationController";

import logger from "../utils/logger";
import { sendToApiService } from "../utils/request-utils";
import { setAckResponse } from "../utils/ackUtils";

const triggerRouter = Router();

interface QuerySettings {
	transaction_id: string;
	action_id: string;
	subscriber_url?: string;
	[key: string]: undefined | string | string[] | any;
}
export interface TriggerRequest extends Request {
	mockResponse?: any;
	queryData?: QuerySettings;
}

export interface BodyTriggerType {
	payload?: any;
	json_path_changes?: Record<string, any>;
}

triggerRouter.post(
	"/api-service/:action",
	generateMockResponseMiddleware,
	replaceJsonPaths,
	async (req: TriggerRequest, res) => {
		try {
			if (!req.mockResponse) {
				throw new Error("Mock response not found");
			}
			const action = req.params.action;
			await sendToApiService(action, req.mockResponse, req.queryData);
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
	(req: TriggerRequest, res) => {
		if (!req.mockResponse) {
			logger.error("Mock response not found");
			res.status(404).send("Mock response not found");
		}
		logger.info("Returning mock response");
		res.status(200).send(req.mockResponse);
	}
);

export default triggerRouter;
