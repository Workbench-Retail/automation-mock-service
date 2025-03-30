import { SessionData } from "../../../session-types";

export const onStatusGenerator = async (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.id = sessionData.order_id;
  if (sessionData?.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;
  }

  switch (sessionData.stateCode) {
    case "Order-picked-up":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillemt: any) => {
          fulfillemt.state.descriptor.code = sessionData.stateCode;
          fulfillemt.start.time.timestamp = existingPayload.context?.timestamp;
          const p2pList = [
            {
              code: "gps_enabled",
              value: "yes",
            },
            {
              code: "url_enabled",
              value: "no",
            },
          ];

          const p2h2pList = [
            {
              code: "gps_enabled",
              value: "no",
            },
            {
              code: "url_enabled",
              value: "yes",
            },
            {
              code: "url",
              value: "https://tracking_url.com",
            },
          ];

          fulfillemt.tags.push({
            code: "tracking",
            list: sessionData?.shipment_method === "P2P" ? p2pList : p2h2pList,
          });
          return fulfillemt;
        });
      break;
    case "Out-for-delivery":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillemt: any) => {
          fulfillemt.state.descriptor.code = sessionData.stateCode;
          return fulfillemt;
        });
      break;
    case "Order-delivered":
      existingPayload.message.order.state = "Completed";
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillemt: any) => {
          fulfillemt.state.descriptor.code = sessionData.stateCode;
          fulfillemt.end.time.timestamp = existingPayload.context.timestamp;
          return fulfillemt;
        });
      break;
    case "RTO-Delivered":
      existingPayload.message.order.state = "Completed";
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillment: any) => {
          if (fulfillment.type === "RTO") {
            let fulfillmentState = "RTO-Disposed";

            sessionData?.confirm_fulfillments?.forEach((item: any) => {
              item.tags.forEach((tag: any) => {
                if (tag.code === "rto_action") {
                  tag.list.forEach((lst: any) => {
                    if (
                      lst.code === "return_to_origin" &&
                      lst.value === "yes"
                    ) {
                      fulfillmentState = "RTO-Delivered";
                    }
                  });
                }
              });
            });

            fulfillment.state.descriptor.code = fulfillmentState;
            fulfillment.end.time.timestamp = existingPayload.context.timestamp;
          }
          return fulfillment;
        });
      break;
    default:
      existingPayload.message.order.state = "In-progress";
  }

  existingPayload.message.order.fulfillments.forEach((fulfillment: any) => {
    fulfillment.start.time.timestamp = existingPayload.context.timestamp;
  });

  if (sessionData?.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  existingPayload.message.order.quote = sessionData.quote;

  return existingPayload;
};
