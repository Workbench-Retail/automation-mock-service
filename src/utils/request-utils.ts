import axios from "axios";
import logger from "./logger";

export async function sendToApiService(
	action: string,
	body: any,
	queryData = {}
) {
	logger.info(`Forwarding request to API service for action: ${action}`);
	await axios.post(`${process.env.API_SERVICE_URL}/mock/${action}`, body, {
		params: {
			...queryData,
		},
	});
}
