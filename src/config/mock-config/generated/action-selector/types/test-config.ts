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
    transaction_id?: string[];
    message_id?: string[];
    last_action?: string[];
    mock_type?: string[];
    city_code?: string[];
    bap_id?: string[];
    bap_uri?: string[];
    bpp_id?: string[];
    bpp_uri?: string[];
    start_code?: string[];
    end_code?: string[];
    buyer_app_fee?: string[];
    vehicle_type?: string[];
    fulfillments?: string[];
    category_ids?: string[];
    provider_id?: string[];
    fulfillment_ids?: string[];
    item_ids?: string[];
    items?: string[];
    selected_items?: string[];
    selected_item_ids?: string[];
    billing?: string[];
    payments?: string[];
    updated_payments?: string[];
    order_id?: string[];
    status?: string[];
    error_code?: string[];
    error_message?: string[];
    quote?: string[];
    ref_id?: string[];
    ttl?: string[];
    usecaseId?: string[];
    on_search_items?: string[];
    payment_type?: string[];
    payment?: string[];
    is_cod?: string[];
    cancellation?: string[];
    domain?: string[];
    linked_order?: string[];
    confirm_fulfillments?: string[];
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
