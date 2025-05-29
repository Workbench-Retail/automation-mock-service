import { buildRetailQuote } from "../../../../../../utils/generic-utils";
import { SessionData } from "../../../session-types";
import { on_search_items, on_search_offers } from "../data";

type TagEntry = {
  code: string;
  value: string;
};

type Tag = {
  code: string;
  list: TagEntry[];
};

function getTagType(tags: Tag[]): string | undefined {
  const typeTag = tags.find((tag) => tag.code === "type");

  if (!typeTag) return undefined;

  const typeEntry = typeTag.list.find((entry) => entry.code === "type");

  return typeEntry?.value;
}

export async function onInitGenerator(
  existingPayload: any,
  sessionData: SessionData
) {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  let isBuyerDelivery = false;

  existingPayload.message.order.fulfillments = sessionData.fulfillments?.map(
    (fulfillment: any) => {
      if (fulfillment.type === "Buyer-Delivery") {
        isBuyerDelivery = true;
        fulfillment.tags.push({
          code: "rto_action",
          list: [
            {
              code: "return_to_origin",
              value: "yes",
            },
          ],
        });
      }

      return fulfillment;
    }
  );

  if (sessionData?.items) {
    if (!isBuyerDelivery) {
      existingPayload.message.order.items = sessionData.items.map((item) => {
        item.tags.push({
          code: "rto_action",
          list: [
            {
              code: "return_to_origin",
              value: "yes",
            },
          ],
        });

        return item;
      });
    } else {
      existingPayload.message.order.items = sessionData.items;
    }
  }

  if (sessionData?.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  existingPayload.message.order.quote = buildRetailQuote(
    existingPayload.message.order.items,
    on_search_items,
    existingPayload.message.order.fulfillments,
    {
      offers: sessionData?.offers,
      initalOffers: on_search_offers,
    }
  );

  existingPayload.message.order.tags = [
    {
      code: "bpp_terms",
      list: [
        {
          code: "tax_number",
          value: "12ABCDE3456FGZH",
        },
        {
          code: "provider_tax_number",
          value: "JSUFK2231H",
        },
        {
          code: "np_type",
          value: "MSN",
        },
      ],
    },
  ];

  return existingPayload;
}
