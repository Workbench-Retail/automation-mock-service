import { SessionData } from "../../../../session-types";
import { Fulfillments } from "../../api-objects/fulfillments";
import jsonpath from "jsonpath";

type tags = {
	code: string;
	list: {
		code: string;
		value: string;
	}[];
};

export async function update_partial_cancel_settlement_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	existingPayload.message.order.id = sessionData.order_id;
	const fulfillments = sessionData.fulfillments as Fulfillments;
	const cancelId =
		fulfillments.filter((f) => f.type === "Cancel")[0].id ??
		"CANCEL_FULFILLMENTS_ID_123";
	existingPayload.message.fulfillments = [{ id: cancelId, type: "Cancel" }];
	const trail = jsonpath.query(
		sessionData.fulfillments,
		`$.tags[?(@.code=="quote_trail")]`
	) as tags[];

	const amounts = trail.flatMap((t) => {
		return t.list
			.filter((l) => l.code === "value")
			.map((l) => {
				return parseInt(l.value);
			});
	});
	const totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);

	existingPayload.message.payment = {
		"@ondc/org/settlement_details": {
			settlement_counterparty: "buyer",
			settlement_phase: "refund",
			settlement_type: "netbanking",
			settlement_amount: -1 * totalAmount,
			settlement_timestamp: new Date().toISOString(),
		},
	};

	return existingPayload;
}
