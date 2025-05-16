import { SessionData, Input } from "../../../../session-types";

export async function initFulfillmentArrayGenerator(
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items.map((item: any) => {
      const fulfillmentId = item.fulfillment_ids[0];
      delete item.fulfillment_ids;

      return {
        ...item,
        fulfillment_id: fulfillmentId,
      };
    });
  }

  existingPayload.message.order.billing.created_at =
    existingPayload.context.timestamp;
  existingPayload.message.order.billing.updated_at =
    existingPayload.context.timestamp;

  if (sessionData.select_fulfillment && sessionData.select_fulfillment.length) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments?.map(
      (fulfillment: any) => {
        return {
          ...fulfillment,
          end: {
            location: {
              gps: sessionData?.select_fulfillment?.[0]?.end?.location?.gps,
              address: existingPayload.message.order.billing.address,
            },
            contact: {
              phone: "9886098860",
            },
          },
        };
      }
    );
  }

  return existingPayload;
}
