import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { RedisService } from "ondc-automation-cache-lib";
import jsonpath from "jsonpath";

import { SessionData } from "../config/TRV11/session-types";
import logger from "../utils/logger";
import { isArrayKey } from "../types/type-utils";

export function updateSessionData(
  saveData: Record<
    string,
    string | { path: string; mode?: "append" | "override" }
  >,
  payload: any,
  sessionData: SessionData,
  errorData?: {
    code: number;
    message: string;
  }
) {
  logger.info(`updating session`);
  try {
    for (const key in saveData) {
      const entry = saveData[key];
      let jsonPath: string;
      let mode: "append" | "override" = "override"; // default mode

      // Support legacy string format
      if (typeof entry === "string") {
        jsonPath = entry;
      } else {
        jsonPath = entry.path;
        mode = entry.mode ?? "override";
      }

      const result = jsonpath.query(payload, jsonPath);
      logger.debug(`updating ${key} for path ${jsonPath} with mode ${mode}`);

      if (mode === "append") {
        const existing = sessionData[key as keyof SessionData] || [];
        if (!Array.isArray(existing)) {
          logger.warn(`Expected array for ${key}, found: ${typeof existing}`);
          sessionData[key as keyof SessionData] = result;
          continue;
        }
        sessionData[key as keyof SessionData] = existing.concat(result);
      } else {
        if (isArrayKey<SessionData>(key as keyof SessionData, sessionData)) {
          sessionData[key as keyof SessionData] = result;
        } else {
          sessionData[key as keyof SessionData] = result[0];
        }
      }
    }

    if (errorData) {
      sessionData.error_code = errorData.code.toString();
      sessionData.error_message = errorData.message;
    } else {
      sessionData.error_code = undefined;
      sessionData.error_message = undefined;
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

export async function saveData(
  action: string,
  payload: any,
  subscriber_url: string,
  errorData?: {
    code: number;
    message: string;
  }
) {
  try {
    const sessionData = await loadSessionData(
      payload?.context.transaction_id,
      subscriber_url
    );

    let actionFolderPath = path.resolve(
      __dirname,
      `../config/TRV11/METRO/${payload.context.version}/${action}`
    );
    if (/\/update$/.test(actionFolderPath)) {
      actionFolderPath += "_";
    }
    const saveDataFilePath = path.join(actionFolderPath, "save-data.yaml");
    const fileContent = fs.readFileSync(saveDataFilePath, "utf8");
    const saveData = yaml.load(fileContent) as any;
    updateSessionData(saveData["save-data"], payload, sessionData, errorData);
    await RedisService.setKey(
      `MOCK_${payload?.context.transaction_id}::${subscriber_url}`,
      JSON.stringify(sessionData),
      1800
    );
    console.log(subscriber_url);
    logger.info("Data saved to session");
  } catch (e) {
    logger.error("Error in saving data to session", e);
  }
}

export async function loadSessionData(
  transactionID: string,
  subscriber_url: string
) {
  const key = `MOCK_${transactionID}::${subscriber_url}`
  const keyExists = await RedisService.keyExists(key);
  let sessionData: SessionData = {} as SessionData;
  if (!keyExists) {
    const raw = yamlToJson(
      path.resolve(__dirname, "../config/TRV11/session-data.yaml")
    ) as any;
    sessionData = raw.session_data;
    sessionData.transaction_id = transactionID;
    sessionData.bpp_id = sessionData.bap_id = "dev-automation.ondc.org";
    sessionData.bap_uri = process.env.BAP_URI;
    sessionData.bpp_uri = process.env.BPP_URI;
    sessionData.subscriber_url = subscriber_url;
    logger.info(`new session data is ${JSON.stringify(sessionData)}`);
    return sessionData;
  } else {
    const rawData = await RedisService.getKey(
      `MOCK_${transactionID}::${subscriber_url}`
    );
    logger.info(`loading session data for ${transactionID}`);
    const sessionData = JSON.parse(rawData ?? "{}") as SessionData;
    return sessionData;
  }
}
