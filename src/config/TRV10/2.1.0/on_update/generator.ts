import { SessionData } from "../../session-types";

type Price = {
    value: string;
    currency: string;
};

type Item = {
    id: string;
    price: Price;
    quantity?: {
        selected: {
            count: number;
        };
    };
};

type Breakup = {
    title: string;
    item?: Item;
    price: Price;
};

type Quote = {
    price: Price;
    breakup: Breakup[];
    ttl?: string;
};

function applyCancellationCharges(quote: Quote, state: string): Quote {
    // Get cancellation fee based on ride state
    const getCancellationFee = (state: string): number => {
        switch (state) {
            case 'RIDE_ASSIGNED':
                return 0;
            case 'RIDE_ENROUTE_PICKUP':
                return 30;
            case 'RIDE_ARRIVED_PICKUP':
                return 50;
            case 'RIDE_STARTED':
                return parseFloat(quote.price.value); // 100% of ride value
            default:
                return 0;
        }
    };

    const cancellationFee = getCancellationFee(state);
    const currentTotal = parseFloat(quote.price.value);

    // Create refund breakup for the base fare
    const refundBreakups: Breakup[] = quote.breakup.map(breakup => ({
        title: "REFUND",
        price: {
            currency: breakup.price.currency,
            value: `-${breakup.price.value}`
        }
    }));

    // Add cancellation charge breakup
    const cancellationBreakup: Breakup = {
        title: "CANCELLATION_CHARGES",
        price: {
            currency: "INR",
            value: cancellationFee.toFixed(2)
        }
    };

    // Calculate final amount (original - refund + cancellation charges)
    const finalAmount = cancellationFee;

    return {
        price: {
            value: finalAmount.toFixed(2),
            currency: "INR"
        },
        breakup: [...quote.breakup, ...refundBreakups, cancellationBreakup],
        ttl: "PT30S"
    };
}

export async function onUpdateGenerator(
    existingPayload: any,
    sessionData: SessionData
) {
    // Update payments if present
    if (sessionData.updated_payments?.length > 0) {
        existingPayload.message.order.payments = sessionData.updated_payments;
    }

    // Update items if present
    if (sessionData.items?.length > 0) {
        existingPayload.message.order.items = sessionData.items;
    }

    // Update fulfillments if present
    if (sessionData.fulfillments?.length > 0) {
        existingPayload.message.order.fulfillments = sessionData.fulfillments;
    }

    // Update order status if present
        if ('order_status' in sessionData) {
        existingPayload.message.order.status = sessionData.order_status;
    }

    // Handle cancellation and quote updates
    if ('cancellation' in sessionData) {
        const fulfillmentState = existingPayload.message.order.fulfillments[0]?.state?.descriptor?.code;
        if (fulfillmentState && existingPayload.message.order.quote) {
            existingPayload.message.order.quote = applyCancellationCharges(
                existingPayload.message.order.quote,
                fulfillmentState
            );
        }
    }

    // Update timestamps
    existingPayload.message.order.updated_at = new Date().toISOString();
    if (existingPayload.message.order.fulfillments[0]["_EXTERNAL"]){
        delete existingPayload.message.order.fulfillments[0]["_EXTERNAL"]
    }
    existingPayload.message.order.payments = sessionData.payments
    if (existingPayload.message.order.payments[0]["_EXTERNAL"]){
        delete existingPayload.message.order.payments[0]["_EXTERNAL"]
    }
    return existingPayload;
}