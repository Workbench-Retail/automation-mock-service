import { SessionData } from "../../../session-types";
import { removeTagsByCodes } from "../../../../../../utils/generic-utils";

export async function updateGenerator(
  existingPayload: any,
  sessionData: SessionData
) {
  existingPayload.message.order.id = sessionData.order_id;

  existingPayload.message.order.items[0] = {
    id: sessionData.items[0].id,
    category_id: sessionData.items[0].category_id,
  };

  if (sessionData?.fulfillments) {
    let agentDetails: any = {
      count: 0,
      details: [],
    };

    sessionData?.fulfillments[0].tags.map((tag: any) => {
      if (tag.code === "rider_details") {
        agentDetails.count += 1;
        const tempData: any = {};
        tag.list.forEach((item: any) => {
          if (item.code === "name") {
            tempData.name = item.value;
          }

          if (item.code === "phone") {
            tempData.phone = item.value;
          }

          if (item.code === "vehicle_registration") {
            tempData.registration = item.value;
          }
        });
        agentDetails.details.push({
          agent: {
            name: tempData.name,
            phone: tempData.phone,
          },
          vehicle: {
            registration: tempData.registration,
          },
        });
      }
    });

    existingPayload.message.order.fulfillments = sessionData?.fulfillments?.map(
      (fulfillment: any, index: number) => {
        // Update start instructions only if code is NOT "5"
        const existingStartCode = fulfillment?.start?.instructions?.code;
        if (existingStartCode !== "5") {
          fulfillment.start = {
            instructions: {
              code: "2",
              short_desc: "123123",
              long_desc: "additional instructions for pickup",
              additional_desc: {
                content_type: "text/html",
                url: "http://description.com",
              },
            },
          };
        }

        // Update end instructions only if code is NOT "5"
        const existingEndCode = fulfillment?.end?.instructions?.code;
        if (existingEndCode !== "5") {
          fulfillment.end = {
            instructions: {
              code: "2",
              short_desc: "987657",
              long_desc: "additional instructions for delivery",
              additional_desc: {
                content_type: "text/html",
                url: "http://description.com",
              },
            },
          };
        }

        // Update tags
        let preTags = removeTagsByCodes(fulfillment.tags, [
          "weather_check",
          "rto_action",
          "cod_settlement_detail",
          "state",
        ]);
        preTags = [
          ...preTags,
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

        fulfillment.tags = preTags;

        // Agent and vehicle assignment
        if (sessionData?.rate_basis) {
          if (index > agentDetails.count) {
            index = 0;
          }
          fulfillment.agent = agentDetails.details[index].agent;
          fulfillment.vehicle = agentDetails.details[index].vehicle;
        }

        delete fulfillment.state;

        return fulfillment;
      }
    );
  }

  existingPayload.message.order.updated_at = existingPayload.context.timestamp;

  return existingPayload;
}
