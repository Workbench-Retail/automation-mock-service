import { SessionData, Input } from "../../../session-types";

export async function initGenerator(
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  existingPayload.message.order.billing.created_at =
    existingPayload.context.timestamp;
  existingPayload.message.order.billing.updated_at =
    existingPayload.context.timestamp;

  console.log(
    "wokring inputs",
    inputs,
    sessionData?.fulfillments?.find(
      (fulfillment) =>
        fulfillment.type === inputs?.fulfillmentType ||
        fulfillment.type === "Delivery"
    )
  );

  const selectedFulfillmentType = inputs?.fulfillmentType || "Delivery";

  if (sessionData.select_fulfillment) {
    existingPayload.message.order.fulfillments[0] = {
      id: sessionData?.fulfillments?.find(
        (fulfillment) => fulfillment.type === selectedFulfillmentType
      )?.id,
      type: sessionData?.fulfillments?.find(
        (fulfillment) => fulfillment.type === selectedFulfillmentType
      )?.type,
      end: {
        location: {
          gps: sessionData?.select_fulfillment[0].end.location.gps,
          address: existingPayload.message.order.billing.address,
        },
        contact: {
          phone: "9886098860",
        },
      },
    };
  }

  return existingPayload;
}
