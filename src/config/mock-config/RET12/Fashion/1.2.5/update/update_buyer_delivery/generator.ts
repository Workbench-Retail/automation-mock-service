import { SessionData } from "../../../../session-types";
import { getTimestampFromDuration } from "../../../../../../../utils/generic-utils";

export const updateBuyerDeliveryGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  action_id: string
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }

  if (action_id == "update_buyer_delivery_intermin") {
    existingPayload.message.order.fulfillments = [
      {
        id: sessionData.fulfillments?.[0]?.id,
        tags: [
          {
            code: "update_state",
            list: [
              {
                code: "state",
                value: "Order-picked-up",
              },
              {
                code: "timestamp",
                value: existingPayload.context.timestamp,
              },
              {
                code: "start_time",
                value: existingPayload.context.timestamp,
              },
              {
                code: "end_time",
                value: getTimestampFromDuration(
                  existingPayload.context.timestamp,
                  "PT15M"
                ),
              },
            ],
          },
          {
            code: "update_agent_details",
            list: [
              {
                code: "name",
                value: "agent_name",
              },
              {
                code: "phone",
                value: "9886098860",
              },
              {
                code: "provider_id",
                value: "lsp.com",
              },
            ],
          },
          {
            code: "update_label",
            list: [
              {
                code: "type",
                value: "pdf",
              },
              {
                code: "url",
                value: "https://linkToPdf.com",
              },
            ],
          },
        ],
      },
    ];
  } else if (action_id === "update_buyer_delivery_final") {
    existingPayload.message.order.fulfillments = [
      {
        id: sessionData.fulfillments?.[0]?.id,
        tags: [
          {
            code: "update_state",
            list: [
              {
                code: "state",
                value: "Order-delivered",
              },
              {
                code: "timestamp",
                value: existingPayload.context.timestamp,
              },
              {
                code: "start_time",
                value:
                  sessionData?.buyer_delivery_start_time ||
                  existingPayload.context.timestamp,
              },
              {
                code: "end_time",
                value: existingPayload.context.timestamp,
              },
            ],
          },
        ],
      },
    ];
  }

  return existingPayload;
};
