import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function on_cancel(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function validate_attribute_4(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.timestamp",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_4**: $.context.timestamp must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_5(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_5**: $.context.bap_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_6(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.transaction_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_7(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.message_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_7**: $.context.message_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_8(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.version",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_8**: $.context.version must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_10(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_uri",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_11(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_11**: $.context.ttl must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_12(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_attribute_13(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_uri",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_enum_1(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["on_cancel"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.action",
                );

                const validate =
                    validations.allIn(enumPath, enumList) &&
                    validations.arePresent(enumPath);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_enum_1**: all of the following sub conditions must be met:

  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_cancel"]
  - **condition validate_enum_1.2**: $.context.action must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_enum_2(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["IND"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.country.code",
                );

                const validate =
                    validations.allIn(enumPath, enumList) &&
                    validations.arePresent(enumPath);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_enum_2**: all of the following sub conditions must be met:

  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_enum_3(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.location.city.code",
                );

                const validate = validations.arePresent(enumPath);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_enum_3**: $.context.location.city.code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function validate_enum_4(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["ONDC:TRV11"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );

                const validate =
                    validations.allIn(enumPath, enumList) &&
                    validations.arePresent(enumPath);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition validate_enum_4**: all of the following sub conditions must be met:

  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
  - **condition validate_enum_4.2**: $.context.domain must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function on_cancel_Message_TESTS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const errorBlock = payloadUtils.getJsonPath(
                    testObj,
                    "$.error.code",
                );

                const skipCheck = validations.arePresent(errorBlock);
                if (skipCheck) continue;

                function validate_attribute_14(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.id",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_14**: $.message.order.id must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_15(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.status",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_15**: $.message.order.status must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_16(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].id",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_16**: $.message.order.items[*].id must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_17(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.name",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_17**: $.message.order.items[*].descriptor.name must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_19(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].price.currency",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_19**: $.message.order.items[*].price.currency must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_20(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].price.value",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_20**: $.message.order.items[*].price.value must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_21(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].quantity.selected.count",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_21**: $.message.order.items[*].quantity.selected.count must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_22(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].fulfillment_ids[*]",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_22**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_23(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].category_ids[*]",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_23**: $.message.order.items[*].category_ids[*] must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_24(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].time.label",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_24**: $.message.order.items[*].time.label must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_25(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].time.duration",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_25**: $.message.order.items[*].time.duration must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_26(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.id",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_26**: $.message.order.provider.id must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_27(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.descriptor.name",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_27**: $.message.order.provider.descriptor.name must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_28(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.descriptor.images[*].url",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_28**: $.message.order.provider.descriptor.images[*].url must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_29(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.time.range.start",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_29**: $.message.order.provider.time.range.start must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_30(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.provider.time.range.end",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_30**: $.message.order.provider.time.range.end must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_31(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].id",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_31**: $.message.order.fulfillments[*].id must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_33(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].id",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_33**: $.message.order.fulfillments[*].id must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_35(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].stops[*].location.gps",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_35**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_37(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.quote.price.value",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_37**: $.message.order.quote.price.value must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_38(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.quote.price.currency",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_38**: $.message.order.quote.price.currency must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_40(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].id",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_40**: $.message.order.payments[*].id must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_44(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].params.bank_code",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_44**: $.message.order.payments[*].params.bank_code must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_45(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].params.bank_account_number",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_45**: $.message.order.payments[*].params.bank_account_number must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_46(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation_terms[*].external_ref.url",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_46**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_47(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation_terms[*].external_ref.mimetype",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_47**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_48(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation.cancelled_by",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_48**: $.message.order.cancellation.cancelled_by must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_attribute_49(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const attr = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.cancellation.time",
                        );

                        const validate = validations.arePresent(attr);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_attribute_49**: $.message.order.cancellation.time must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_5(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = ["SJT", "SFSJT", "RJT", "PASS"];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].descriptor.code",
                        );

                        const validate =
                            validations.allIn(enumPath, enumList) &&
                            validations.arePresent(enumPath);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_5**: all of the following sub conditions must be met:

  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_6(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = ["BUS", "METRO"];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].vehicle.category",
                        );

                        const validate =
                            validations.allIn(enumPath, enumList) &&
                            validations.arePresent(enumPath);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_6**: all of the following sub conditions must be met:

  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_7(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = ["ROUTE", "TRIP"];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].type",
                        );

                        const validate =
                            validations.allIn(enumPath, enumList) &&
                            validations.arePresent(enumPath);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_7**: all of the following sub conditions must be met:

  - **condition validate_enum_7.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
  - **condition validate_enum_7.2**: $.message.order.fulfillments[*].type must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_8(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = [
                            "START",
                            "END",
                            "INTERMEDIATE_STOP",
                            "TRANSIT_STOP",
                        ];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].type",
                        );

                        const skipCheck = !validations.arePresent(enumPath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(enumPath, enumList);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]

	> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_9(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = ["QR"];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].stops[*].authorization.type",
                        );

                        const skipCheck = !validations.arePresent(enumPath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(enumPath, enumList);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]

	> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_10(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = ["UNCLAIMED", "CLAIMED"];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].stops[*].authorization.status",
                        );

                        const skipCheck = !validations.arePresent(enumPath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(enumPath, enumList);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]

	> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_11(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = ["NOT-PAID", "PAID"];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].status",
                        );

                        const validate =
                            validations.allIn(enumPath, enumList) &&
                            validations.arePresent(enumPath);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_11**: all of the following sub conditions must be met:

  - **condition validate_enum_11.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
  - **condition validate_enum_11.2**: $.message.order.payments[*].status must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_12(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = ["BPP", "BAP"];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].collected_by",
                        );

                        const validate =
                            validations.allIn(enumPath, enumList) &&
                            validations.arePresent(enumPath);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_12**: all of the following sub conditions must be met:

  - **condition validate_enum_12.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
  - **condition validate_enum_12.2**: $.message.order.payments[*].collected_by must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_13(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = [
                            "PRE-ORDER",
                            "ON-FULFILLMENT",
                            "POST-FULFILLMENT",
                        ];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].type",
                        );

                        const validate =
                            validations.allIn(enumPath, enumList) &&
                            validations.arePresent(enumPath);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_13**: all of the following sub conditions must be met:

  - **condition validate_enum_13.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
  - **condition validate_enum_13.2**: $.message.order.payments[*].type must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_enum_14(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const enumList = [
                            "BASE_PRICE",
                            "REFUND",
                            "CANCELLATION_CHARGES",
                            "OFFER",
                            "TOLL",
                        ];
                        const enumPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.quote.breakup[*].title",
                        );

                        const validate =
                            validations.allIn(enumPath, enumList) &&
                            validations.arePresent(enumPath);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_enum_14**: all of the following sub conditions must be met:

  - **condition validate_enum_14.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
  - **condition validate_enum_14.2**: $.message.order.quote.breakup[*].title must be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_0(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const validTags = [
                            "ROUTE_INFO",
                            "TICKET_INFO",
                            "TRIP_DETAILS",
                        ];
                        const tagPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.fulfillments[*].tags[*].descriptor.code",
                        );

                        const skipCheck = !validations.arePresent(tagPath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(tagPath, validTags);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]

	> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_0_ROUTE_INFO(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                        );
                        const validValues = ["ROUTE_ID", "ROUTE_DIRECTION"];

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_0_TICKET_INFO(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                        );
                        const validValues = ["NUMBER"];

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_0_TRIP_DETAILS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                        );
                        const validValues = [
                            "AVAILABLE_TRIPS",
                            "UTILIZED_TRIPS",
                        ];

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_1(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const validTags = ["FARE_POLICY"];
                        const tagPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.items[*].tags[*].descriptor.code",
                        );

                        const skipCheck = !validations.arePresent(tagPath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(tagPath, validTags);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]

	> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_1_FARE_POLICY(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                        );
                        const validValues = [
                            "RESTRICTED_PERSON",
                            "RESTRICTION_PROOF",
                        ];

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_2(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(input.payload, "$");
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const validTags = [
                            "BUYER_FINDER_FEES",
                            "SETTLEMENT_TERMS",
                        ];
                        const tagPath = payloadUtils.getJsonPath(
                            testObj,
                            "$.message.order.payments[*].tags[*].descriptor.code",
                        );

                        const skipCheck = !validations.arePresent(tagPath);
                        if (skipCheck) continue;

                        const validate = validations.allIn(tagPath, validTags);

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]

	> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_2_BUYER_FINDER_FEES(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                        );
                        const validValues = [
                            "BUYER_FINDER_FEES_TYPE",
                            "BUYER_FINDER_FEES_PERCENTAGE",
                            "BUYER_FINDER_FEES_AMOUNT",
                        ];

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }
                function validate_tag_2_SETTLEMENT_TERMS(
                    input: validationInput,
                ): validationOutput {
                    const scope = payloadUtils.getJsonPath(
                        input.payload,
                        "$.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')]",
                    );
                    let subResults: validationOutput = [];
                    let valid = true;
                    for (const testObj of scope) {
                        testObj._EXTERNAL = input.externalData;
                        const subTags = payloadUtils.getJsonPath(
                            testObj,
                            "$.list[*].descriptor.code",
                        );
                        const validValues = [
                            "SETTLEMENT_WINDOW",
                            "SETTLEMENT_BASIS",
                            "SETTLEMENT_TYPE",
                            "MANDATORY_ARBITRATION",
                            "COURT_JURISDICTION",
                            "DELAY_INTEREST",
                            "STATIC_TERMS",
                            "SETTLEMENT_AMOUNT",
                        ];

                        const validate = validations.allIn(
                            subTags,
                            validValues,
                        );

                        if (!validate) {
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: `- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]`,
                                },
                            ];
                        }

                        delete testObj._EXTERNAL;
                    }
                    return [{ valid: valid, code: 200 }, ...subResults];
                }

                const testFunctions: testFunctionArray = [
                    validate_attribute_14,
                    validate_attribute_15,
                    validate_attribute_16,
                    validate_attribute_17,
                    validate_attribute_19,
                    validate_attribute_20,
                    validate_attribute_21,
                    validate_attribute_22,
                    validate_attribute_23,
                    validate_attribute_24,
                    validate_attribute_25,
                    validate_attribute_26,
                    validate_attribute_27,
                    validate_attribute_28,
                    validate_attribute_29,
                    validate_attribute_30,
                    validate_attribute_31,
                    validate_attribute_33,
                    validate_attribute_35,
                    validate_attribute_37,
                    validate_attribute_38,
                    validate_attribute_40,
                    validate_attribute_44,
                    validate_attribute_45,
                    validate_attribute_46,
                    validate_attribute_47,
                    validate_attribute_48,
                    validate_attribute_49,
                    validate_enum_5,
                    validate_enum_6,
                    validate_enum_7,
                    validate_enum_8,
                    validate_enum_9,
                    validate_enum_10,
                    validate_enum_11,
                    validate_enum_12,
                    validate_enum_13,
                    validate_enum_14,
                    validate_tag_0,
                    validate_tag_0_ROUTE_INFO,
                    validate_tag_0_TICKET_INFO,
                    validate_tag_0_TRIP_DETAILS,
                    validate_tag_1,
                    validate_tag_1_FARE_POLICY,
                    validate_tag_2,
                    validate_tag_2_BUYER_FINDER_FEES,
                    validate_tag_2_SETTLEMENT_TERMS,
                ];

                let invalidResults: validationOutput = [];
                for (const fn of testFunctions) {
                    const subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults = [...invalidResults, ...subResult];
                    if (
                        !input.config.runAllValidations &&
                        invalidResults.length > 0
                    ) {
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

        const testFunctions: testFunctionArray = [
            validate_attribute_4,
            validate_attribute_5,
            validate_attribute_6,
            validate_attribute_7,
            validate_attribute_8,
            validate_attribute_10,
            validate_attribute_11,
            validate_attribute_12,
            validate_attribute_13,
            validate_enum_1,
            validate_enum_2,
            validate_enum_3,
            validate_enum_4,
            on_cancel_Message_TESTS,
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
