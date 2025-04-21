import { v4 as uuidv4 } from "uuid";
import { SessionData, Input } from "../../../session-types";
import { removeTagsByCodes } from "../../../../../utils/generic-utils";

export const confirmGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs: Input | undefined
) => {
  existingPayload.message.order.id = uuidv4();

  existingPayload.message.order.provider.id = sessionData.provider_id;
  // existingPayload.message.order.provider.locations[0].id =
  //   sessionData.location_id;

  if (sessionData?.billing) {
    existingPayload.message.order.billing = sessionData.billing;
  }

  existingPayload.message.order.items = sessionData.items;

  let time: any = null;

  sessionData?.on_search_items?.forEach((item: any) => {
    // console.log("::::::::::::", item.id, existingPayload.message.order.items[0].id, item)
    if (item.id === existingPayload.message.order.items[0].id) {
      time = item.time;
    }
  });

  existingPayload.message.order.items = existingPayload.message.order.items.map(
    (item: any) => {
      item.time = time;
      return item;
    }
  );

  if (sessionData?.rate_basis) {
    existingPayload.message.order.items =
      existingPayload.message.order.items.map((item: any) => {
        delete item.fulfillment_id;
        let fulfiillmentIds: any[] = [];

        sessionData?.on_init_items?.forEach((oninitItem) => {
          if (oninitItem.id === item.id) {
            fulfiillmentIds = oninitItem.fulfillment_ids;
          }
        });

        item.fulfillment_ids = fulfiillmentIds;
        return item;
      });
  }

  if (sessionData.fulfillments) {
    existingPayload.message.order.fulfillments = sessionData.fulfillments;
  }

  existingPayload.message.order.fulfillments[0].start.time = {
    duration: sessionData.on_search_fulfillment.start.time.duration,
  };

  existingPayload.message.order.fulfillments[0].start.person = {
    name: "person_name_1",
  };

  existingPayload.message.order.fulfillments[0].end.person = {
    name: "person_name_2",
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
          value: `KHB Towers, 14, Koramangala, Bengaluru, Karnataka, ${
            sessionData?.start_area_code || "560001"
          }`,
        },
        ...(sessionData.domain === "ONDC:LOG11"
          ? [
              {
                code: "tax_id",
                value: "29GSTIN1234K2Z2",
              },
            ]
          : []),
      ],
    },
    {
      code: "linked_order",
      list: [
        ...(sessionData?.is_cod === "yes"
          ? [
              { code: "cod_order", value: "yes" },
              { code: "collection_amount", value: "300.00" },
            ]
          : []),
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
        ...(sessionData?.domain === "ONDC:LOG11"
          ? [
              {
                code: "shipment_type",
                value: "box",
              },
            ]
          : []),
      ],
    },
    {
      code: "linked_order_item",
      list: [
        {
          code: "category",
          value: sessionData?.retail_category || "Grocery",
        },
        {
          code: "name",
          value: "Item1",
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
          value: sessionData?.retail_category || "Grocery",
        },
        {
          code: "name",
          value: "Item2",
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
          value:
            sessionData.category_id === "Immediate Delivery" ? "yes" : "no",
        },
      ],
    },
    {
      code: "rto_action",
      list: [
        {
          code: "return_to_origin",
          value: inputs?.returnToOrigin || "yes",
        },
      ],
    },
    ...(sessionData?.is_cod === "yes"
      ? [
          {
            code: "cod_settlement_detail",
            list: [
              {
                code: "settlement_window",
                value: "P0D",
              },
              {
                code: "settlement_type",
                value: "neft",
              },
              {
                code: "beneficiary_name",
                value: "XXXXXXXXXX",
              },
              {
                code: "upi_address",
                value: "",
              },
              {
                code: "bank_account_no",
                value: "XXXXXXXXXX",
              },
              {
                code: "ifsc_code",
                value: "XXXXXXXXX",
              },
              {
                code: "bank_name",
                value: "xxxx",
              },
              {
                code: "branch_name",
                value: "xxxx",
              },
            ],
          },
        ]
      : []),
  ];

  let allTags = tags;
  console.log("rto", inputs?.returnToOrigin);

  if (sessionData.rate_basis) {
    const preTags = removeTagsByCodes(
      existingPayload.message.order.fulfillments[1].tags,
      ["linked_provider"]
    );

    allTags = [...allTags, ...preTags];
  }

  allTags = removeTagsByCodes(allTags, ["rider_check"]);

  existingPayload.message.order.fulfillments =
    existingPayload.message.order.fulfillments.map((fulfillment: any) => {
      fulfillment.tags = allTags;
      return fulfillment;
    });
  let isReadyToShip = false;

  existingPayload.message.order.fulfillments[0].tags.forEach((tag: any) => {
    if (tag.code === "state") {
      tag.list.forEach((item: any) => {
        if (item.code === "ready_to_ship" && item.value == "yes") {
          isReadyToShip = true;
        }
      });
    }
  });

  if (isReadyToShip) {
    existingPayload.message.order.fulfillments[0].start.instructions = {
      code: "2",
      short_desc: "123123",
      long_desc: "additional instructions for pickup",
      additional_desc: {
        content_type: "text/html",
        url: "http://description.com",
      },
    };

    existingPayload.message.order.fulfillments[0].end.instructions = {
      code: "2",
      short_desc: "987657",
      long_desc: "additional instructions for delivery",
      additional_desc: {
        content_type: "text/html",
        url: "http://description.com",
      },
    };
  }

  const tempQuote = sessionData.quote;

  delete tempQuote.ttl;

  existingPayload.message.order.quote = tempQuote;

  existingPayload.message.order.created_at = existingPayload.context.timestamp;
  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (
    (sessionData.payment_type === "POST-FULFILLMENT" ||
      sessionData.payment_type === "ON-FULFILLMENT") &&
    existingPayload.message.order.payment.collected_by === "BPP"
  ) {
    existingPayload.message.order.payment["@ondc/org/settlement_details"] = [
      {
        settlement_counterparty: "lbnp",
        settlement_type: "upi",
        beneficiary_name: "xxxxx",
        upi_address: "gft@oksbi",
        settlement_bank_account_no: "XXXXXXXXXX",
        settlement_ifsc_code: "XXXXXXXXX",
      },
    ];
  }

  existingPayload.message.order.payment["@ondc/org/linked_order"] = {
    "@ondc/org/linked_order": {
      items: [
        {
          category_id: sessionData?.retail_category || "Grocery",
          descriptor: {
            name: "Item1",
          },
          quantity: {
            count: 2,
            measure: {
              unit: "kilogram",
              value: 1,
            },
          },
          price: {
            currency: "INR",
            value: "70.00",
          },
        },
        {
          category_id: sessionData?.retail_category || "Grocery",
          descriptor: {
            name: "Item2",
          },
          quantity: {
            count: 1,
            measure: {
              unit: "kilogram",
              value: 1,
            },
          },
          price: {
            currency: "INR",
            value: "160.00",
          },
        },
      ],
      provider: {
        descriptor: {
          name: "Seller1",
        },
        address: {
          name: "KHB Towers",
          building: "14",
          locality: "Koramangala",
          city: "Bengaluru",
          state: "Karnataka",
          area_code: sessionData?.start_area_code || "560001",
        },
      },
      order: {
        id: "O1",
        weight: {
          unit: "kilogram",
          value: 3,
        },
        dimensions: {
          length: {
            unit: "centimeter",
            value: 1,
          },
          breadth: {
            unit: "centimeter",
            value: 1,
          },
          height: {
            unit: "centimeter",
            value: 1,
          },
        },
      },
    },
  };
  return existingPayload;
};
