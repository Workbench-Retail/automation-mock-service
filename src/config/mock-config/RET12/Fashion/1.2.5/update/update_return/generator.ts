import { SessionData, Input } from "../../../../session-types";

export const updateReturnGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }

  let parentItemId = "";

  sessionData.items.forEach((item) => {
    if (item.id === inputs?.returnItemId) {
      parentItemId = item.parent_item_id;
    }
  });

  existingPayload.message.order.fulfillments = [
    {
      type: "Return",
      tags: [
        {
          code: "return_request",
          list: [
            {
              code: "id",
              value: "R1",
            },
            {
              code: "item_id",
              value: inputs?.returnItemId,
            },
            {
              code: "parent_item_id",
              value: sessionData.items.find(
                (item) => item.id === inputs?.returnItemId
              ).parent_item_id,
            },
            {
              code: "item_quantity",
              value: "1",
            },
            {
              code: "reason_id",
              value: inputs?.returnReason,
            },
            {
              code: "reason_desc",
              value: "detailed description for return",
            },
            {
              code: "images",
              value:
                "https://automation.ondc.org/image1,https://automation.ondc.org/image2",
            },
            {
              code: "ttl_approval",
              value: "PT24H",
            },
            {
              code: "ttl_reverseqc",
              value: "P3D",
            },
          ],
        },
      ],
    },
  ];

  return existingPayload;
};
