export interface SessionData {
  subscriber_url: string | undefined;
  transaction_id: string | undefined;
  message_id: string | undefined;
  last_action: string | undefined;
  mock_type: string | undefined;
  city_code: string | undefined;
  bap_id: string | undefined;
  bap_uri: string | undefined;
  bpp_id: string | undefined;
  bpp_uri: string | undefined;
  category_id?: string;
  shipment_method?: any;
  fulfillments?: any[];
  provider_id?: string;
  location_id?: string;
  error_code?: string;
  error_message?: string;
  cancellation_reason_id?: string;
  order_id?: string;
  order_status?: string;
  billing?: string;
  fulfillment_status?: string;
  quote_price?: string;
  fulfillment_pickup_timestamp?: string;
  start_location?: string;
  start_area_code?: string;
  end_location?: string;
  end_area_code?: string;
  is_track_execute?: string;
  confirm_create_at_timestamp?: string;
  tat?: string;
  confirm_fulfillments?: any;
  stateCode?: string;
  is_cancel_called?: string;
  order_updated_at_timestamp?: string;
  rto_id?: string;
  update_fulfillments?: any;
  items?: any;
  on_search_fulfillment?: any;
  on_search_items?: any[];
  quote?: any;
  usecaseId?: string;
  payment_type?: string;
  payment?: any;
  is_cod?: string;
}

export type BecknContext = {
  action: string;
  bap_id: string;
  bap_uri: string;
  bpp_id?: string;
  bpp_uri?: string;
  domain: string;
  location?: {
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
  country?: string;
  city?: string;
};
