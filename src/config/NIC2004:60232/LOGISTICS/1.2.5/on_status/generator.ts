import { SessionData } from "../../../session-types";

const getPaymentStatus = (paymentType: string, orderState: string) => {
  if (paymentType === "ON-FULFILLMENT" && orderState === "Completed") {
    return "PAID";
  }

  if (paymentType === "ON-ORDER") {
    return "PAID";
  }

  if (paymentType === "POST-FULFILLMENT") {
    return "NOT-PAID";
  }

  return "NOT-PAID";
};

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
            list: sessionData?.domain === "ONDC:LOG10" ? p2pList : p2h2pList,
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
    case "At-pickup":
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
          if (sessionData?.is_cod === "yes") {
            fulfillemt.tags.push({
              code: "cod_collection_detail",
              list: [
                {
                  code: "currency",
                  value: "INR",
                },
                {
                  code: "value",
                  value: "325.00",
                },
                {
                  code: "transaction_id",
                  value: "3937",
                },
                {
                  code: "timestamp",
                  value: existingPayload.context.timestamp,
                },
              ],
            });
          }
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
    case "At-destination-hub":
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillemt: any) => {
          fulfillemt.state.descriptor.code = sessionData.stateCode;
          return fulfillemt;
        });
      break;
    case "In-transit":
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillemt: any) => {
          fulfillemt.state.descriptor.code = sessionData.stateCode;
          return fulfillemt;
        });
      break;
    default:
      existingPayload.message.order.state = "In-progress";
  }

  if (sessionData?.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  existingPayload.message.order.quote = sessionData.quote;

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  existingPayload.message.order.payment.status = getPaymentStatus(
    sessionData.payment_type as string,
    existingPayload.message.order.state
  );

  if (
    sessionData.payment_type === "ON-FULFILLMENT" &&
    existingPayload.message.order.state === "Completed"
  ) {
    existingPayload.message.order.payment["@ondc/org/settlement_details"] = [
      {
        ...existingPayload.message.order.payment[
          "@ondc/org/settlement_details"
        ][0],
        settlement_status: "PAID",
        settlement_reference: "XXXXXXXXX",
        settlement_timestamp: existingPayload.context.timestamp,
      },
    ];
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  if (sessionData?.cancellation) {
    existingPayload.message.order.cancellation = sessionData.cancellation;
  }

  if (sessionData.linked_order) {
    existingPayload.message.order["@ondc/org/linked_order"] =
      sessionData.linked_order;
  }

  return existingPayload;
};
