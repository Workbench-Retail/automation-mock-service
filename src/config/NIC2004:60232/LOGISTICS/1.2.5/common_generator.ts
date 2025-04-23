import { SessionData } from "../../session-types";
import { getTimestampFromDuration } from "../../../../utils/generic-utils";

export const populateFulfillmentUpdate = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.fulfillments =
    existingPayload.message.order.fulfillments.map((fulfillment: any) => {
      let isReadyToShip = false;

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
        if (!sessionData?.rate_basis) {
          fulfillment.state.descriptor.code = "Searching-for-agent";
        }

        if (!fulfillment.start?.time?.range) {
          fulfillment.start.time = {
            ...fulfillment.start.time,
            range: {
              start: existingPayload.context.timestamp,
              end: getTimestampFromDuration(
                existingPayload.context.timestamp,
                fulfillment?.start?.time?.duration || "P4H"
              ),
            },
          };

          fulfillment.end.time = {
            range: {
              start: fulfillment?.start?.time?.range?.end,
              end: getTimestampFromDuration(
                fulfillment?.start?.time?.range?.end,
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
            if (item.code === "ready_to_ship" && item.value == "yes") {
              isReadyToShip = true;
            }
          });
        }
      });

      fulfillment.tracking = true;

      if (isReadyToShip) {
        fulfillment.state = {
          descriptor: {
            code: "Pending",
          },
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
