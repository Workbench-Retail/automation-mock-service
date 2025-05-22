import { SessionData } from "../../../../session-types";
import { createQuote } from "../../api-objects/breakup";
import { Fulfillment, Fulfillments } from "../../api-objects/fulfillments";

const rtoFulfillment = {
	id: "rto_mock_id_121",
	type: "RTO",
	state: {
		descriptor: {
			code: "RTO-Initiated",
		},
	},
	start: {
		contact: {
			email: "mishratanishq619@gmail.com",
			phone: "9399788618",
		},
		location: {
			gps: "12.966545,77.592074",
			address: {
				name: "Tanishq Mishra",
				building: "New_Building",
				locality: "6th Cross Road",
				city: "Bengaluru",
				state: "Karnataka",
				country: "IND",
				area_code: "560027",
			},
		},
		time: {
			timestamp: "2024-08-08T10:11:24.749Z",
		},
	},
	end: {
		location: {
			id: "668e238e1b106d310473ddb0",
			descriptor: {
				name: "Seller Business",
			},
			gps: "12.92580970146639,77.58362409712942",
			address: {
				locality: "Jayanagar",
				city: "Bengaluru",
				area_code: "560011",
				state: "Karnataka",
			},
		},
		contact: {
			email: "test@gmail.com",
			phone: "9876543210",
		},
	},
	tags: [
		{
			code: "quote_trail",
			list: [
				{
					code: "type",
					value: "item",
				},
				{
					code: "id",
					value: "839cb128-34bd-444d-9ffc-05903e62b35a",
				},
				{
					code: "currency",
					value: "INR",
				},
				{
					code: "value",
					value: "-2260.00",
				},
			],
		},
	],
};

function createRtoFulfillment(
	deliveryFulfillment: Fulfillment,
	items: {
		id: string;
		count: number;
		price: number;
	}[]
) {
	const rtoClone = JSON.parse(JSON.stringify(rtoFulfillment)) as Fulfillment;
	rtoClone.tags = items.map((item) => {
		return {
			code: "quote_trail",
			list: [
				{
					code: "type",
					value: "item",
				},
				{
					code: "id",
					value: item.id,
				},
				{
					code: "currency",
					value: "INR",
				},
				{
					code: "value",
					value: `${-1 * item.price}`,
				},
			],
		};
	});
	delete deliveryFulfillment.end?.time;
	rtoClone.start = {
		...deliveryFulfillment.end,
		time: {
			timestamp: new Date().toISOString(),
		},
	};
	rtoClone.end = {
		...deliveryFulfillment.start,
	};
}

export async function on_cancel_rto_generator(
	existingPayload: any,
	sessionData: SessionData
) {
	existingPayload.message.order.id = sessionData.order_id;
	existingPayload.message.order.created_at = sessionData.order_created_at;
	existingPayload.message.order.updated_at = new Date().toISOString();
	existingPayload.message.order.payment = sessionData.payment;
	existingPayload.message.order.billing = sessionData.billing;
	existingPayload.message.order.provider = sessionData.provider;
	existingPayload.message.order.items = sessionData.items.map((item: any) => {
		return {
			id: item.id,
			quantity: item.quantity,
			fulfillment_id: rtoFulfillment.id,
		};
	});
	const items: {
		id: string;
		count: number;
		price: number;
	}[] = sessionData.items.map((item: any) => {
		return {
			id: item.id,
			count: 0,
			price: sessionData.quote.breakup.find(
				(b: any) => b["@ondc/org/item_id"] === item.id
			).price.value,
		};
	});

	const savedFulfillments = sessionData.fulfillments as Fulfillments;
	const deliveryFulfillment = savedFulfillments.find(
		(f: any) => f.type === "Delivery"
	) as Fulfillment;

	existingPayload.message.order.fulfillments = [
		...savedFulfillments,
		createRtoFulfillment(deliveryFulfillment, items),
	];
	existingPayload.message.order.quote = createQuote(
		items,
		sessionData,
		existingPayload
	);
	return existingPayload;
}
