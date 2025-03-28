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
  sessionData: any
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
      label: sessionData.shipment_method,
      duration: TatMapping[sessionData.category_id].code,
      timestamp: getDateFromToday(TatMapping[sessionData.category_id].day),
    },
  };
  existingPayload.message.catalog["bpp/providers"][0].categories[0] =
    categoriesData;

  // update time in items as per category

  existingPayload.message.catalog["bpp/providers"][0].items =
    existingPayload.message.catalog["bpp/providers"][0].items.map(
      (item: any) => {
        item.time = {
          label: sessionData.shipment_method,
          duration: TatMapping[sessionData.category_id].code,
          timestamp: getDateFromToday(TatMapping[sessionData.category_id].day),
        };

        return item;
      }
    );

  let items = existingPayload.message.catalog["bpp/providers"][0].items;

  items[0].category_id = sessionData?.category_id;
  items[0].descriptor.code = sessionData?.shipment_method;
  items[1].category_id = sessionData?.category_id;
  items[1].descriptor.code = sessionData?.shipment_method;

  return existingPayload;
}
