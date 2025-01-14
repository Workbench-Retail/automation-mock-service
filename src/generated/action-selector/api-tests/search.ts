import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function search(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function first_search_request(
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

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition first_search_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 100 }, ...subResults];
        }
        function second_search_request(
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

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition second_search_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 101 }, ...subResults];
        }
        function first_onsearch_request(
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

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(bap_uri) &&
                    validations.arePresent(city_code);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition first_onsearch_request**: all of the following sub conditions must be met:

  - **condition first_onsearch_request.1**: all of the following sub conditions must be met:

    - **condition first_onsearch_request.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
    - **condition first_onsearch_request.1.2**: $._EXTERNAL.bap_uri must be present in the payload
  - **condition first_onsearch_request.2**: $._EXTERNAL.city_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 102 }, ...subResults];
        }
        function second_onsearch_request(
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
                const start_code = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.start_code",
                );
                const forType = ["BPP"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(start_code);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition second_onsearch_request**: all of the following sub conditions must be met:

  - **condition second_onsearch_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition second_onsearch_request.2**: $._EXTERNAL.start_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 103 }, ...subResults];
        }
        function select_request(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const lastAction = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.last_action",
                );
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BAP"];

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition select_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 104 }, ...subResults];
        }
        function onselect_request(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const selected_item_ids = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.selected_item_ids[*]",
                );
                const forType = ["BPP"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(selected_item_ids);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition onselect_request**: all of the following sub conditions must be met:

  - **condition onselect_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition onselect_request.2**: $._EXTERNAL.selected_item_ids[*] must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 105 }, ...subResults];
        }
        function init_request(input: validationInput): validationOutput {
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

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition init_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 106 }, ...subResults];
        }
        function oninit_request(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const payments = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.payments[*].collected_by",
                );
                const forType = ["BPP"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(payments);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition oninit_request**: all of the following sub conditions must be met:

  - **condition oninit_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition oninit_request.2**: $._EXTERNAL.payments[*].collected_by must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 107 }, ...subResults];
        }
        function confirm_request(input: validationInput): validationOutput {
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

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition confirm_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 108 }, ...subResults];
        }
        function onconfirm_request(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const updated_payments = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.updated_payments[*].id",
                );
                const forType = ["BPP"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(updated_payments);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition onconfirm_request**: all of the following sub conditions must be met:

  - **condition onconfirm_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition onconfirm_request.2**: $._EXTERNAL.updated_payments[*].id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 109 }, ...subResults];
        }
        function onconfirm_delayed_request(
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
                const updated_payments = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.updated_payments[*].id",
                );
                const forType = ["BPP"];

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(updated_payments);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition onconfirm_delayed_request**: all of the following sub conditions must be met:

  - **condition onconfirm_delayed_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition onconfirm_delayed_request.2**: $._EXTERNAL.updated_payments[*].id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 110 }, ...subResults];
        }
        function status_request(input: validationInput): validationOutput {
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
                const order_id = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(order_id);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition status_request**: all of the following sub conditions must be met:

  - **condition status_request.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
  - **condition status_request.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 111 }, ...subResults];
        }
        function onstatus_active_request(
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
                const forType = ["BPP"];
                const order_id = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(order_id);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition onstatus_active_request**: all of the following sub conditions must be met:

  - **condition onstatus_active_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition onstatus_active_request.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 112 }, ...subResults];
        }
        function onstatus_complete_request(
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
                const forType = ["BPP"];
                const order_id = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(order_id);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition onstatus_complete_request**: all of the following sub conditions must be met:

  - **condition onstatus_complete_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition onstatus_complete_request.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 113 }, ...subResults];
        }
        function onstatus_complete_unsolicited_request(
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
                const forType = ["BPP"];
                const order_id = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(order_id);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition onstatus_complete_unsolicited_request**: all of the following sub conditions must be met:

  - **condition onstatus_complete_unsolicited_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition onstatus_complete_unsolicited_request.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 114 }, ...subResults];
        }
        function cancel_request(input: validationInput): validationOutput {
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

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition cancel_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 115 }, ...subResults];
        }
        function cancel_soft_request(input: validationInput): validationOutput {
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

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition cancel_soft_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 116 }, ...subResults];
        }
        function cancel_hard_request(input: validationInput): validationOutput {
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

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition cancel_hard_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 117 }, ...subResults];
        }
        function oncancel_request(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BPP"];

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition oncancel_request**: $._EXTERNAL.mock_type must be equal to ["BPP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 118 }, ...subResults];
        }
        function oncancel_soft_request(
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
                const forType = ["BPP"];

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition oncancel_soft_request**: $._EXTERNAL.mock_type must be equal to ["BPP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 119 }, ...subResults];
        }
        function oncancel_hard_request(
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
                const forType = ["BPP"];

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition oncancel_hard_request**: $._EXTERNAL.mock_type must be equal to ["BPP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 120 }, ...subResults];
        }
        function oncancel_init_request(
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
                const forType = ["BPP"];

                const validate = validations.equalTo(mockType, forType);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition oncancel_init_request**: $._EXTERNAL.mock_type must be equal to ["BPP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 121 }, ...subResults];
        }
        function onupdate_request(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const mockType = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.mock_type",
                );
                const forType = ["BPP"];
                const order_id = payloadUtils.getJsonPath(
                    testObj,
                    "$._EXTERNAL.order_id",
                );

                const validate =
                    validations.equalTo(mockType, forType) &&
                    validations.arePresent(order_id);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition onupdate_request**: all of the following sub conditions must be met:

  - **condition onupdate_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
  - **condition onupdate_request.2**: $._EXTERNAL.order_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 122 }, ...subResults];
        }

        const testFunctions: testFunctionArray = [
            first_search_request,
            second_search_request,
            first_onsearch_request,
            second_onsearch_request,
            select_request,
            onselect_request,
            init_request,
            oninit_request,
            confirm_request,
            onconfirm_request,
            onconfirm_delayed_request,
            status_request,
            onstatus_active_request,
            onstatus_complete_request,
            onstatus_complete_unsolicited_request,
            cancel_request,
            cancel_soft_request,
            cancel_hard_request,
            oncancel_request,
            oncancel_soft_request,
            oncancel_hard_request,
            oncancel_init_request,
            onupdate_request,
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
