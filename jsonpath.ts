import jsonpath from "jsonpath";
import { JSONPath } from "jsonpath-plus";

// const payload = {
//   context: {
//     domain: "nic2004:60232",
//     country: "IND",
//     city: "std:011",
//     action: "on_search",
//     core_version: "1.2.5",
//     bap_id: "dev-automation.ondc.org",
//     bap_uri: "http://localhost:7123/api-service/nic2004:60232/1.2.5/buyer",
//     message_id: "3e91665d-0471-4d81-8f89-1d09a5d86670",
//     timestamp: "2025-03-30T04:32:51.157Z",
//     transaction_id: "e10f70bf-441c-4a17-943c-e513cf210d69",
//     ttl: "PT30S",
//     bpp_id: "dev-automation.ondc.org",
//     bpp_uri: "http://localhost:7123/api-service/nic2004:60232/1.2.5/seller",
//   },
//   message: {
//     catalog: {
//       "bpp/descriptor": {
//         name: "LSP Aggregator Inc",
//         tags: [
//           {
//             code: "bpp_terms",
//             list: [
//               {
//                 code: "static_terms",
//                 value: "",
//               },
//               {
//                 code: "static_terms_new",
//                 value:
//                   "https://github.com/ONDC-Official/NP-Static-Terms/lspNP_LSP/1.0/tc.pdf",
//               },
//               {
//                 code: "effective_date",
//                 value: "2024-11-20T00:00:00.000Z",
//               },
//             ],
//           },
//         ],
//       },
//       "bpp/providers": [
//         {
//           id: "P1",
//           descriptor: {
//             name: "LSP Courier Inc",
//             short_desc: "LSP Courier Inc",
//             long_desc: "LSP Courier Inc",
//           },
//           categories: [
//             {
//               id: "Express Delivery",
//               time: {
//                 label: "TAT",
//                 duration: "P2D",
//                 timestamp: "2025-04-01",
//               },
//             },
//           ],
//           fulfillments: [
//             {
//               id: "1",
//               type: "Delivery",
//               start: {
//                 time: {
//                   duration: "PT15M",
//                 },
//               },
//               tags: [
//                 {
//                   code: "distance",
//                   list: [
//                     {
//                       code: "motorable_distance_type",
//                       value: "kilometer",
//                     },
//                     {
//                       code: "motorable_distance",
//                       value: "1.8",
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               id: "2",
//               type: "RTO",
//             },
//           ],
//           locations: [
//             {
//               id: "L1",
//               gps: "12.9675,77.7496",
//               address: {
//                 street: "Jayanagar 4th Block",
//                 city: "Bengaluru",
//                 area_code: "560076",
//                 state: "KA",
//               },
//             },
//           ],
//           items: [
//             {
//               id: "I1",
//               parent_item_id: "P1",
//               category_id: "Express Delivery",
//               fulfillment_id: "1",
//               descriptor: {
//                 code: "P2P",
//                 name: "60 min delivery",
//                 short_desc: "60 min delivery for F&B",
//                 long_desc: "60 min delivery for F&B",
//               },
//               price: {
//                 currency: "INR",
//                 value: "59.00",
//               },
//               time: {
//                 label: "TAT",
//                 duration: "P2D",
//                 timestamp: "2025-04-01",
//               },
//             },
//             {
//               id: "I2",
//               parent_item_id: "I1",
//               category_id: "Express Delivery",
//               fulfillment_id: "2",
//               descriptor: {
//                 code: "P2P",
//                 name: "RTO quote",
//                 short_desc: "RTO quote",
//                 long_desc: "RTO quote",
//               },
//               price: {
//                 currency: "INR",
//                 value: "88.50",
//               },
//               time: {
//                 label: "TAT",
//                 duration: "P2D",
//                 timestamp: "2025-04-01",
//               },
//             },
//           ],
//         },
//       ],
//       tags: [
//         {
//           code: "lsp_features",
//           list: [
//             {
//               code: "005",
//               value: "yes",
//             },
//             {
//               code: "009",
//               value: "yes",
//             },
//             {
//               code: "00C",
//               value: "yes",
//             },
//           ],
//         },
//       ],
//     },
//   },
// };

const json = {
  context: {
    domain: "ONDC:LOG10",
    country: "IND",
    city: "std:080",
    action: "search",
    core_version: "1.2.5",
    bap_id: "lbnp.com",
    bap_uri: "https://lbnp.com/ondc",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2024-11-20T21:00:00.000Z",
    ttl: "PT30S",
  },
  message: {
    intent: {
      category: {
        id: "Instant Delivery",
      },
      provider: {
        time: {
          days: "1,2,3,4,5,6,7",
          schedule: {
            holidays: ["2023-06-29", "2023-08-15"],
          },
          duration: "PT30M",
          range: {
            start: "1100",
            end: "2100",
          },
        },
      },
      fulfillment: {
        type: "Delivery",
        start: {
          location: {
            id: "S1",
            gps: "12.4535,77.9283",
            address: {
              area_code: "560041",
            },
          },
          authorization: {
            type: "OTP",
          },
        },
        end: {
          location: {
            gps: "12.4535,77.9283",
            address: {
              area_code: "560001",
            },
          },
          authorization: {
            type: "OTP",
          },
        },
        tags: [
          {
            code: "linked_provider",
            list: [
              {
                code: "id",
                value: "P1",
              },
              {
                code: "name",
                value: "Seller1",
              },
            ],
          },
          {
            code: "linked_order",
            list: [
              {
                code: "currency",
                value: "INR",
              },
              {
                code: "declared_value",
                value: "300.0",
              },
              {
                code: "category",
                value: "Grocery",
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
            ],
          },
          {
            code: "fulfill_request",
            list: [
              {
                code: "rider_count",
                value: "2",
              },
              {
                code: "order_count",
                value: "10",
              },
              {
                code: "rate_basis",
                value: "rider",
              },
              {
                code: "motorable_distance",
                value: "3.0",
              },
              {
                code: "pickup_slot_start",
                value: "2024-12-10T00:00:00.000Z",
              },
              {
                code: "pickup_slot_end",
                value: "2024-12-10T00:15:00.000Z",
              },
              {
                code: "delivery_slot_start",
                value: "2024-12-10T01:30:00.000Z",
              },
              {
                code: "delivery_slot_end",
                value: "2024-12-10T02:00:00.000Z",
              },
            ],
          },
        ],
      },
      payment: {
        type: "POST-FULFILLMENT",
        "@ondc/org/collection_amount": "300.00",
      },
      "@ondc/org/payload_details": {
        weight: {
          unit: "kilogram",
          value: 1,
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
        category: "Grocery",
        value: {
          currency: "INR",
          value: "300.00",
        },
        dangerous_goods: false,
      },
      tags: [
        {
          code: "lbnp_features",
          list: [
            {
              code: "000",
              value: "yes",
            },
            {
              code: "005",
              value: "yes",
            },
            {
              code: "006",
              value: "yes",
            },
          ],
        },
        {
          code: "lbnp_sla_terms",
          list: [
            {
              code: "metric",
              value: "Order_Accept",
            },
            {
              code: "base_unit",
              value: "mins",
            },
            {
              code: "base_min",
              value: "0",
            },
            {
              code: "base_max",
              value: "2",
            },
            {
              code: "penalty_min",
              value: "20",
            },
            {
              code: "penalty_max",
              value: "29.9",
            },
            {
              code: "penalty_unit",
              value: "percent",
            },
            {
              code: "penalty_value",
              value: "0.5",
            },
          ],
        },
      ],
    },
  },
};
const path = '$.message.catalog["bpp/providers"][*].items[*]';

// const result = jsonpath.query(payload, path);

const results = JSONPath({
  path: "$.message.intent",
  json,
  resultType: "all",
});

console.log("result: ", results);
