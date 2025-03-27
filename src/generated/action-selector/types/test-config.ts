export interface ValidationConfig {
    runAllValidations: boolean;
}

export type validationOutput = {
    valid: boolean;
    code: number;
    description?: string;
}[];

/*
{% comment %} export type ExternalData = {
    subscriber_url?: string[];
    transaction_id?: string[];
    message_id?: string[];
    last_action?: string[];
    mock_type?: string[];
    city_code?: string[];
    bap_id?: string[];
    bap_uri?: string[];
    bpp_id?: string[];
    bpp_uri?: string[];
    category_id?: string[];
    shipment_method?: string[];
    fulfillments?: string[];
    provider_id?: string[];
    location_id?: string[];
    error_code?: string[];
    error_message?: string[];
    cancellation_reason_id?: string[];
    order_id?: string[];
    order_status?: string[];
    billing?: string[];
    fulfillment_status?: string[];
    quote_price?: string[];
    fulfillment_pickup_timestamp?: string[];
    start_location?: string[];
    start_area_code?: string[];
    end_location?: string[];
    end_area_code?: string[];
    is_track_execute?: string[];
}; {% endcomment %}
*/

export type ExternalData = {};

export type validationInput = {
    payload: any;
    externalData: ExternalData;
    config: ValidationConfig;
};

export type testFunctionArray = Array<
    (input: validationInput) => validationOutput
>;
