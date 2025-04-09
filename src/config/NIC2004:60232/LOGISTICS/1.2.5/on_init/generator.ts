import { SessionData } from "../../../session-types";

const calculateQuotePrice = (breakup: any) => {
  let totalPrice = 0;
  breakup.forEach((item: any) => {
    totalPrice += parseFloat(item.price.value) || 0;
  });

  return totalPrice.toFixed(2); // returns a string with 2 decimal places
};

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
    delete item.tags;

    if (sessionData?.rate_basis) {
      delete item.fulfillment_id;
      item.fulfillment_ids = ["F1", "F2"];
    }
  });

  existingPayload.message.order.items = tempItems;
  existingPayload.message.order.fulfillments = sessionData.fulfillments;

  existingPayload.message.order.quote = {
    breakup: [
      {
        "@ondc/org/item_id": sessionData.items[0].id,
        "@ondc/org/title_type": "delivery",
        price: {
          currency: "INR",
          value: sessionData?.rate_basis ? "100.00" : "50.00",
        },
      },
      {
        "@ondc/org/item_id": sessionData.items[0].id,
        "@ondc/org/title_type": "tax",
        price: {
          currency: "INR",
          value: sessionData?.rate_basis ? "18.00" : "9.00",
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

  existingPayload.message.order.quote.price = {
    currency: "INR",
    value: calculateQuotePrice(existingPayload.message.order.quote.breakup),
  };

  if (sessionData?.rate_basis) {
    existingPayload.message.order.fulfillments[0].id = "F1";
    existingPayload.message.order.fulfillments.push({
      ...existingPayload.message.order.fulfillments[0],
      id: "F2",
    });
  }

  existingPayload.message.order.fulfillments =
    existingPayload.message.order.fulfillments.map((fulfullment: any) => {
      fulfullment.tags.push({
        code: "rider_check",
        list: [
          {
            code: "inline_check_for_rider",
            value: "yes",
          },
        ],
      });

      return fulfullment;
    });

  if (sessionData.payment) {
    existingPayload.message.order.payment = sessionData.payment;
  }

  if (
    (sessionData.payment_type === "POST-FULFILLMENT" ||
      sessionData.payment_type === "ON-FULFILLMENT") &&
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
