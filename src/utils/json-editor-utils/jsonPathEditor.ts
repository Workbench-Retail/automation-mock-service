import { JSONPath } from "jsonpath-plus";

/**
 * Updates a JSON object at a specific JSONPath with a new value.
 *
 * @param json - The JSON object to update.
 * @param jsonPath - The JSONPath specifying the location to update.
 * @param newValue - The new value to set at the specified JSONPath.
 * @returns - The updated JSON object.
 */
function updateJsonPath<T extends object>(
	json: T,
	jsonPath: string,
	newValue: any
): T {
	const results = JSONPath({
		path: jsonPath,
		json,
		resultType: "all",
	});

	if (!results.length) {
		throw new Error(`No match found for JSONPath: ${jsonPath}`);
	}

	for (const result of results) {
		// Use the pointer to navigate the JSON structure
		const { pointer, parent, parentProperty } = result;

		if (!parent || !parentProperty) {
			throw new Error(`Invalid result structure for JSONPath: ${jsonPath}`);
		}

		// Update the target property
		parent[parentProperty] = newValue;
	}

	return json;
}

/**
 * Updates multiple JSONPaths in a JSON object with new values.
 *
 * @param json - The JSON object to update.
 * @param pathObject - An object mapping JSONPaths to their new values.
 * @returns - The updated JSON object.
 */
export function updateAllJsonPaths<T extends object>(
	json: T,
	pathObject: Record<string, any>
): T {
	for (const jsonPath in pathObject) {
		const value = pathObject[jsonPath];
		json = updateJsonPath(json, jsonPath, value);
	}
	return json;
}
