import { SessionData } from "../../../session-types";

export const onTrackGenerator = async (
  existingPayload: any,
  sessionData: SessionData
) => {
  if (sessionData?.fulfillments) {
    existingPayload.message.tracking.id = sessionData.fulfillments[0].id;
  }

  const contextTimestamp = existingPayload.context.timestamp;
  if (sessionData.domain === "ONDC:LOG10") {
    existingPayload.message.tracking.location = {
      gps: "12.9740,77.6134",
      time: {
        timestamp: contextTimestamp,
      },
      updated_at: contextTimestamp,
    };
    delete existingPayload.message.tracking.url;
  } else {
    delete existingPayload.message.tracking.location;
  }

  const tags = [
    {
      code: "order",
      list: [
        {
          code: "id",
          value: sessionData.order_id,
        },
      ],
    },
    {
      code: "config",
      list: [
        {
          code: "attr",
          value:
            sessionData.domain === "ONDC:LOG10"
              ? "tracking.location.gps"
              : "tracking.url",
        },
        {
          code: "type",
          value: sessionData.domain === "ONDC:LOG10" ? "live_poll" : "deferred",
        },
      ],
    },
    ...(sessionData.domain === "ONDC:LOG10"
      ? [
          {
            code: "path",
            list: [
              {
                code: "lat_lng",
                value: "12.9740,77.6134",
              },
              {
                code: "sequence",
                value: "1",
              },
            ],
          },
        ]
      : []),
  ];

  existingPayload.message.tracking.tags = tags;

  return existingPayload;
};
