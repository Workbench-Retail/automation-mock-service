export const onInitGenerator = (existingPayload: any, sessionData: any) => {
  existingPayload.message.order.provider.id = sessionData.provider_id;
  existingPayload.message.order.provider.locations[0].id =
    sessionData.location_id;

  return existingPayload;
};
