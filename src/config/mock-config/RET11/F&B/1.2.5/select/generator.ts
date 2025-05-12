import { SessionData, Input } from "../../../session-types";
import { v4 as uuidv4 } from "uuid";

type TagEntry = {
  code: string;
  value: string;
};

type Tag = {
  code: string;
  list: TagEntry[];
};

type Item = {
  id: string;
  tags?: Tag[];
};

function getParentIdValue(items: Item[], id: string): string | null {
  const item = items.find((i) => i.id === id);
  if (!item) return null;

  const parentTag = item.tags?.find((tag) => tag.code === "parent");
  if (!parentTag) return null;

  const idEntry = parentTag.list.find((entry) => entry.code === "id");
  return idEntry?.value || null;
}

export const selectGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs?: Input
) => {
  if (inputs?.items) {
    let newItems: any = [];
    inputs.items.forEach((item: any) => {
      const parentItemId = uuidv4();
      newItems.push({
        id: item.id,
        parent_item_id: parentItemId,
        location_id: "L1",
        quantity: { count: 1 },
        tags: [
          {
            code: "type",
            list: [
              {
                code: "type",
                value: "item",
              },
            ],
          },
        ],
      });

      item?.customisations.forEach((customisation: any) => {
        newItems.push({
          id: customisation,
          parent_item_id: parentItemId,
          location_id: "L1",
          quantity: { count: 1 },
          tags: [
            {
              code: "type",
              list: [
                {
                  code: "type",
                  value: "customization",
                },
              ],
            },
            {
              code: "parent",
              list: [
                {
                  code: "id",
                  value: getParentIdValue(
                    sessionData?.on_search_items || [],
                    customisation
                  ),
                },
              ],
            },
          ],
        });
      });
    });

    existingPayload.message.order.items = newItems;
  }

  return existingPayload;
};
