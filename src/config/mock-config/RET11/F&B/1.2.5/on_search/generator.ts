import { SessionData, Input } from "../../../session-types";
import { discount, buyXgetY } from "./offers";

export const onSearchGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) => {
  if (inputs?.npType)
    existingPayload.message.catalog["bpp/descriptor"].tags = [
      {
        code: "bpp_terms",
        list: [
          {
            code: "np_type",
            value: inputs.npType,
          },
          {
            code: "accept_bap_terms",
            value: "Y",
          },
        ],
      },
    ];

  if (inputs?.offers) {
    console.log("inputs", inputs);
    if (inputs?.offers === "Discount") {
      existingPayload.message.catalog["bpp/providers"][0].offers = discount;
    }

    if (inputs.offers === "BuyXGetY") {
      existingPayload.message.catalog["bpp/providers"][0].offers = buyXgetY;
    }
  }

  return existingPayload;
};
