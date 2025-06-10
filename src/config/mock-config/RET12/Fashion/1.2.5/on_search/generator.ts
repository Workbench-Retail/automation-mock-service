import { SessionData, Input } from "../../../session-types";
import { getFutureDate } from "../../../../../../utils/generic-utils";

export const onSearchGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) => {
  
  existingPayload.message.catalog[
    "bpp/providers"
  ][0].locations[0].time.schedule.holidays = [
    getFutureDate(10),
    getFutureDate(15),
  ];

  return existingPayload;
};
