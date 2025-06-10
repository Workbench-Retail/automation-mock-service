import { SessionData } from "../../../../session-types";

interface TagItem {
  code: string;
  value: string;
}

interface Tag {
  code: string;
  list: TagItem[];
}

export async function on_status_rto_delivereddisposed_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  existingPayload.message.order.created_at =
    sessionData.confirm_created_at_timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;
  existingPayload.message.order.id = sessionData.order_id;
  existingPayload.message.order.billing = sessionData.billing;
  existingPayload.message.order.provider = sessionData.provider;
  existingPayload.message.order.payment = sessionData.payment;
  existingPayload.message.order.fulfillments = sessionData.fulfillments;
  existingPayload.message.order.state = sessionData.order_state;
  existingPayload.message.order.quote = sessionData.quote;
  existingPayload.message.order.items = sessionData.items;
  existingPayload.message.order.cancellation = sessionData.cancellation;

  const tags: Tag[] = existingPayload.message.order.fulfillments[1]?.tags ?? [];

  const total =
    tags
      .filter((tag) => tag.code === "quote_trail")
      .reduce((sum, tag) => {
        const valueItem = tag.list.find((item) => item.code === "value");
        const value = parseFloat(valueItem?.value ?? "0");
        return sum + value;
      }, 0) * -1;

  existingPayload.message.order.payment["@ondc/org/settlement_details"][1] = {
    settlement_counterparty: "buyer",
    settlement_phase: "refund",
    settlement_type: "upi",
    settlement_amount: total,
    settlement_timestamp: new Date(
      new Date(existingPayload.context.timestamp).getTime() - 500
    ).toISOString(),
  };

  existingPayload.message.order.fulfillments[1].state.descriptor.code =
    "RTO-Delivered";
  existingPayload.message.order.fulfillments[1].end.time.timestamp =
    existingPayload.context.timestamp;
  console.log("existingPayload", JSON.stringify(existingPayload));

  return existingPayload;
}
