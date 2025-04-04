import { getFutureDate } from "../../../../../utils/generic-utils";
import { SessionData, Input } from "../../../session-types";

export async function searchGenerator(
  existingPayload: any,
  sessionData: SessionData,
  inputs: Input | undefined
) {
  existingPayload.message.intent.provider.time.schedule.holidays = [
    getFutureDate(10),
    getFutureDate(15),
  ];

  if (inputs?.feature_discovery) {
    let codesArray = inputs.feature_discovery;

    existingPayload.message.intent.tags =
      existingPayload.message.intent.tags.map((tag: any) => {
        if (tag.code === "lbnp_features") {
          const newTags = codesArray.map((code) => {
            return {
              code: code,
              value: "yes",
            };
          });

          tag.list = newTags;
        }

        return tag;
      });
  }

  return existingPayload;
}
