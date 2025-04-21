import { ApiRequest } from "../routes/manual";
import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import {
	SessionCacheService,
	TransactionCacheService,
} from "../services/cache-services";
import { computeSubscriber, fetchFlow } from "../utils/flow-utils/main";
import { getNextActionMetaData } from "../services/flow-mapping-service";
import { loadMockSessionData } from "../services/data-services";

import { sendToApiService } from "../utils/request-utils";
import { setAckResponse } from "../utils/ackUtils";
import { updateAllJsonPaths } from "../utils/json-editor-utils/jsonPathEditor";
import { createMockResponse } from "../config/TRV10/version-factory";
import { createExpectationService } from "../services/api-expectation-service";

export async function setFlowAndTransactionId(
	req: ApiRequest,
	res: Response,
	next: NextFunction
) {
	try {
		logger.info("Setting flow and transaction ID for incomming mock request");
		const context = req.body.context;
		const transactionId = context.transaction_id;
		const subscriberUrl = computeSubscriber(context);

		const transactionService = new TransactionCacheService();
		const transactionData = await transactionService.tryLoadTransaction(
			transactionId,
			subscriberUrl
		);
		const flowId = transactionData?.flowId;
		if (!flowId) {
			logger.error(
				"Flow ID not found for " +
					transactionService.createTransactionKey(transactionId, subscriberUrl)
			);
			throw new Error(
				"Flow ID not found for " +
					transactionService.createTransactionKey(transactionId, subscriberUrl)
			);
		}
		if (!transactionData || !transactionData.sessionId) {
			logger.error(
				"Transaction data not found for " +
					transactionService.createTransactionKey(transactionId, subscriberUrl)
			);
			throw new Error(
				"Transaction data not found for " +
					transactionService.createTransactionKey(transactionId, subscriberUrl)
			);
		}

		const sessionData = await new SessionCacheService().loadSessionThatExists(
			transactionData.sessionId
		);

		const flow = await fetchFlow(
			context.domain,
			context.version ?? context.core_version,
			flowId,
			sessionData.usecaseId
		);
		req.flow = flow;
		req.transactionData = transactionData;
		req.subscriberUrl = subscriberUrl;
		req.transactionId = req.body.context.transaction_id;
		logger.info(
			`✅ Flow fetched successfully for ${transactionService.createTransactionKey(
				transactionId,
				subscriberUrl
			)} ${flowId}`
		);
		next();
	} catch (err: any) {
		logger.error("Error in setFlowAndTransactionId", err);
		res
			.status(500)
			.send("Error in " + err?.message || "setFlowAndTransactionId");
	}
}

export async function ActUponFlow(
	req: ApiRequest,
	res: Response,
	next: NextFunction
) {
	try {
		logger.info("Acting upon flow");
		const txData = req.transactionData;
		const flow = req.flow;
		const txId = req.transactionId;
		const subscriberUrl = req.subscriberUrl;
		if (!flow || !txData || !subscriberUrl || !txId) {
			logger.error("Flow or Transaction data not found <INTERNAL-ERROR>");
			res
				.status(500)
				.send("<INTERNAL-ERROR> Flow or Transaction data not found");
			return;
		}
		const latestMeta = getNextActionMetaData(txData, flow);
		if (!latestMeta) {
			logger.info("Mock response is not required");
			res.status(200).send("Mock response is not required flow is complete");
			return;
		}

		if (latestMeta.status === "INPUT-REQUIRED" && !req.body.json_path_changes) {
			const input = latestMeta.input;
			logger.info("Input required");
			res.status(200).send({
				message:
					"Input required, pass the inputs under key json_path_changes in body and send again",
				inputs: input,
			});
			return;
		}

		if (
			latestMeta.status === "RESPONDING" ||
			latestMeta.status === "INPUT-REQUIRED"
		) {
			res.status(200).send("Mock service is now responding");
			logger.info("Mock service is now responding");
			const sessionData = await loadMockSessionData(txId, subscriberUrl);
			let mockResponse = await createMockResponse(
				txData.sessionId as string,
				sessionData,
				latestMeta.actionId
			);

			if (req.body.json_path_changes) {
				mockResponse = updateAllJsonPaths(
					mockResponse,
					req.body.json_path_changes
				);
			}

			const action = latestMeta.actionType;
			await sendToApiService(action, mockResponse, {
				subscriber_url: subscriberUrl,
				flow_id: flow.id,
				session_id: txData.sessionId,
			});
			return;
		} else if (latestMeta.status === "LISTENING") {
			let expecAdded = false;
			if (latestMeta.expect && txData.sessionId) {
				await createExpectationService(
					subscriberUrl,
					flow.id,
					txData.sessionId,
					latestMeta.actionType
				);
				expecAdded = true;
			}
			logger.info("Mock service is now listening");
			res.status(200).send({
				message: "Mock service is now listening",
				expectationAdded: expecAdded,
				metaData: latestMeta,
			});
			return;
		}
		logger.info("No actionable state found in flow!");
		res.status(200).send(setAckResponse(true));
	} catch (e) {
		logger.error("Error in ActUponFlow", e);
		return;
	}
}
