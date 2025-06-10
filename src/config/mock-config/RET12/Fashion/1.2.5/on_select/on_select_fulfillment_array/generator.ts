import { buildRetailQuote } from "../../../../../../../utils/generic-utils";
import { SessionData } from "../../../../session-types";
import { on_search_items } from "../../data";

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

export const onSelectFulfillmentArrayGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData?.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData?.items) {
    existingPayload.message.order.items = sessionData.items.map(
      (item: any, index: number) => {
        return {
          ...item,
          fulfillment_ids: index % 2 === 0 ? ["F1", "F2"] : ["F1"],
        };
      }
    );
  }

  existingPayload.message.order.quote = buildRetailQuote(
    existingPayload.message.order.items,
    on_search_items,
    existingPayload.message.order.fulfillments
  );

  return existingPayload;
};
