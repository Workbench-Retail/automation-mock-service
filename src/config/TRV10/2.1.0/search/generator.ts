import { SessionData } from "../../session-types";

export async function searchGenerator(existingPayload: any, sessionData: SessionData) {
  // existingPayload.context = existingPayload.context || {};
  // if (sessionData.transaction_id) {
  //   existingPayload.context.transaction_id = sessionData.transaction_id;
  // }
  // if (sessionData.message_id) {
  //   existingPayload.context.message_id = sessionData.message_id;
  // }
  return existingPayload;
} 