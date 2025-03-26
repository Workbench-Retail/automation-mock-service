export async function onCancelRiderNotFoundGenerator(existingPayload: any, sessionData: any) {
    // Update payments if available
    if (sessionData.updated_payments?.length > 0) {
        existingPayload.message.order.payments = sessionData.updated_payments;
    }

    // Update items if available
    if (sessionData.items?.length > 0) {
        existingPayload.message.order.items = sessionData.items;
    }

    // Update fulfillments if available
    if (sessionData.fulfillments?.length > 0) {
        existingPayload.message.order.fulfillments = sessionData.fulfillments;
    }

    // Update order ID if available
    if (sessionData.order_id) {
        existingPayload.message.order.id = sessionData.order_id;
    }

    // Update quote if available
    if (sessionData.quote != null) {
        existingPayload.message.order.quote = sessionData.quote;
    }

    // Set cancellation details
    if (!existingPayload.message.order.cancellation) {
        existingPayload.message.order.cancellation = {
            cancelled_by: "PROVIDER",
            reason: {
                descriptor: {
                    code: "011"
                }
            }
        };
    }

    // Ensure order status is CANCELLED
    existingPayload.message.order.status = "CANCELLED";

    return existingPayload;
}
