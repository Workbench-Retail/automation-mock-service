import { buildRetailQuote } from "../../../../../../../utils/generic-utils";
import { SessionData } from "../../../../session-types";
import { on_search_items } from "../../data";

export const onSelectMultipleFulfillmentGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items.map((item: any) => {
      return {
        ...item,
        fulfillment_id: existingPayload.message.order.fulfillments?.find(
          (fulfillment: any) => fulfillment.type === "Delivery"
        )?.id,
      };
    });
  }

  existingPayload.message.order.quote = buildRetailQuote(
    existingPayload.message.order.items,
    on_search_items,
    existingPayload.message.order.fulfillments
  );

  return existingPayload;
};
