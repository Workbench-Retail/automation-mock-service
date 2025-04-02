import { SessionData } from "../../../session-types";

export async function updateGenerator(
  existingPayload: any,
  sessionData: SessionData
) {
  existingPayload.message.order.id = sessionData.order_id;

  existingPayload.message.order.items[0] = {
    id: sessionData.items[0].id,
    category_id: sessionData.items[0].category_id,
  };

  if (sessionData?.fulfillments)
    existingPayload.message.order.fulfillments[0] = {
      id: sessionData.fulfillments[0].id,
      type: sessionData.fulfillments[0].type,
      start: {
        instructions: {
          code: "2",
          short_desc: "123123",
          long_desc: "additional instructions for pickup",
          additional_desc: {
            content_type: "text/html",
            url: "http://description.com",
          },
        },
      },
      end: {
        instructions: {
          code: "2",
          short_desc: "987657",
          long_desc: "additional instructions for delivery",
          additional_desc: {
            content_type: "text/html",
            url: "http://description.com",
          },
        },
      },
    };

  const tags = [
    {
      code: "linked_provider",
      list: [
        {
          code: "id",
          value: sessionData.provider_id,
        },
        {
          code: "name",
          value: "Seller1",
        },
        {
          code: "address",
          value: "shop_name,building_name,locality,city,state,pincode",
        },
      ],
    },
    {
      code: "linked_order",
      list: [
        {
          code: "id",
          value: "RO1",
        },
        {
          code: "currency",
          value: "INR",
        },
        {
          code: "declared_value",
          value: "300.0",
        },
        {
          code: "weight_unit",
          value: "kilogram",
        },
        {
          code: "weight_value",
          value: "3.0",
        },
        {
          code: "dim_unit",
          value: "centimeter",
        },
        {
          code: "length",
          value: "1.0",
        },
        {
          code: "breadth",
          value: "1.0",
        },
        {
          code: "height",
          value: "1.0",
        },
        {
          code: "shipment_type",
          value: "box",
        },
      ],
    },
    {
      code: "linked_order_item",
      list: [
        {
          code: "category",
          value: "Grocery",
        },
        {
          code: "name",
          value: "Atta",
        },
        {
          code: "currency",
          value: "INR",
        },
        {
          code: "value",
          value: "70.0",
        },
        {
          code: "quantity",
          value: "2",
        },
        {
          code: "weight_unit",
          value: "kilogram",
        },
        {
          code: "weight_value",
          value: "1.0",
        },
      ],
    },
    {
      code: "linked_order_item",
      list: [
        {
          code: "category",
          value: "Grocery",
        },
        {
          code: "name",
          value: "Basmati Rice",
        },
        {
          code: "currency",
          value: "INR",
        },
        {
          code: "value",
          value: "160.0",
        },
        {
          code: "quantity",
          value: "1",
        },
        {
          code: "weight_unit",
          value: "kilogram",
        },
        {
          code: "weight_value",
          value: "1.0",
        },
      ],
    },
    {
      code: "state",
      list: [
        {
          code: "ready_to_ship",
          value: "yes",
        },
        ...(sessionData.category_id === "Immediate Delivery"
          ? [
              {
                code: "order_ready",
                value: "yes",
              },
            ]
          : []),
      ],
    },
  ];

  existingPayload.message.order.fulfillments[0].tags = tags;

  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  return existingPayload;
}
