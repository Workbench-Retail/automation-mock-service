import { SessionData } from "../../../session-types";

export const onStatusGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }

  if (sessionData.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  if (sessionData.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  if (sessionData.quote) {
    existingPayload.message.order.quote = sessionData.quote;
  }

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (sessionData.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;
  }

  switch (sessionData?.stateCode) {
    case "Pending":
      existingPayload.message.order.state = "Accepted";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        sessionData.stateCode;
      break;
    case "Packed":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        sessionData.stateCode;
      break;
    case "Agent-assigned":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        sessionData.stateCode;
      break;
    case "At-pickup":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        sessionData.stateCode;

      break;
    case "Order-picked":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        "Order-picked-up";
      existingPayload.message.order.documents = [
        {
          url: "https://invoice_url",
          label: "Invoice",
        },
      ];
      existingPayload.message.order.fulfillments[0].start.time = {
        timestamp: existingPayload.context.timestamp,
      };
      break;
    case "At-delivery":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        sessionData.stateCode;
      break;
    case "Order-delivered":
      existingPayload.message.order.state = "Completed";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        sessionData.stateCode;
      existingPayload.message.order.fulfillments[0].end.time = {
        timestamp: existingPayload.context.timestamp,
      };
      break;
    case "Order-picked-self-delivery":
      existingPayload.message.order.state = "Completed";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        "Order-picked-up";
      existingPayload.message.order.fulfillments[0].end.time = {
        timestamp: existingPayload.context.timestamp,
      };
      break;
    case "RTO-Disposed":
      existingPayload.message.order.state = "Completed";
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillment: any) => {
          if (fulfillment.type === "RTO") {
            fulfillment.state.descriptor.code = sessionData.stateCode;
            return fulfillment;
          }
          return fulfillment;
        });
      break;
  }

  existingPayload.message.order.created_at =
    sessionData.confirm_created_at_timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  return existingPayload;
};
