export const onStatusGenerator = async (
  existingPayload: any,
  sessionData: any
) => {
  // can there be multiple fulfullments
  existingPayload.message.order.fulfillments[0].start.time.timestamp =
    new Date().toISOString();

  return existingPayload;
};
