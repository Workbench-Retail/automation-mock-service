import jsonpath from "jsonpath";

const payload = {
  context: {
    domain: "nic2004:60232",
    country: "IND",
    city: "std:011",
    action: "on_search",
    core_version: "1.2.5",
    bap_id: "dev-automation.ondc.org",
    bap_uri: "http://localhost:7123/api-service/nic2004:60232/1.2.5/buyer",
    message_id: "3e91665d-0471-4d81-8f89-1d09a5d86670",
    timestamp: "2025-03-30T04:32:51.157Z",
    transaction_id: "e10f70bf-441c-4a17-943c-e513cf210d69",
    ttl: "PT30S",
    bpp_id: "dev-automation.ondc.org",
    bpp_uri: "http://localhost:7123/api-service/nic2004:60232/1.2.5/seller",
  },
  message: {
    catalog: {
      "bpp/descriptor": {
        name: "LSP Aggregator Inc",
        tags: [
          {
            code: "bpp_terms",
            list: [
              {
                code: "static_terms",
                value: "",
              },
              {
                code: "static_terms_new",
                value:
                  "https://github.com/ONDC-Official/NP-Static-Terms/lspNP_LSP/1.0/tc.pdf",
              },
              {
                code: "effective_date",
                value: "2024-11-20T00:00:00.000Z",
              },
            ],
          },
        ],
      },
      "bpp/providers": [
        {
          id: "P1",
          descriptor: {
            name: "LSP Courier Inc",
            short_desc: "LSP Courier Inc",
            long_desc: "LSP Courier Inc",
          },
          categories: [
            {
              id: "Express Delivery",
              time: {
                label: "TAT",
                duration: "P2D",
                timestamp: "2025-04-01",
              },
            },
          ],
          fulfillments: [
            {
              id: "1",
              type: "Delivery",
              start: {
                time: {
                  duration: "PT15M",
                },
              },
              tags: [
                {
                  code: "distance",
                  list: [
                    {
                      code: "motorable_distance_type",
                      value: "kilometer",
                    },
                    {
                      code: "motorable_distance",
                      value: "1.8",
                    },
                  ],
                },
              ],
            },
            {
              id: "2",
              type: "RTO",
            },
          ],
          locations: [
            {
              id: "L1",
              gps: "12.9675,77.7496",
              address: {
                street: "Jayanagar 4th Block",
                city: "Bengaluru",
                area_code: "560076",
                state: "KA",
              },
            },
          ],
          items: [
            {
              id: "I1",
              parent_item_id: "P1",
              category_id: "Express Delivery",
              fulfillment_id: "1",
              descriptor: {
                code: "P2P",
                name: "60 min delivery",
                short_desc: "60 min delivery for F&B",
                long_desc: "60 min delivery for F&B",
              },
              price: {
                currency: "INR",
                value: "59.00",
              },
              time: {
                label: "TAT",
                duration: "P2D",
                timestamp: "2025-04-01",
              },
            },
            {
              id: "I2",
              parent_item_id: "I1",
              category_id: "Express Delivery",
              fulfillment_id: "2",
              descriptor: {
                code: "P2P",
                name: "RTO quote",
                short_desc: "RTO quote",
                long_desc: "RTO quote",
              },
              price: {
                currency: "INR",
                value: "88.50",
              },
              time: {
                label: "TAT",
                duration: "P2D",
                timestamp: "2025-04-01",
              },
            },
          ],
        },
      ],
      tags: [
        {
          code: "lsp_features",
          list: [
            {
              code: "005",
              value: "yes",
            },
            {
              code: "009",
              value: "yes",
            },
            {
              code: "00C",
              value: "yes",
            },
          ],
        },
      ],
    },
  },
};

const path = '$.message.catalog["bpp/providers"][*].items[*]';

const result = jsonpath.query(payload, path);

console.log("result: ", result);
