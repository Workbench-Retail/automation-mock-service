import { SessionData } from "../../../session-types";

export const onInitGenerator = (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.provider.id = sessionData.provider_id;
  existingPayload.message.order.provider.locations[0].id =
    sessionData.location_id;

  const tempItems = sessionData.items;

  tempItems.forEach((item: any) => {
    delete item.category_id;
    delete item.descriptor;
    delete item.tags;
  });

  existingPayload.message.order.items = tempItems;
  existingPayload.message.order.fulfillments = sessionData.fulfillments;

  existingPayload.message.order.quote = {
    price: {
      currency: "INR",
      value: sessionData?.is_cod === "yes" ? "70:00" : "59.00",
    },
    breakup: [
      {
        "@ondc/org/item_id": sessionData.items[0].id,
        "@ondc/org/title_type": "delivery",
        price: {
          currency: "INR",
          value: "50.00",
        },
      },
      {
        "@ondc/org/item_id": sessionData.items[0].id,
        "@ondc/org/title_type": "tax",
        price: {
          currency: "INR",
          value: "9.00",
        },
      },
      ...(sessionData?.is_cod === "yes"
        ? [
            {
              "@ondc/org/item_id": sessionData.items[1].id,
              "@ondc/org/title_type": "cod",
              price: {
                currency: "INR",
                value: "9.00",
              },
            },
            {
              "@ondc/org/item_id": sessionData.items[1].id,
              "@ondc/org/title_type": "tax",
              price: {
                currency: "INR",
                value: "2.00",
              },
            },
          ]
        : []),
    ],
    ttl: "PT15M",
  };

  existingPayload.message.order.fulfillments[0].tags.push({
    code: "rider_check",
    list: [
      {
        code: "inline_check_for_rider",
        value: "yes",
      },
    ],
  });

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (
    sessionData.payment_type === "POST-FULFILLMENT" &&
    existingPayload.message.order.payment.collected_by === "BAP"
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

  if (
    sessionData.payment_type === "ON-ORDER" &&
    existingPayload.message.order.payment.collected_by === "BPP"
  ) {
    existingPayload.message.order.payment.tags = [
      {
        code: "wallet_balance",
        list: [
          {
            code: "currency",
            value: "INR",
          },
          {
            code: "value",
            value: "5000.00",
          },
        ],
      },
    ];
  }

  return existingPayload;
};
