import { SessionData } from "../../../../session-types";

export const onSearch3Generator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.context.city = "*";

  existingPayload.message.catalog[
    "bpp/providers"
  ][0].locations[0].time.timestamp = existingPayload.context.timestamp;

  return existingPayload;
};
