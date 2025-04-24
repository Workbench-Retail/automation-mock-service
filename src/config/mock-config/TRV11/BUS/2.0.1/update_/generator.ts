import payloadUtils from "../../../../../utils/payload-utils";

function injectTicketFulfillments(payload: any, sessionData: any) {
    const ticketFulfillments =
      sessionData.fulfillments?.filter((f: any) => f?.type === "PASS") || [];
  
    payload.message.order.fulfillments = ticketFulfillments.map((f: any, idx: number) => ({
      id: f.id,
      vehicle: {
        registration: "MOCK_REG", 
      },
    }));
  
    return payload;
  }
  
export async function updateGenerator(existingPayload: any,sessionData: any){
    if(sessionData.order_id){
        existingPayload.message.order.id = sessionData.order_id
    }
    existingPayload = injectTicketFulfillments(existingPayload,sessionData)
    return existingPayload;
}