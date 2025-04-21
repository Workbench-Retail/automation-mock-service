import axios from "axios";
import { BecknContext } from "../../types/BeknTypes";
import { Flow } from "../../types/flow-types";
import logger from "../logger";

export function computeSubscriber(context: BecknContext) {
	const action = context.action;
	if (action.startsWith("on")) {
		if (!context.bpp_uri) {
			logger.error("BPP URI is not present in the context");
			throw new Error("BPP URI is not present in the context");
		}
		logger.info(
			"computed subscriber for action " + action + " is " + context.bpp_uri
		);
		return context.bpp_uri;
	}
	logger.info(
		"computed subscriber for action " + action + " is " + context.bap_uri
	);
	return context.bap_uri;
}

export async function fetchFlow(
	domain: string,
	version: string,
	flowId: string,
	usecaseId: string
): Promise<Flow> {
	try {
		logger.info(
			`Fetching flow for domain: ${domain}, version: ${version}, flowId: ${flowId}`
		);

		const url = `${process.env.CONFIG_SERVICE}/mock/flow`;
		const config = await axios.get(url, {
			params: {
				domain: domain,
				version: version,
				flowId: flowId,
				usecase: usecaseId,
			},
		});
		console.log("config", config.data);
		return config.data.data;
	} catch (error) {
		logger.error(
			`Error fetching flow for domain: ${domain}, version: ${version}, flowId: ${flowId} usecaseId: ${usecaseId}`,
			error
		);
		throw new Error(
			`Error fetching flow for domain: ${domain}, version: ${version}, flowId: ${flowId} usecaseId: ${usecaseId}`
		);
	}
}
