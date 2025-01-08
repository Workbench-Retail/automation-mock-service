import axios from "axios";
import logger from "./logger";

export async function sendToApiService(
	action: string,
	body: any,
	queryData = {}
) {
	try {
		const url = `${process.env.API_SERVICE_URL}/api-service/mock/${action}`;
		logger.info(`Forwarding request to API service for action: ${action} at
			url: ${url}`);
		await axios.post(url, body, {
			params: {
				...queryData,
			},
		});
	} catch (err) {
		logger.error("Error in sending response to api service", err);
	}
}
