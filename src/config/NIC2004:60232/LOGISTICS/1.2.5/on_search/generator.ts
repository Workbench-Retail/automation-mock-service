import { SessionData } from "../../../session-types";

const TatMapping: any = {
  "Immediate Delivery": { code: "PT60M", day: 0 },
  "Same Day Delivery": { code: "PT4H", day: 0 },
  "Next Day Delivery": { code: "P1D", day: 1 },
  "Standard Delivery": { code: "P2D", day: 2 },
  "Express Delivery": { code: "P2D", day: 2 },
  "Instant Delivery": { code: "PT10M", day: 0 },
};

function getDateFromToday(days: number) {
  const today = new Date();
  today.setDate(today.getDate() + days);
  return today.toISOString().split("T")[0];
}

export async function onSearch1Generator(
  existingPayload: any,
  sessionData: SessionData
) {
  // bb/descriptor mai date should be same as context "effective_date"

  existingPayload.message.catalog["bpp/descriptor"].tags[0].list.map(
    (item: any) => {
      if (item.code === "effective_date") {
        return {
          code: item.code,
          value: new Date().toISOString(),
        };
      }

      return item;
    }
  );
  // category should be updated based on seach
  // change tinestamp in category
  const categoriesData = {
    id: sessionData.category_id,
    time: {
      label: "TAT",
      duration: TatMapping[sessionData?.category_id as string].code,
      timestamp: getDateFromToday(
        TatMapping[sessionData?.category_id as string].day
      ),
    },
  };
  existingPayload.message.catalog["bpp/providers"][0].categories[0] =
    categoriesData;

  // update time in items as per category

  existingPayload.message.catalog["bpp/providers"][0].items =
    existingPayload.message.catalog["bpp/providers"][0].items.map(
      (item: any) => {
        item.time = {
          label: "TAT",
          duration: TatMapping[sessionData.category_id as string].code,
          timestamp: getDateFromToday(
            TatMapping[sessionData.category_id as string].day
          ),
        };

        return item;
      }
    );

  existingPayload.message.catalog["bpp/providers"][0].items =
    existingPayload.message.catalog["bpp/providers"][0].items.map(
      (item: any) => {
        item.category_id = sessionData?.category_id;

        return item;
      }
    );

  if (sessionData?.is_cod === "yes") {
    existingPayload.message.catalog["bpp/providers"][0].items[0].tags = [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "base",
          },
        ],
      },
    ];
  }

  if (sessionData?.is_cod === "yes") {
    existingPayload.message.catalog["bpp/providers"][0].items.push({
      id: "C1",
      parent_item_id: "..",
      category_id: sessionData?.category_id,
      fulfillment_id: "1",
      descriptor: {
        name: "COD Fee",
        short_desc: "COD Fee",
        long_desc: "Cash on delivery fee",
      },
      price: {
        currency: "INR",
        value: "19.18",
      },
      tags: [
        {
          code: "type",
          list: [
            {
              code: "type",
              value: "cod",
            },
          ],
        },
      ],
    });

    existingPayload.message.catalog["bpp/providers"][0].tags = [
      {
        code: "special_req",
        list: [
          {
            code: "cod_order",
            value: "yes",
          },
        ],
      },
    ];
  }

  return existingPayload;
}
