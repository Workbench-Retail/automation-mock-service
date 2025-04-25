import {
  getFutureDate,
  TatMapping,
} from "../../../../../../../utils/generic-utils";
import { Input, SessionData } from "../../../../session-types";

export async function search1Generator(
  existingPayload: any,
  sessionData: SessionData,
  inputs: Input | undefined
) {
  console.log("inside search1 generator");
  existingPayload.message.intent.provider.time.schedule.holidays = [
    getFutureDate(10),
    getFutureDate(15),
  ];
  if (inputs?.category) {
    console.log("inside prep time");
    
    existingPayload.message.intent.provider.time.duration =
      TatMapping[inputs?.category].orderPrepTime;
  }
  existingPayload.message.intent.fulfillment.tags =
    existingPayload.message.intent.fulfillment.tags.map((tag: any) => {
      if (tag.code === "linked_order") {
        const newList = tag.list.map((item: any) => {
          if (item.code === "category") {
            return {
              code: item.code,
              value: inputs?.retailCategory || "Grocery",
            };
          }
          return item;
        });

        return {
          code: tag.code,
          list: newList,
        };
      }

      return tag;
    });
    
  existingPayload.message.intent["@ondc/org/payload_details"].category =
    inputs?.retailCategory || "Grocery";
  return existingPayload;
}
