import extractPayloadData from "../utils/extract-payload-data";
import { resolveTemplate } from "../utils/template_parser";
import on_status from "../templates/on_status.json";
import { sendResponse } from "../utils/api";
import { RedisService } from "ondc-automation-cache-lib";
import { generateRandomUUID } from "../utils/generate_uuids";
import { getFromCache, setToCache } from "../utils/redis";
import { CACHE_DB_2 } from "../constants/constants";

const handleStatusRequest = async (payload: any) => {
  let json_cache_data: any = await getFromCache(payload.context.transaction_id,CACHE_DB_2);
  const extracted_data:any = {}
  const time_stamp = new Date().toISOString();
  extracted_data["timestamp"] = time_stamp
  extracted_data["updated_at"] = time_stamp
  const combined_data = {...json_cache_data,...extracted_data}
  const responsePayload = resolveTemplate(on_status, combined_data);
  await setToCache(
    payload?.context?.transaction_id,
    combined_data,
    CACHE_DB_2
  );
  sendResponse(responsePayload, "on_status");
  };


  export default handleStatusRequest;

