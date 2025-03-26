import { randomBytes } from "crypto";
import { SessionData } from "../../../session-types";

// Add at the top with other types
interface Agent {
    name?: string;
    phone?: string;
}

function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function updateOrderTimestamps(payload: any) {
    const now = new Date().toISOString();
    if (payload.message.order) {
        payload.message.order.created_at = now;
        payload.message.order.updated_at = now;
    }
    return payload;
}

function updateFulfillmentWithDriverInfo(fulfillment: any, sessionData: SessionData): void {
    // Set fulfillment state to RIDE_ASSIGNED
    fulfillment.state = {
        descriptor: {
            code: "RIDE_ASSIGNED"
        }
    };

    // Add OTP authorization to the first stop
    if (fulfillment.stops?.[0]) {
        fulfillment.stops[0].authorization = {
            type: "OTP",
            token: generateOTP(),
            valid_to: new Date(Date.now() + 30 * 60000).toISOString(), // 30 minutes validity
            status: "UNCLAIMED"
        };
    }

    // Ensure agent details are present
    if (!fulfillment.agent) {
        const defaultAgent: Agent = {
            name: "Driver Name",
            phone: "9856798567"
        };
        
        fulfillment.agent = {
            person: {
                name: defaultAgent.name
            },
            contact: {
                phone: defaultAgent.phone
            }
        };
    }

    // Add vehicle details if not present
    if (!fulfillment.vehicle) {
        fulfillment.vehicle = {
            category: "AUTO_RICKSHAW",
            variant: "AUTO_RICKSHAW",
            make: "Bajaj",
            model: "Compact RE",
            registration: "KA-01-AD-9876"
        };
    }
}

export async function onConfirmGenerator(
    existingPayload: any,
    sessionData: SessionData
) {
    const order_id = Math.random().toString(36).substring(2, 15);
    existingPayload.message.order.id = order_id;

    // Update order status to ACTIVE
    existingPayload.message.order.status = "ACTIVE";

    // Update fulfillments with driver information
    if (sessionData.fulfillments?.length > 0) {
        sessionData.fulfillments.forEach(fulfillment => {
            updateFulfillmentWithDriverInfo(fulfillment, sessionData);
        });
        existingPayload.message.order.fulfillments = sessionData.fulfillments;
    }

    // Update items if present
    if (sessionData.items?.length > 0) {
        existingPayload.message.order.items = sessionData.items;
    }

    // Update quote if present
    if (sessionData.quote) {
        existingPayload.message.order.quote = sessionData.quote;
    }

    // Update payments if present
    if (sessionData.updated_payments?.length > 0) {
        existingPayload.message.order.payments = sessionData.updated_payments;
    }

    // Add cancellation terms
    existingPayload.message.order.cancellation_terms = [
        {
            cancellation_fee: { percentage: "0" },
            fulfillment_state: { descriptor: { code: "RIDE_ASSIGNED" } },
            reason_required: true
        },
        {
            cancellation_fee: { amount: { currency: "INR", value: "30" } },
            fulfillment_state: { descriptor: { code: "RIDE_ENROUTE_PICKUP" } },
            reason_required: true
        },
        {
            cancellation_fee: { amount: { currency: "INR", value: "50" } },
            fulfillment_state: { descriptor: { code: "RIDE_ARRIVED_PICKUP" } },
            reason_required: true
        },
        {
            cancellation_fee: { percentage: "100" },
            fulfillment_state: { descriptor: { code: "RIDE_STARTED" } },
            reason_required: true
        }
    ];

    // Update timestamps
    existingPayload = updateOrderTimestamps(existingPayload);

    return existingPayload;
}
