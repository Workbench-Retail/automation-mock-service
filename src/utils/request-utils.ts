import axios from "axios";
import logger from "./logger";
import { saveData } from "../services/data-services";
import { error } from "console";

export async function sendToApiService(
  action: string,
  body: any,
  queryData: any
) {
  try {
    const domain = process.env.DOMAIN;
    const version = body.context.version ?? body.context.core_version;
    const url = `${process.env.API_SERVICE_LAYER}/${domain}/${version}/mock/${action}`;
    // console.log(action, JSON.stringify(body.message, null, 2));
    // Update context timestamp here?
    const subscriber_url = queryData.subscriber_url;
    if (!subscriber_url) {
      logger.error("subscriber url not provided");
      throw new Error("subscriber url not provided ");
    }
    await saveData(action, body,subscriber_url);
    logger.debug(`Sending response to api service ${url} ${action}`);

    const now = new Date().toISOString();
    body.context.timestamp = now;
    await axios.post(url, body, {
      params: {
        ...queryData,
      },
    });
  } catch (err) {
    logger.error("Error in sending response to api service", err);
  }
}

export function createSellerUrl(domain: string, version: string) {
  return `${process.env.API_SERVICE_LAYER}/${domain}/${version}/seller`;
}

export function createBuyerUrl(domain: string, version: string) {
  return `${process.env.API_SERVICE_LAYER}/${domain}/${version}/buyer`;
}
