import { SessionData } from "../../../session-types";
import { removeTagsByCodes } from "../../../../../utils/generic-utils";

const getPayemntFields = (paymentType: string) => {
  if (paymentType === "ON-ORDER" || paymentType === "ON-FULFILLMENT") {
    return { collected_by: "BPP" };
  }

  if (paymentType === "POST-FULFILLMENT") {
    return {
      collected_by: "BAP",
      "@ondc/org/settlement_basis": "invoicing",
      "@ondc/org/settlement_window": "P15D",
    };
  }
};

export const initGenerator = async (
  existingPayload: any,
  sessionData: SessionData
) => {
  existingPayload.message.order.provider.id = sessionData.provider_id;
  existingPayload.message.order.provider.locations[0].id =
    sessionData.location_id;

  sessionData?.on_search_items?.forEach((item: any) => {
    if (item.fulfillment_id === sessionData.on_search_fulfillment.id) {
      let isBaseItem = false;

      if (item?.tags?.length) {
        item.tags[0].list.forEach((val: any) => {
          if (val.value === "base") {
            isBaseItem = true;
          }
        });
      }

      if (!(sessionData?.is_cod === "yes") && isBaseItem) {
        existingPayload.message.order.items[0] = {
          id: item.id,
          fulfillment_id:
            sessionData?.rate_basis === "rider" ||
            sessionData?.rate_basis === "order"
              ? ""
              : sessionData.on_search_fulfillment.id,
          category_id: item.category_id,
          tags: sessionData?.is_cod === "yes" ? item?.tags : undefined,
        };
      }

      if (
        sessionData?.is_cod === "yes" &&
        item.tags[0].list[0].value === "cod"
      ) {
        existingPayload.message.order.items[1] = {
          id: item.id,
          fulfillment_id:
            sessionData?.rate_basis === "rider" ||
            sessionData?.rate_basis === "order"
              ? ""
              : sessionData.on_search_fulfillment.id,
          category_id: item.category_id,
          tags: item?.tags,
        };
      }
    }
  });

  existingPayload.message.order.fulfillments[0] = {
    id:
      sessionData?.rate_basis === "rider" || sessionData?.rate_basis === "order"
        ? ""
        : sessionData.on_search_fulfillment.id,
    type: sessionData.on_search_fulfillment.type,
    start: {
      location: {
        id: "S1",
        gps: sessionData.start_location,
        address: {
          name: "My store name 1",
          building: "My building name 1",
          locality: "My street name 1",
          city: "my city 1",
          state: "my state 1",
          country: "India",
          area_code: sessionData.start_area_code,
        },
      },
      contact: {
        phone: "9886098860",
        email: "abcd.efgh@gmail.com",
      },
    },
    end: {
      location: {
        gps: sessionData.end_location,
        address: {
          name: "My store name 2",
          building: "My building name 2",
          locality: "My street name 2",
          city: "my city name 2",
          state: "my state 2",
          country: "India",
          area_code: sessionData.end_area_code,
        },
      },
      contact: {
        phone: "9123426789",
        email: "xyz.qweq@gmail.com",
      },
    },
    tags: removeTagsByCodes(sessionData?.on_search_fulfillment.tags, [
      "distance",
    ]),
  };

  let isLinkedOrderPresent = false;

  existingPayload.message.order.fulfillments[0].tags.map((tag: any) => {
    if (tag.code === "linked_provider") {
      isLinkedOrderPresent = true;
    }
  });

  if (!isLinkedOrderPresent) {
    existingPayload.message.order.fulfillments[0].tags.push({
      code: "linked_provider",
      list: [
        {
          code: "id",
          value: sessionData.provider_id,
        },
        {
          code: "name",
          value: "Seller",
        },
      ],
    });
  }

  existingPayload.message.order.billing.created_at =
    existingPayload.context.timestamp;
  existingPayload.message.order.billing.updated_at =
    existingPayload.context.timestamp;

  existingPayload.message.order.payment = {
    type: sessionData.payment_type,
    ...getPayemntFields(sessionData.payment_type as string),
  };

  return existingPayload;
};
