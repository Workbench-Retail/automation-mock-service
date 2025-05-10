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

  console.log("sessionData", sessionData.fulfillments);

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
    case "Order-pciked":
      existingPayload.message.order.state = "In-progress";
      existingPayload.message.order.fulfillments[0].state.descriptor.code =
        sessionData.stateCode;
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
      break;
  }

  return existingPayload;
};
