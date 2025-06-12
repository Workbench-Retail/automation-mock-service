import { SessionData } from "../../../../session-types";
import { Quote } from "../../api-objects/breakup-type";
import { Fulfillment, Fulfillments } from "../../api-objects/fulfillments";
import jsonpath from "jsonpath";

export async function on_update_picked_generator(
  existingPayload: any,
  sessionData: SessionData
) {
  if (
    !existingPayload.message?.order ||
    !Array.isArray(sessionData.fulfillments) ||
    !sessionData.quote
  ) {
    throw new Error("Invalid input: missing order, fulfillments, or quote");
  }

  const now = new Date().toISOString();
  existingPayload.message.order.id = sessionData.order_id;
  existingPayload.message.order.provider = sessionData.provider;
  existingPayload.message.order.billing = sessionData.billing;
  existingPayload.message.order.payment = sessionData.payment;
  existingPayload.message.order.created_at = sessionData.order_created_at;
  existingPayload.message.order.updated_at = now;

  const deliveryFulfillment = existingPayload.message.order.fulfillments.find(
    (f: Fulfillment) => f.type === "Delivery"
  ) 

  if (!deliveryFulfillment || !deliveryFulfillment.end?.location) {
    throw new Error("No Delivery fulfillment found or missing end location");
  }

  const itemCodes = jsonpath.query(
    sessionData.fulfillments,
    `$..tags[*][?(@.code=="return_request")].list[?(@.code=="item_id")].value`
  ) as string[];

  const returnFulfillment = sessionData.fulfillments.find(
    (f: Fulfillment) => f.type === "Return"
  ) as Fulfillment | undefined;

  console.log("returnFulfillment", returnFulfillment)
  console.log("returnFulfillment", JSON.stringify(returnFulfillment))
  
  if (!returnFulfillment) {
    throw new Error("No Return fulfillment found");
  }

  const fulfillmentId = returnFulfillment.id;
  if (!fulfillmentId) {
    throw new Error("Return fulfillment ID is missing");
  }

  const items: any[] = [];
  const returnedItems: any[] = [];
  sessionData.items.forEach((item: any) => {
    if (itemCodes.includes(item.id)) {
      returnedItems.push({
        id: item.id,
        quantity: {
          count: item.quantity.count,
        },
        fulfillment_id: fulfillmentId,
      });
    } else {
      items.push(item);
    }
  });
  existingPayload.message.order.items = [...items, ...returnedItems];

  const quote = { ...sessionData.quote } as Quote;
  const breakup = quote.breakup ?? [];
  let totalReturnValue = 0;

  const quoteTrails = breakup
    .filter((item) => itemCodes.includes(item?.["@ondc/org/item_id"] || ""))
    .map((item) => {
      const price = parseFloat(item.price?.value || "0");
      if (price === 0) return null;
      totalReturnValue += price;
      return {
        code: "quote_trail",
        list: [
          { code: "type", value: item["@ondc/org/title_type"] },
          { code: "id", value: item["@ondc/org/item_id"] },
          { code: "currency", value: "INR" },
          { code: "value", value: `${-1 * price}` },
        ],
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (quote.price) {
    const currentPrice = parseFloat(quote.price.value || "0");
    quote.price.value = (currentPrice - totalReturnValue).toFixed(2);
  }

  breakup.forEach((item) => {
    if (itemCodes.includes(item?.["@ondc/org/item_id"] || "")) {
      if (item.price) {
        item.price.value = "0.00";
      }
      if (item["@ondc/org/item_quantity"]) {
        item["@ondc/org/item_quantity"].count = 0;
      }
    }
  });

  existingPayload.message.order.fulfillments = sessionData.fulfillments.map(
    (f: Fulfillment) => {
      if (f.type === "Return") {
        const tags = Array.isArray(f.tags) ? f.tags : [];
        return {
          ...f,
          state: {
            descriptor: {
              code: "Return_Picked",
            },
          },
          start: {
            location: deliveryFulfillment?.end.location,
            time: {
              ...f.start?.time,
              timestamp: now,
            },
          },
          tags: [...tags, ...quoteTrails],
        };
      }
      return f;
    }
  );

  existingPayload.message.order.quote = quote;
  return existingPayload;
}
