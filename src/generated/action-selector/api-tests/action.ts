import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function action(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function first_search_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BAP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.equalTo(usecaseId, forUsecaseId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition first_search_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition first_search_request_LOGISTICS.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
  - **condition first_search_request_LOGISTICS.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 100 }, ...subResults];
        }
        function init_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BAP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const providerId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.provider_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(providerId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition init_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition init_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition init_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
    - **condition init_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition init_request_LOGISTICS.2**: $._EXTERNAL.provider_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 102 }, ...subResults];
        }
        function confirm_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BAP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const quotePrice = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.quote_price",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(quotePrice);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition confirm_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition confirm_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition confirm_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
    - **condition confirm_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition confirm_request_LOGISTICS.2**: $._EXTERNAL.quote_price must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 103 }, ...subResults];
        }
        function update_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BAP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const orderId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(orderId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition update_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition update_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition update_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
    - **condition update_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition update_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 104 }, ...subResults];
        }
        function track_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BAP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const pickupTimestamp = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.fulfillment_pickup_timestamp",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(pickupTimestamp);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition track_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition track_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition track_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
    - **condition track_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition track_request_LOGISTICS.2**: $._EXTERNAL.fulfillment_pickup_timestamp must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 105 }, ...subResults];
        }
        function cancel_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BAP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const orderId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(orderId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition cancel_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition cancel_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition cancel_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
    - **condition cancel_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition cancel_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 108 }, ...subResults];
        }
        function on_search_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const city_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.city_code",
                );
                const bap_uri = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.bap_uri",
                );
                const forType = ["BPP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code) &&
                    validations.equalTo(usecaseId, forUsecaseId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition on_search_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition on_search_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition on_search_request_LOGISTICS.1.1**: all of the following sub conditions must be met:

      - **condition on_search_request_LOGISTICS.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
      - **condition on_search_request_LOGISTICS.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
    - **condition on_search_request_LOGISTICS.1.2**: $._EXTERNAL.city_code must be present in the payload
  - **condition on_search_request_LOGISTICS.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 105 }, ...subResults];
        }
        function on_init_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const city_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.city_code",
                );
                const bap_uri = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.bap_uri",
                );
                const forType = ["BPP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const billing = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.billing",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(billing);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition on_init_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition on_init_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition on_init_request_LOGISTICS.1.1**: all of the following sub conditions must be met:

      - **condition on_init_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:

        - **condition on_init_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
        - **condition on_init_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
      - **condition on_init_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
    - **condition on_init_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition on_init_request_LOGISTICS.2**: $._EXTERNAL.billing must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 106 }, ...subResults];
        }
        function on_confirm_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const city_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.city_code",
                );
                const bap_uri = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.bap_uri",
                );
                const forType = ["BPP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const orderId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(orderId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition on_confirm_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition on_confirm_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition on_confirm_request_LOGISTICS.1.1**: all of the following sub conditions must be met:

      - **condition on_confirm_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:

        - **condition on_confirm_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
        - **condition on_confirm_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
      - **condition on_confirm_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
    - **condition on_confirm_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition on_confirm_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 107 }, ...subResults];
        }
        function on_update_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const city_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.city_code",
                );
                const bap_uri = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.bap_uri",
                );
                const forType = ["BPP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const orderId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(orderId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition on_update_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition on_update_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition on_update_request_LOGISTICS.1.1**: all of the following sub conditions must be met:

      - **condition on_update_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:

        - **condition on_update_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
        - **condition on_update_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
      - **condition on_update_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
    - **condition on_update_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition on_update_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 109 }, ...subResults];
        }
        function on_status_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const city_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.city_code",
                );
                const bap_uri = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.bap_uri",
                );
                const forType = ["BPP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const orderId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.arePresent(orderId);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition on_status_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition on_status_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition on_status_request_LOGISTICS.1.1**: all of the following sub conditions must be met:

      - **condition on_status_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:

        - **condition on_status_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
        - **condition on_status_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
      - **condition on_status_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
    - **condition on_status_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition on_status_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 110 }, ...subResults];
        }
        function on_track_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const city_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.city_code",
                );
                const bap_uri = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.bap_uri",
                );
                const forType = ["BPP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const isTrackExecuted = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.is_track_execute",
                );
                const trackExecuted = ["true"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.equalTo(isTrackExecuted, trackExecuted);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition on_track_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition on_track_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition on_track_request_LOGISTICS.1.1**: all of the following sub conditions must be met:

      - **condition on_track_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:

        - **condition on_track_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
        - **condition on_track_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
      - **condition on_track_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
    - **condition on_track_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition on_track_request_LOGISTICS.2**: $._EXTERNAL.is_track_execute must be equal to ["true"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 111 }, ...subResults];
        }
        function on_cancel_request_LOGISTICS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const city_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.city_code",
                );
                const bap_uri = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.bap_uri",
                );
                const forType = ["BPP"];
                const usecaseId = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.usecaseId",
                );
                const forUsecaseId = ["LOGISTICS"];
                const isCancelExecuted = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.is_cancel_executed",
                );
                const cancelExecuted = ["true"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code) &&
                    validations.equalTo(usecaseId, forUsecaseId) &&
                    validations.equalTo(isCancelExecuted, cancelExecuted);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition on_cancel_request_LOGISTICS**: all of the following sub conditions must be met:

  - **condition on_cancel_request_LOGISTICS.1**: all of the following sub conditions must be met:

    - **condition on_cancel_request_LOGISTICS.1.1**: all of the following sub conditions must be met:

      - **condition on_cancel_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:

        - **condition on_cancel_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
        - **condition on_cancel_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
      - **condition on_cancel_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
    - **condition on_cancel_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
  - **condition on_cancel_request_LOGISTICS.2**: $._EXTERNAL.is_cancel_executed must be equal to ["true"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 110 }, ...subResults];
        }

        const testFunctions: testFunctionArray = [
            first_search_request_LOGISTICS,
            init_request_LOGISTICS,
            confirm_request_LOGISTICS,
            update_request_LOGISTICS,
            track_request_LOGISTICS,
            cancel_request_LOGISTICS,
            on_search_request_LOGISTICS,
            on_init_request_LOGISTICS,
            on_confirm_request_LOGISTICS,
            on_update_request_LOGISTICS,
            on_status_request_LOGISTICS,
            on_track_request_LOGISTICS,
            on_cancel_request_LOGISTICS,
        ];

        let invalidResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            // .filter(r => !r.valid);
            invalidResults = [...invalidResults, ...subResult];
            if (!input.config.runAllValidations && invalidResults.length > 0) {
                return invalidResults;
            }
        }
        if (invalidResults.length > 0) {
            // return invalidResults;
            subResults = invalidResults;
            valid = subResults.every((r) => r.valid);
        }

        delete testObj._EXTERNAL;
    }
    return [{ valid: valid, code: 200 }, ...subResults];
}
