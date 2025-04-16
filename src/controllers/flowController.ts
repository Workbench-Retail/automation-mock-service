import { ApiRequest } from "../routes/manual";
import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { BecknContext } from "../types/BeknTypes";
import { TransactionCacheService } from "../services/cache-services";
import { Flow } from "../types/flow-types";
import { computeSubscriber, fetchFlow } from "../utils/flow-utils/main";
import { getNextActionMetaData } from "../services/flow-mapping-service";
import { loadMockSessionData } from "../services/data-services";
import { createMockResponse } from "../config/TRV11/METRO/version-factory";
import { sendToApiService } from "../utils/request-utils";
import { setAckResponse } from "../utils/ackUtils";
import { updateAllJsonPaths } from "../utils/json-editor-utils/jsonPathEditor";

export async function setFlowAndTransactionId(
	req: ApiRequest,
	res: Response,
	next: NextFunction
) {
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
	if (!transactionData) {
		logger.error(
			"Transaction data not found for " +
				transactionService.createTransactionKey(transactionId, subscriberUrl)
		);
		throw new Error(
			"Transaction data not found for " +
				transactionService.createTransactionKey(transactionId, subscriberUrl)
		);
	}

	const flow = await fetchFlow(
		context.domain,
		context.version ?? context.core_version,
		flowId
	);
	req.flow = flow;
	req.transactionData = transactionData;
	req.subscriberUrl = subscriberUrl;
	logger.info(
		`✅ Flow fetched successfully for ${transactionService.createTransactionKey(
			transactionId,
			subscriberUrl
		)} ${flowId}`
	);
	next();
	try {
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
			res.status(204).send({
				message: "Input required",
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
			});
			return;
		} else if (latestMeta.status === "LISTENING") {
			logger.info("Mock service is now listening");
			res.status(200).send({
				message: "Mock service is now listening",
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
