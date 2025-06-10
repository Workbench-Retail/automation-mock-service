import { SessionData } from "../../../../session-types";

export async function on_init_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  existingPayload.message.order.items = sessionData.items;
  existingPayload.message.order.fulfillments = sessionData.fulfillments;
  existingPayload.message.order.billing = sessionData.billing;
  existingPayload.message.order.provider = sessionData.provider;
  existingPayload.message.order.quote = sessionData.quote;
  existingPayload.message.order.quote.breakup =
    existingPayload.message.order.quote.breakup.map((brkItm: any) => {
      const { quantity, ...rest } = brkItm.item || {};
      return {
        ...brkItm,
        item: rest,
      };
    });
  return existingPayload;
}
