import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { RedisService } from "ondc-automation-cache-lib";
import * as jp from 'jsonpath';
import { SessionData } from '../config/TRV11/session-types';
import logger from '../utils/logger';

export function updateSessionData(savedata: Record<string, string>, payload: object, sessionData: SessionData): void {
    for (const [key, jsonPath] of Object.entries(savedata)) {
      try {
        // Extract the value from the payload using the JSON path
        const result = jp.query(payload, jsonPath);
  
        // If the JSON path resolves to a single value, store it directly; otherwise, store the array
        sessionData[key as keyof typeof sessionData] = result.length === 1 ? result[0] : result;
      } catch (error) {
        console.error(`Error resolving JSON path for key '${key}': ${error}`);
      }
    }
  }
function yamlToJson(filePath: string): object {
	try {
		// Read the YAML file contents
		const fileContents = fs.readFileSync(filePath, "utf8");

		// Convert the YAML content to a JSON-compatible JavaScript object
		const jsonData = yaml.load(fileContents) as any; 

		// Return the converted JSON data
	    return jsonData;
	} catch (error) {
		console.error(
			`Error reading or parsing YAML file at ${filePath}: ${error}`
		);
		throw error;
	}
}

export async function saveData(action: string, payload: any) {
    try{
        const keyExists = await RedisService.keyExists(payload?.context.transaction_id);
        let sessionData
        if(!keyExists){
            sessionData = yamlToJson('./session-data.yaml') as SessionData;
        }else {
            sessionData = await loadSessionData(payload?.context.transaction_id)
        }
        const actionFolderPath = path.resolve('automation mock config', action);
        const saveDataFilePath = path.join(actionFolderPath, 'save-data.yaml');
        const fileContent = fs.readFileSync(saveDataFilePath, 'utf8');
        const saveData = yaml.load(fileContent) as any;
        updateSessionData(saveData,payload,sessionData)
        await RedisService.setKey(
            payload?.context.transaction_id,
            JSON.stringify(sessionData)
        )
    }
    catch{
        logger.info("Error in saving data to session")
    }
}

export async function loadSessionData(transactionID: string) {
        if(await RedisService.keyExists(transactionID)){
            const rawData = await RedisService.getKey(transactionID)
            const sessionData = JSON.parse(rawData as string) as SessionData;
            return sessionData;
        }else{
            throw Error("transaction ID  does not  exist")
        }
}
