export interface SessionData {
  subscriber_url: string | undefined;
  transaction_id: string | undefined;
  message_id: string | undefined;
  last_action: string | undefined;
  mock_type: string | undefined;
  city_code: string | undefined;
  usecaseId?: string;
  bap_id: string | undefined;
  bap_uri: string | undefined;
  bpp_id: string | undefined;
  bpp_uri: string | undefined;
  shipment_method?: any;
  error_code?: string;
  error_message?: string;
  domain?: string;
}

export type BecknContext = {
  action: string;
  bap_id: string;
  bap_uri: string;
  bpp_id?: string;
  bpp_uri?: string;
  domain: string;
  message_id: string;
  timestamp: string;
  transaction_id: string;
  ttl?: string;
  core_version: string;
  country?: string;
  city?: string;
};

export interface Input {
  search_mode?: string;
}
