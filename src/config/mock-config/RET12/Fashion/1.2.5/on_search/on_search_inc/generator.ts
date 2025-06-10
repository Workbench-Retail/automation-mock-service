import { SessionData } from "../../../../session-types";

export const onSearchIncGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.context.city = "*";
  return existingPayload;
};
