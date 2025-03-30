import { getFutureDate } from "../../../../../../utils/generic-utils";

export async function search1Generator(existingPayload: any, sessionData: any) {
  existingPayload.message.intent.provider.time.schedule.holidays = [
    getFutureDate(10),
    getFutureDate(15),
  ];

  return existingPayload;
}
