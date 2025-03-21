import { SessionData } from "../../session-types";

export async function initGenerator(existingPayload: any, sessionData: SessionData) {
  // For init, update context information from session data
  if (sessionData.transaction_id) {
    existingPayload.context = existingPayload.context || {};
    existingPayload.context.transaction_id = sessionData.transaction_id;
  }
  if (sessionData.message_id) {
    existingPayload.context = existingPayload.context || {};
    existingPayload.context.message_id = sessionData.message_id;
  }
  return existingPayload;
} 