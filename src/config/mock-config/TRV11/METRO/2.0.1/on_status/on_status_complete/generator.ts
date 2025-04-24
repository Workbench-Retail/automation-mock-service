import { SessionData } from "../../../../session-types";

function updateFulfillments(order:any) {
	// Find a token from a TICKET fulfillment (first one with an authorization token)
	let tokenFromTicket = null;
	for (const fulfillment of order.fulfillments || []) {
	  if (
		fulfillment.type === "TICKET" &&
		Array.isArray(fulfillment.stops)
	  ) {
		for (const stop of fulfillment.stops) {
		  if (stop.authorization && stop.authorization.token) {
			tokenFromTicket = stop.authorization.token;
			break;
		  }
		}
	  }
	  if (tokenFromTicket) break;
	}
  
	// If no token found, fallback to a default value
	const authorization = {
	  type: "QR",
	  token: tokenFromTicket || "FALLBACK_TOKEN",
	  valid_to: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // Valid for 2 days
	  status: "CLAIMED"
	};
  
	// Process fulfillments
	order.fulfillments = order.fulfillments.map((fulfillment:any) => {
	  if (fulfillment.type === "TRIP") {
		const updatedStops = (fulfillment.stops || []).map((stop:any) => {
		  if (stop.type === "START") {
			return {
			  ...stop,
			  authorization
			};
		  }
		  return stop;
		});
  
		return {
		  ...fulfillment,
		  stops: updatedStops
		};
	  } else if (fulfillment.type === "TICKET") {
		// Remove the entire stops array
		const { stops, ...rest } = fulfillment;
		return rest;
	  }
  
	  return fulfillment;
	});
  
	return order;
  }
export async function onStatusCompleteGenerator(existingPayload: any,sessionData: SessionData){
    if (sessionData.updated_payments.length > 0) {
		existingPayload.message.order.payments = sessionData.updated_payments;
		existingPayload.message.order.payments[0].params.amount = sessionData.price
	  }
	
	if (sessionData.items.length > 0) {
	existingPayload.message.order.items = sessionData.items;
	}

	if (sessionData.fulfillments.length > 0) {
	existingPayload.message.order.fulfillments = sessionData.fulfillments;
	existingPayload.message.order = updateFulfillments(existingPayload.message.order)

	}
	if (sessionData.order_id) {
	existingPayload.message.order.id = sessionData.order_id;
	}
	if(sessionData.quote != null){
	existingPayload.message.order.quote = sessionData.quote
	}
    existingPayload.message.order.status = "COMPLETE"
	const now = new Date().toISOString();
  	existingPayload.message.order.created_at = sessionData.created_at
  	existingPayload.message.order.updated_at = now
    return existingPayload;
}