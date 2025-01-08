import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { RedisService } from "ondc-automation-cache-lib";
import jsonpath from "jsonpath";

import { SessionData } from "../config/TRV11/session-types";
import logger from "../utils/logger";

export function updateSessionData(
	saveData: Record<string, string>,
	payload: object,
	sessionData: SessionData
) {
	logger.info(`updating session`);
	try {
		for (const key in saveData) {
			const jsonPath = saveData[key as keyof typeof saveData];
			const result = jsonpath.query(payload, jsonPath);
			sessionData[key as keyof typeof sessionData] =
				result.length === 1 ? result[0] : result;
		}
	} catch (e) {
		logger.error("Error in updating session data", e);
	}
}
function yamlToJson(filePath: string): object {
	try {
		const fileContents = fs.readFileSync(filePath, "utf8");
		const jsonData = yaml.load(fileContents) as any;
		return jsonData;
	} catch (error) {
		throw error;
	}
}

export async function saveData(action: string, payload: any) {
	try {
		const keyExists = await RedisService.keyExists(
			payload.context.transaction_id
		);
		let sessionData;
		if (!keyExists) {
			sessionData = yamlToJson(
				path.resolve(__dirname, "../config/TRV11/session-data.yaml")
			) as SessionData;
			console.log("default session data is ", sessionData);
			sessionData.bpp_id = sessionData.bap_id = "mock.com";
			sessionData.bap_uri = sessionData.bpp_uri =
				process.env.API_SERVICE_URL + "/api";
		} else {
			sessionData = (await loadSessionData(
				payload?.context.transaction_id
			)) as SessionData;
		}
		const actionFolderPath = path.resolve(
			__dirname,
			`../config/TRV11/${action}`
		);
		const saveDataFilePath = path.join(actionFolderPath, "save-data.yaml");
		const fileContent = fs.readFileSync(saveDataFilePath, "utf8");
		const saveData = yaml.load(fileContent) as any;
		updateSessionData(saveData["save-data"], payload, sessionData);
		await RedisService.setKey(
			payload?.context.transaction_id,
			JSON.stringify(sessionData)
		);
		logger.info("Data saved to session");
	} catch (e) {
		logger.error("Error in saving data to session", e);
	}
}

export async function loadSessionData(transactionID: string) {
	if (await RedisService.keyExists(transactionID)) {
		const rawData = await RedisService.getKey(transactionID);
		console.log("raw data is ", rawData);
		const sessionData = JSON.parse(rawData ?? "{}") as SessionData;
		return sessionData;
	} else {
		throw Error("transaction ID  does not  exist");
	}
}
