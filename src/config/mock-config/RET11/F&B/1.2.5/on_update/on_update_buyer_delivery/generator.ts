import { SessionData } from "../../../../session-types";

export const onUpdateBuyerDeliveryGenerator = (
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

  existingPayload.message.order.fulfillments = [
    {
      ...sessionData?.fulfillments?.[0],
      state: {
        descriptor: {
          code: sessionData?.buyer_delivery_order_status,
        },
      },
      tags: [
        ...sessionData?.fulfillments?.[0]?.tags,
        ...sessionData?.update_return_fulfillments?.[0]?.tags,
      ],
    },
  ];

  return existingPayload;
};
