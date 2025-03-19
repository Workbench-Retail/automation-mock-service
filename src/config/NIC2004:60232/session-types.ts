export interface SessionData {
  category_id?: string;
  shipment_method?: string;
  fulfillments?: string;
  transaction_id?: string;
  message_id?: string;
  bap_id?: string;
  bap_uri?: string;
  bpp_id?: string;
  bpp_uri?: string;
  city_code?: string;
  provider_id?: string;
  location_id?: string;
  error_code?: string;
  error_message?: string;
}

export type BecknContext = {
  action: string;
  bap_id: string;
  bap_uri: string;
  bpp_id?: string;
  bpp_uri?: string;
  domain: string;
  location: {
    city: {
      code: string;
    };
    country: {
      code: string;
    };
  };
  message_id: string;
  timestamp: string;
  transaction_id: string;
  ttl: string;
  core_version: string;
};
