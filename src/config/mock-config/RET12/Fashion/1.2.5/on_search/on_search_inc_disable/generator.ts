import { SessionData } from "../../../../session-types";
import { getTimestampFromDuration } from "../../../../../../../utils/generic-utils";

export const onSearchIncDisableGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.context.city = "*";

  existingPayload.message.catalog[
    "bpp/providers"
  ][0].locations[0].time.timestamp = existingPayload.context.timestamp;
  existingPayload.message.catalog[
    "bpp/providers"
  ][0].locations[0].time.range.start = existingPayload.context.timestamp;
  existingPayload.message.catalog[
    "bpp/providers"
  ][0].locations[0].time.range.end = getTimestampFromDuration(
    existingPayload.context.timestamp,
    "PT45M"
  );

  return existingPayload;
};
