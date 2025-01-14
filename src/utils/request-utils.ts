import axios from "axios";
import logger from "./logger";
import { saveData } from "../services/data-services";

export async function sendToApiService(
	action: string,
	body: any,
	queryData = {}
) {
	try {
		const url = `${process.env.API_SERVICE_URL}/api-service/mock/${action}`;
		console.log(action, JSON.stringify(body.message, null, 2));
		await saveData(action, body);
		logger.debug(`Sending response to api service ${url} ${action}`);
		await axios.post(url, body, {
			params: {
				...queryData,
			},
		});
	} catch (err) {
		logger.error("Error in sending response to api service", err);
	}
}
