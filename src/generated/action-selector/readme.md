

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition first_search_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition second_search_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition first_onsearch_request**: all of the following sub conditions must be met:
	
	  - **condition first_onsearch_request.1**: all of the following sub conditions must be met:
	
	    - **condition first_onsearch_request.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	    - **condition first_onsearch_request.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	  - **condition first_onsearch_request.2**: $._EXTERNAL.city_code must be present in the payload
	
	- **condition second_onsearch_request**: all of the following sub conditions must be met:
	
	  - **condition second_onsearch_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition second_onsearch_request.2**: $._EXTERNAL.start_code must be present in the payload
	
	- **condition select_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition onselect_request**: all of the following sub conditions must be met:
	
	  - **condition onselect_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition onselect_request.2**: $._EXTERNAL.selected_item_ids[*] must be present in the payload
	
	- **condition init_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition oninit_request**: all of the following sub conditions must be met:
	
	  - **condition oninit_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition oninit_request.2**: $._EXTERNAL.payments[*].collected_by must be present in the payload
	
	- **condition confirm_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition onconfirm_request**: all of the following sub conditions must be met:
	
	  - **condition onconfirm_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition onconfirm_request.2**: $._EXTERNAL.updated_payments[*].id must be present in the payload
	
	- **condition onconfirm_delayed_request**: all of the following sub conditions must be met:
	
	  - **condition onconfirm_delayed_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition onconfirm_delayed_request.2**: $._EXTERNAL.updated_payments[*].id must be present in the payload
	
	- **condition status_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition onstatus_active_request**: all of the following sub conditions must be met:
	
	  - **condition onstatus_active_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition onstatus_active_request.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition onstatus_complete_request**: all of the following sub conditions must be met:
	
	  - **condition onstatus_complete_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition onstatus_complete_request.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition onstatus_complete_unsolicited_request**: all of the following sub conditions must be met:
	
	  - **condition onstatus_complete_unsolicited_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition onstatus_complete_unsolicited_request.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition cancel_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition cancel_soft_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition cancel_hard_request**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	
	- **condition oncancel_request**: all of the following sub conditions must be met:
	
	  - **condition oncancel_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition oncancel_request.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition oncancel_soft_request**: all of the following sub conditions must be met:
	
	  - **condition oncancel_soft_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition oncancel_soft_request.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition oncancel_hard_request**: all of the following sub conditions must be met:
	
	  - **condition oncancel_hard_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition oncancel_hard_request.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition oncancel_init_request**: all of the following sub conditions must be met:
	
	  - **condition oncancel_init_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition oncancel_init_request.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition onupdate_request**: all of the following sub conditions must be met:
	
	  - **condition onupdate_request.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	  - **condition onupdate_request.2**: $._EXTERNAL.order_id must be present in the payload