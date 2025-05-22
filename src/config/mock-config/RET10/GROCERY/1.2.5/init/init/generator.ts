import { SessionData } from "../../../../session-types";
import { getUpdatedBilling } from "../../api-objects/billing";
import { createFulfillments } from "../../api-objects/fulfillments";
import { SelectedItems } from "../../on_select/on_select/generator";

export async function init_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	const items = sessionData.selected_items as SelectedItems;
	existingPayload.message.order.items = items.map((item) => {
		return {
			id: item.id,
			fulfillment_id: "F1",
			quantity: {
				count: item.quantity.count,
			},
			location_id: "L1",
		};
	});
	existingPayload.message.order.billing = getUpdatedBilling(
		existingPayload.message.order.billing,
		true
	);
	existingPayload.message.order.fulfillments = createFulfillments(
		"init",
		"init",
		sessionData,
		existingPayload.message.order.fulfillments
	);
	return existingPayload;
}
