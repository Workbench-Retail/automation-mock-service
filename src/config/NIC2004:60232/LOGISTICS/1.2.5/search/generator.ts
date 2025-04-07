import { getFutureDate } from "../../../../../utils/generic-utils";
import { SessionData, Input } from "../../../session-types";

const TatMapping: any = {
  "Immediate Delivery": {
    code: "PT60M",
    day: 0,
    pickupTime: "PT15M",
    orderPrepTime: "PT10M",
  },
  "Same Day Delivery": {
    code: "PT4H",
    day: 0,
    pickupTime: "PT1H",
    orderPrepTime: "PT1H",
  },
  "Next Day Delivery": {
    code: "P1D",
    day: 1,
    pickupTime: "PT4H",
    orderPrepTime: "PT4H",
  },
  "Standard Delivery": {
    code: "P2D",
    day: 2,
    pickupTime: "PT12H",
    orderPrepTime: "PT12H",
  },
  "Express Delivery": {
    code: "P3D",
    day: 2,
    pickupTime: "P1D",
    orderPrepTime: "PT1D",
  },
  "Instant Delivery": {
    code: "PT10M",
    day: 0,
    pickupTime: "PT2M",
    orderPrepTime: "PT2M",
  },
};

export async function searchGenerator(
  existingPayload: any,
  sessionData: SessionData,
  inputs: Input | undefined
) {
  existingPayload.message.intent.provider.time.schedule.holidays = [
    getFutureDate(10),
    getFutureDate(15),
  ];

  if (inputs?.feature_discovery?.length) {
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
  } else {
    delete existingPayload.message.intent.tags;
  }

  if (inputs?.category) {
    existingPayload.message.intent.provider.time.duration =
      TatMapping[inputs?.category].orderPrepTime;
  }

  return existingPayload;
}
