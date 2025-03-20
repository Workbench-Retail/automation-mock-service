export const onConfirmGenerator = (existingPayload: any, sessionData: any) => {
  existingPayload.message.order.id = sessionData.order_id;

  return existingPayload;
};
