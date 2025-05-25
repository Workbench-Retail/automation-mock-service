import { SessionData } from "../../../../session-types";

export const updateSettlelmentGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  action_id: string
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }

  let refundAmount = "";

  if (action_id === "update_settelment_cancel") {
    existingPayload.message.order.fulfillments[0].id =
      sessionData.fulfillments?.find(
        (fulfillment: any) => fulfillment.type === "Cancel"
      )?.id;
  } else if (action_id === "update_settelment_return") {
    sessionData.fulfillments?.forEach((fulfillment) => {
      if (fulfillment.type === "Return") {
        const total = fulfillment.tags
          .filter((tag: any) => tag.code === "quote_trail")
          .map((tag: any) => {
            const valueItem = tag.list.find(
              (item: any) => item.code === "value"
            );
            return valueItem ? parseFloat(valueItem.value) : 0;
          })
          .reduce((sum: any, val: any) => sum + val, 0);

        refundAmount = Math.abs(total).toString();

        existingPayload.message.order.fulfillments = [
          {
            id: fulfillment.id,
            type: "Return",
          },
        ];
      }
    });
  } else if (action_id === "update_settelment_part_cancel") {
    refundAmount = (
      parseInt(sessionData?.on_confirm_quote?.price?.value) -
      parseInt(sessionData?.on_update_quote?.price?.value)
    ).toString();
  }

  existingPayload.message.order.payment[
    "@ondc/org/settlement_details"
  ][0].settlement_amount = refundAmount;
  existingPayload.message.order.payment[
    "@ondc/org/settlement_details"
  ][0].settlement_timestamp = existingPayload.context.timestamp;

  return existingPayload;
};
