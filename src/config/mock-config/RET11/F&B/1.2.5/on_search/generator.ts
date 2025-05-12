import { SessionData, Input } from "../../../session-types";

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

  return existingPayload;
};
