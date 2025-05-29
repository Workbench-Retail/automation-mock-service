import { SessionData, Input } from "../../../session-types";
import { discount, buyXgetY } from "./offers";

export const onSearchGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) => {
  if (inputs?.offers?.length) {
    console.log("inputs", inputs, inputs.offers.includes());
    if (inputs.offers.includes("discount")) {
      existingPayload.message.catalog["bpp/providers"][0].offers = discount;
    }

    if (inputs.offers.includes("buyXgetY")) {
      existingPayload.message.catalog["bpp/providers"][0].offers = buyXgetY;
    }
  }

  return existingPayload;
};
