function getActionConfig() {
	return {
		"codes": [
    {
      "code": 100,
      "action_id": "search",
      "action": "search",
      "default": "2.1.0/search/default_multiple_stops.yaml",
      "message_id": true
    },
    {
        "code": 101,
        "action_id": "on_search",
        "action": "on_search",
        "default": "2.1.0/on_search/default.yaml",
        "message_id": false
    },
    {
        "code": 102,
        "action_id": "select",
        "action": "select",
        "default": "2.1.0/select/default.yaml",
        "message_id": true
    },
    {
        "code": 103,
        "action_id": "on_select",
        "action": "select",
        "default": "2.1.0/on_select/default.yaml",
        "message_id": false
    },
    {
        "code": 104,
        "action_id": "init",
        "action": "init",
        "default": "2.1.0/init/default.yaml",
        "message_id": true
    },
    {
        "code": 105,
        "action_id": "on_init",
        "action": "on_init",
        "default": "2.1.0/on_init/default.yaml",
        "message_id": false
    },
    {
        "code": 106,
        "action_id": "confirm",
        "action": "confirm",
        "default": "2.1.0/confirm/default.yaml",
        "message_id": true
    },
    {
        "code": 107,
        "action_id": "on_confirm",
        "action": "on_confirm",
        "default": "2.1.0/on_confirm/on_confirm_driver_assigned/default.yaml",
        "message_id": false
    },
    {
        "code": 108,
        "action_id": "on_status_unsolicited",
        "action": "on_status",
        "default": "2.1.0/on_status/default.yaml",
        "message_id": true
    },
    {
        "code": 109,
        "action_id": "track",
        "action": "track",
        "default": "2.1.0/track/default.yaml",
        "message_id": true
    },
    {
        "code": 110,
        "action_id": "on_track",
        "action": "on_track",
        "default": "2.1.0/on_track/default.yaml",
        "message_id": false
    },
    {
        "code": 111,
        "action_id": "on_status_ride_arrived",
        "action": "on_status",
        "default": "2.1.0/on_status/default.yaml",
        "message_id": true
    },
    {
        "code": 112,
        "action_id": "on_status_ride_started",
        "action": "on_status",
        "default": "2.1.0/on_status/default.yaml",
        "message_id": true
    },
    {
        "code": 113,
        "action_id": "on_update",
        "action": "on_update",
        "default": "2.1.0/on_update/default.yaml",
        "message_id": true
    },
    {
        "code": 114,
        "action_id": "status",
        "action": "status",
        "default": "2.1.0/status/default.yaml",
        "message_id": true
    },
    {
        "code": 115,
        "action_id": "on_status_solicited",
        "action": "on_status",
        "default": "2.1.0/on_status/default.yaml",
        "message_id": false
    },
    {
        "code": 116,
        "action_id": "update",
        "action": "update",
        "default": "2.1.0/update_/default.yaml",
        "message_id": true
    },
    {
        "code": 117,
        "action_id": "on_update_soft_update",
        "action": "update",
        "default": "2.1.0/on_update_/default.yaml",
        "message_id": false
    },
    {
        "code": 118,
        "action_id": "update_hard",
        "action": "update",
        "default": "2.1.0/update_/default.yaml",
        "message_id": true
    },
    {
        "code": 119,
        "action_id": "on_update_ride_updated",
        "action": "on_update",
        "default": "2.1.0/on_update_/default.yaml",
        "message_id": false
    },
    {
        "code": 120,
        "action_id": "update_quote",
        "action": "update",
        "default": "2.1.0/update_/default.yaml",
        "message_id": true
    },
    {
        "code": 121,
        "action_id": "on_update_quote",
        "action": "on_update",
        "default": "2.1.0/on_update/default.yaml",
        "message_id": false
    },
    {
        "code": 122,
        "action_id": "search_rental",
        "action": "search",
        "default": "2.1.0/search/default.yaml",
        "message_id": true
    },
    {
        "code": 123,
        "action_id": "on_search_rental",
        "action": "on_search",
        "default": "2.1.0/on_search/default-rental.yaml",
        "message_id": false
    },
    {
        "code": 124,
        "action_id": "search_rental_end",
        "action": "search",
        "default": "2.1.0/search/default.yaml",
        "message_id": true
    },
    {
        "code": 125,
        "action_id": "on_search_rental_end",
        "action": "on_search",
        "default": "2.1.0/on_search/default-rental-end.yaml",
        "message_id": false
    },
    {
        "code": 126,
        "action_id": "cancel",
        "action": "cancel",
        "default": "2.1.0/cancel/default.yaml",
        "message_id": true
    },
    {
        "code": 127,
        "action_id": "on_cancel",
        "action": "on_cancel",
        "default": "2.1.0/on_cancel/on_cancel_soft/default.yaml",
        "message_id": false
    }
  ]
	  };
}

export function getActionData(code: number) {
	const actionConfig = getActionConfig();
	const actionData = actionConfig.codes.find((action) => action.code === code);
	if (actionData) {
		return actionData;
	}
	throw new Error(`Action code ${code} not found`);
}
