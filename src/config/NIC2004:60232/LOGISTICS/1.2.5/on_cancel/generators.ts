export const onCancelGenerator = (existingPayload: any, sessionData: any) => {
  existingPayload.message.order.id = sessionData.order_id;

  return existingPayload;
};
