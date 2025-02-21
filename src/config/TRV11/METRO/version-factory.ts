import { SessionData } from "../session-types";
import { createMockResponseMETRO201 } from "./2.0.1/generation-pipline";
import { createMockResponseMETRO200 } from "./2.0.0/generation-pipline";
import { ApiServiceCache, RedisService } from "ondc-automation-cache-lib";
import { SessionCache } from "../../../types/api-session-cache";
import { createMockReponseBUS200 } from "../BUS/2.0.0/generation-pipline";

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
  const { version, usecaseId } = data;
  console.log(version, usecaseId);

  if (usecaseId === "METRO") {
    if (version === "2.0.0") {
      return createMockResponseMETRO200(action_id, sessionData);
    } else if (version === "2.0.1") {
      return createMockResponseMETRO201(action_id, sessionData);
    }
  } else if (usecaseId === "BUS") {
    if (version === "2.0.0") {
      return createMockReponseBUS200(action_id, sessionData);
    }
  }
}
