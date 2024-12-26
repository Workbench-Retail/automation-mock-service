import extractPayloadData from "../utils/extract-payload-data";
import { resolveTemplate } from "../utils/template_parser";
import status from "../templates/status.json";
import { sendResponse } from "../utils/api";
import { generateRandomUUID } from "../utils/generate_uuids";
import { getFromCache, setToCache } from "../utils/redis";
import { CACHE_DB_2 } from "../constants/constants";

const handleOnConfirmRequest = async (payload: any) => {
  let json_cache_data: any = await getFromCache(payload.context.transaction_id,CACHE_DB_2);
  const extracted_data:any = {}
  extracted_data["message_id"] = generateRandomUUID()
  extracted_data["timestamp"] = new Date().toISOString();
  const combined_data = {...json_cache_data,...extracted_data}
  const responsePayload = resolveTemplate(status, combined_data);
  sendResponse(responsePayload, "status");
  await setToCache(
    payload?.context?.transaction_id,
    combined_data,
    CACHE_DB_2
  );
  };


  export default handleOnConfirmRequest;

