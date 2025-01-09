import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { RedisService } from "ondc-automation-cache-lib";
import jsonpath from "jsonpath";

import { SessionData } from "../config/TRV11/session-types";
import logger from "../utils/logger";
import { isArrayKey } from "../types/type-utils";

export function updateSessionData(
	saveData: Record<string, string>,
	payload: any,
	sessionData: SessionData
) {
	logger.info(`updating session`);
	try {
		for (const key in saveData) {
			const jsonPath = saveData[key as keyof typeof saveData];
			const result = jsonpath.query(payload, jsonPath);
			logger.debug(`updating ${key} for path $${jsonPath}`);
			if (
				isArrayKey<SessionData>(key as keyof typeof sessionData, sessionData)
			) {
				sessionData[key as keyof typeof sessionData] = result;
			} else {
				sessionData[key as keyof typeof sessionData] = result[0];
			}
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
		let sessionData: SessionData = {} as SessionData;
		if (!keyExists) {
			const raw = yamlToJson(
				path.resolve(__dirname, "../config/TRV11/session-data.yaml")
			) as any;
			sessionData = raw.session_data;
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
		logger.info(`loading session data for ${transactionID}`);
		// console.log("raw data is ", rawData, typeof rawData, "for ", transactionID);
		const sessionData = JSON.parse(rawData ?? "{}") as SessionData;
		return sessionData;
	} else {
		throw Error("transaction ID  does not  exist");
	}
}
