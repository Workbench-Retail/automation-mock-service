const TatMapping: any = {
  "Immediate Delivery": "PT60M",
  "Same Day Delivery": "PT4H",
  "Next Day Delivery": "P1D",
  "Standard Delivery": "P2D",
  "Express Delivery": "P2D",
  "Instant Delivery": "PT10M",
};

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
      duration: TatMapping[sessionData.category_id],
      timestamp: "2024-11-20", // Need to calculate
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
          duration: TatMapping[sessionData.category_id],
          timestamp: "2024-11-20", // Need to calculate
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
