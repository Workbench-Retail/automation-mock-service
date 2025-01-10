

export async function search1Generator(existingPayload: any,sessionData: any){
    console.log("session_data",sessionData)
    console.log("existing payload", existingPayload)
    delete existingPayload.context.bpp_id
    delete existingPayload.context.bpp_uri
    return existingPayload;
}