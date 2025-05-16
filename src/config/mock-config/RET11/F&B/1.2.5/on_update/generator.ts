import { SessionData } from "../../../session-types";

import { getTimestampFromDuration } from "../../../../../../utils/generic-utils";

export const onUpdateGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData.order_id) {
    existingPayload.message.order.id = sessionData.order_id;
  }

  if (sessionData.order_state) {
    existingPayload.message.order.state = sessionData.order_state;
  }

  if (sessionData.provider) {
    existingPayload.message.order.provider = sessionData.provider;
  }

  if (sessionData.items) {
    existingPayload.message.order.items = sessionData.items;
  }

  if (sessionData.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  if (sessionData.quote) {
    existingPayload.message.order.quote = sessionData.quote;
  }

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (sessionData.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;

    if (sessionData.updated_address) {
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillment: any) => {
          fulfillment.end.location = sessionData.updated_address;
          return fulfillment;
        });
    }

    if (sessionData.updated_inst) {
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillment: any) => {
          fulfillment.end.instructions = sessionData.updated_inst;
          return fulfillment;
        });
    }

    if (sessionData.deliveryAuth) {
      existingPayload.message.order.fulfillments =
        existingPayload.message.order.fulfillments.map((fulfillment: any) => {
          fulfillment.end.instructions = {
            code: "5",
            ...fulfillment.end.instructions,
          };
          fulfillment.end.authorization = {
            type: "OTP",
            token: "123123",
            valid_from: existingPayload.context.timestamp,
            valid_to: getTimestampFromDuration(
              existingPayload.context.timestamp,
              "PT10M"
            ),
          };

          return fulfillment;
        });
    }
  }

  return existingPayload;
};
