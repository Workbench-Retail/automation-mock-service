import { SessionData } from "../../session-types";
import { getTimestampFromDuration } from "../../../../utils/generic-utils";

export const populateFulfillmentUpdate = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.fulfillments =
    existingPayload.message.order.fulfillments.map((fulfillment: any) => {
      let isReadyToShip = false;

      console.log(
        "update fulfillments",
        JSON.stringify(sessionData.update_fulfillments, null, 2)
      );
      // NEED TO FIX
      sessionData.update_fulfillments.tags.forEach((tag: any) => {
        if (tag.code === "state") {
          tag.list.forEach((item: any) => {
            if (item.code === "ready_to_ship" && item.value == "yes") {
              isReadyToShip = true;
            }
          });
        }
      });

      fulfillment.tracking = true;

      if (isReadyToShip) {
        fulfillment.state.descriptor.code = "Agent-assigned";
        fulfillment.agent = {
          name: "person_name",
          phone: "9886098860",
        };
        fulfillment.vehicle = {
          registration: "3LVJ945",
        };

        if (!existingPayload.message.order.fulfillments[0].start?.time?.range) {
          fulfillment.start.time.range = {
            start: existingPayload.context.timestamp,
            end: getTimestampFromDuration(
              existingPayload.context.timestamp,
              sessionData?.tat || "P1D"
            ),
          };

          fulfillment.end.time = {
            range: {
              start: existingPayload.context.timestamp,
              end: getTimestampFromDuration(
                existingPayload.context.timestamp,
                sessionData?.tat || "P1D"
              ),
            },
          };
        }
      }

      return fulfillment;
    });

  return existingPayload;
};

export const populateFulfillmentConfim = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.fulfillments =
    existingPayload.message.order.fulfillments.map((fulfillment: any) => {
      let isReadyToShip = false;

      fulfillment.tags.forEach((tag: any) => {
        if (tag.code === "state") {
          tag.list.forEach((item: any) => {
            if (item.code === "ready_to_ship" && item.value == "yse") {
              isReadyToShip = true;
            }
          });
        }
      });

      fulfillment.tracking = true;

      if (isReadyToShip) {
        fulfillment.state.descriptor.code = "Agent-assigned";
        fulfillment.agent = {
          name: "person_name",
          phone: "9886098860",
        };
        fulfillment.vehicle = {
          registration: "3LVJ945",
        };

        if (!existingPayload.message.order.fulfillments[0].start?.time?.range) {
          fulfillment.start.time.range = {
            start: existingPayload.context.timestamp,
            end: getTimestampFromDuration(
              existingPayload.context.timestamp,
              sessionData?.tat || "P1D"
            ),
          };

          fulfillment.end.time = {
            range: {
              start: existingPayload.context.timestamp,
              end: getTimestampFromDuration(
                existingPayload.context.timestamp,
                sessionData?.tat || "P1D"
              ),
            },
          };
        }
      }

      return fulfillment;
    });

  return existingPayload;
};
