import { SessionData, Input } from "../../../session-types";

import { getFutureDate } from "../../../../../../utils/generic-utils";



export const searchGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) => {

  const featureDiscoveryCode = inputs?.feature_discovery || [];

  existingPayload.message.intent.tags.push({
    code: "bap_features",
    list: featureDiscoveryCode.map((code) => {
      return {
        code: code,
        value: "yes",
      };
    }),
  });
   
  return existingPayload;
};
