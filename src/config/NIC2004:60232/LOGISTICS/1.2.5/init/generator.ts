function getOneHourBeforeTimestamp() {
  const now = new Date();
  now.setHours(now.getHours() - 1);
  return now.toISOString();
}

export const initGenerator = async (existingPayload: any, sessionData: any) => {
  existingPayload.message.order.provider.id = sessionData.provider_id;
  existingPayload.message.order.provider.locations[0].id =
    sessionData.location_id;

  existingPayload.message.order.items[0].category_id = sessionData.category_id;
  existingPayload.message.order.items[0].descriptor.code =
    sessionData.shipment_method;

  // biiling mai created at and upated at timestamp needs to be upated
  existingPayload.message.order.billing.created_at =
    getOneHourBeforeTimestamp();
  existingPayload.message.order.billing.updated_at =
    getOneHourBeforeTimestamp();
  return existingPayload;
};
