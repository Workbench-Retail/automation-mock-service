import { SessionData } from "../../../session-types";
import { removeTagsByCodes } from "../../../../../utils/generic-utils";

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

        let preTags = [
          ...fulfillment.tags,
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

        preTags = removeTagsByCodes(preTags, ["weather_check", "rto_action"]);
        fulfillment.tags = preTags;

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
