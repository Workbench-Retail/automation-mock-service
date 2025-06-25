import { SessionData } from "../../../../session-types";
import { getUpdatedBilling } from "../../api-objects/billing";
import { createFulfillments } from "../../api-objects/fulfillments";
import { TagsType } from "../../api-objects/tags";

export async function confirm_fin_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  const timeIso = new Date().toISOString();

  existingPayload.message.order.id = generateSixDigitCode();
  existingPayload.message.order.created_at = existingPayload.context.timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;
  existingPayload.message.order.quote = sessionData.quote;
  existingPayload.message.order.billing = getUpdatedBilling(
    sessionData.billing
  );
  existingPayload.message.order.items = sessionData.items;
  existingPayload.message.order.provider = sessionData.provider;
  existingPayload.message.order.payment.params.amount =
    sessionData.quote?.price?.value;
  existingPayload.message.order.payment.params.transaction_id =
    "mock_payment_id_123";
  existingPayload.message.order.fulfillments = createFulfillments(
    "confirm",
    "confirm",
    sessionData,
    existingPayload.message.order.fulfillments
  );
  const existingTags = existingPayload.message.order.tags as TagsType;
  const bppTerms = existingTags.find((f) => f.code === "bpp_terms");
  if (bppTerms) {
    bppTerms.list = sessionData.bpp_terms.list;
  }
  const itemId = existingPayload.message.order.items[0].id;
  existingPayload.message.order.quote.breakup.push({
    "@ondc/org/item_id": `${itemId}`,
    "@ondc/org/title_type": "offer",
    price: {
      currency: "INR",
      value: "0",
    },
    item: {
      tags: [
        {
          code: "quote",
          list: [
            {
              code: "type",
              value: "item",
            },
          ],
        },
        {
          code: "finance_terms",
          list: [
            {
              code: "subvention_type",
              value: "percent",
            },
            {
              code: "subvention_amount",
              value: "10.0",
            },
            {
              code: "provider_tax_number",
              value: "PAN_number",
            },
            {
              code: "bank_account_no",
              value: "bank_account_number",
            },
            {
              code: "ifsc_code",
              value: "ifsc_code",
            },
          ],
        },
        {
          code: "finance_txn",
          list: [
            {
              code: "loan_completed",
              value: "yes",
            },
            {
              code: "down_payment",
              value: "1000.00",
            },
            {
              code: "loan_amount",
              value: "9000.00",
            },
            {
              code: "loan_provider",
              value: "PAN_number",
            },
            {
              code: "transaction_id",
              value: "T3937",
            },
            {
              code: "timestamp",
              value: "2025-01-08T03:00:00.000Z",
            },
          ],
        },
      ],
    },
  });
  existingPayload.message.order.tags = sessionData.order_tags;
  return existingPayload;
}

export function generateSixDigitCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
