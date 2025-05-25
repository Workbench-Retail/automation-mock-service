import { SessionData, Input } from "../../../session-types";

export async function initGenerator(
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  existingPayload.message.order.billing.created_at =
    existingPayload.context.timestamp;
  existingPayload.message.order.billing.updated_at =
    existingPayload.context.timestamp;

  const selectedFulfillmentType = inputs?.fulfillmentType || "Delivery";

  const selectedFulfillment = sessionData?.fulfillments?.find(
    (fulfillment) => fulfillment.type === selectedFulfillmentType
  );

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items.map((item) => {
      item.fulfillment_id = selectedFulfillment.id;
      return item;
    });
  }

  if (sessionData.select_fulfillment) {
    existingPayload.message.order.fulfillments = [
      {
        id: selectedFulfillment?.id,
        type: selectedFulfillment?.type,
        end: {
          location: {
            gps: sessionData?.select_fulfillment[0].end.location.gps,
            address: {
              ...existingPayload.message.order.billing.address,
              area_code:
                sessionData?.select_fulfillment[0].end.location.address
                  .area_code,
            },
          },
          contact: {
            phone: "9886098860",
          },
        },
        ...(selectedFulfillment?.tags
          ? { tags: selectedFulfillment.tags }
          : {}),
      },
    ];
  }

  if (sessionData?.offers) {
    existingPayload.message.order.offers = sessionData?.offers;
  }

  return existingPayload;
}
