import { SessionData, Input } from "../../../session-types";
import { stateCodes } from "../areaCodes";

type SelectInputType = {
	provider?: string;
	provider_location?: string[];
	location_gps?: string;
	location_pin_code?: string;
	items?: {
		itemId?: string;
		quantity?: number;
		location?: string;
	}[];
	[key: string]: any;
};


export const selectGenerator = (
  existingPayload: any,
  sessionData: SessionData,
  inputs?: SelectInputType
) => {
  
  if (!inputs) return existingPayload;

  if (inputs.provider) {
		existingPayload.message.order.provider.id = inputs.provider;
	}
	if (inputs.provider_location) {
		existingPayload.message.order.provider.locations =
			inputs.provider_location.map((location) => {
				return {
					id: location,
				};
			});
	}
  if (inputs?.items) {
    let newItems: any = [];
    let allItems = inputs.items;

    allItems.forEach((item: any, index: number) => {
      newItems.push({
        id: item.id,
        location_id: inputs.locationId,
        quantity: { count: item.quantity || 1 },
      });
    });

    existingPayload.message.order.items = newItems;
  }

  if (inputs?.location_gps && inputs?.location_pin_code) {
    existingPayload.message.order.fulfillments[0] = {
      end: {
        location: {
          gps: inputs.location_gps,
          address: {
            area_code: inputs.location_pin_code,
          },
        },
      },
    };
  };
    existingPayload.context.city =
    `std:${stateCodes[inputs?.area_code]}` || "std:011";

  return existingPayload;
};

