import { SessionData } from "../../NIC2004:60232/session-types";
import { createMockResponseMETRO201 } from "./2.0.1/generation-pipline";
import { createMockResponseMETRO200 } from "./2.0.0/generation-pipline";
import { ApiServiceCache, RedisService } from "ondc-automation-cache-lib";
import { SessionCache } from "../../../types/api-session-cache";
import { createMockReponseBUS200 } from "../BUS/2.0.0/generation-pipline";
import { createBuyerUrl, createSellerUrl } from "../../../utils/request-utils";

import { createMockReponseLOGISTICS200 } from "./../../NIC2004:60232/LOGISTICS/1.2.5/generation-pipeline";

export async function createMockResponse(
  session_id: string,
  sessionData: SessionData,
  action_id: string
) {
  RedisService.useDb(0);
  console.log("session id in create mock response", session_id);
  const api_session = (await RedisService.getKey(session_id)) ?? "";
  console.log("api_session is ", api_session);
  const data = JSON.parse(api_session) as SessionCache;
  console.log("data is", data);
  const { version, usecaseId, domain } = data;
  console.log(version, usecaseId);

  let payload: any = {};

  payload = await createMockReponseLOGISTICS200(action_id, sessionData, domain);

  console.log("payload", payload.context, payload);

  if (data.npType === "BAP") {
    payload.context.bap_uri = data.subscriberUrl;
    payload.context.bpp_uri = createSellerUrl(data.domain, data.version);
  } else {
    payload.context.bpp_uri = data.subscriberUrl;
    payload.context.bap_uri = createBuyerUrl(data.domain, data.version);
  }

  if (action_id.startsWith("search")) {
    delete payload.context.bpp_id;
    delete payload.context.bpp_uri;
  }

  return payload;
}
