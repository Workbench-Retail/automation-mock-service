import { getFutureDate } from "../../../../../utils/generic-utils";
import { SessionData } from "../../../session-types";

export async function searchGenerator(
  existingPayload: any,
  sessionData: SessionData
) {
  existingPayload.message.intent.provider.time.schedule.holidays = [
    getFutureDate(10),
    getFutureDate(15),
  ];

  return existingPayload;
}
