

- **action** : All the following sub conditions must pass as per the api requirement

	- **condition first_search_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition first_search_request_LOGISTICS.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	  - **condition first_search_request_LOGISTICS.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	
	- **condition init_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition init_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition init_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	    - **condition init_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition init_request_LOGISTICS.2**: $._EXTERNAL.provider_id must be present in the payload
	
	- **condition confirm_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition confirm_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition confirm_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	    - **condition confirm_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition confirm_request_LOGISTICS.2**: $._EXTERNAL.quote_price must be present in the payload
	
	- **condition update_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition update_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition update_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	    - **condition update_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition update_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition track_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition track_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition track_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	    - **condition track_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition track_request_LOGISTICS.2**: $._EXTERNAL.fulfillment_pickup_timestamp must be present in the payload
	
	- **condition cancel_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition cancel_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition cancel_request_LOGISTICS.1.1**: $._EXTERNAL.mock_type must be equal to ["BAP"]
	    - **condition cancel_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition cancel_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition on_search_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition on_search_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition on_search_request_LOGISTICS.1.1**: all of the following sub conditions must be met:
	
	      - **condition on_search_request_LOGISTICS.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	      - **condition on_search_request_LOGISTICS.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	    - **condition on_search_request_LOGISTICS.1.2**: $._EXTERNAL.city_code must be present in the payload
	  - **condition on_search_request_LOGISTICS.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	
	- **condition on_init_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition on_init_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition on_init_request_LOGISTICS.1.1**: all of the following sub conditions must be met:
	
	      - **condition on_init_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:
	
	        - **condition on_init_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	        - **condition on_init_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	      - **condition on_init_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
	    - **condition on_init_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition on_init_request_LOGISTICS.2**: $._EXTERNAL.billing must be present in the payload
	
	- **condition on_confirm_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition on_confirm_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition on_confirm_request_LOGISTICS.1.1**: all of the following sub conditions must be met:
	
	      - **condition on_confirm_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:
	
	        - **condition on_confirm_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	        - **condition on_confirm_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	      - **condition on_confirm_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
	    - **condition on_confirm_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition on_confirm_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition on_update_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition on_update_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition on_update_request_LOGISTICS.1.1**: all of the following sub conditions must be met:
	
	      - **condition on_update_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:
	
	        - **condition on_update_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	        - **condition on_update_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	      - **condition on_update_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
	    - **condition on_update_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition on_update_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition on_status_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition on_status_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition on_status_request_LOGISTICS.1.1**: all of the following sub conditions must be met:
	
	      - **condition on_status_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:
	
	        - **condition on_status_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	        - **condition on_status_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	      - **condition on_status_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
	    - **condition on_status_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition on_status_request_LOGISTICS.2**: $._EXTERNAL.order_id must be present in the payload
	
	- **condition on_track_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition on_track_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition on_track_request_LOGISTICS.1.1**: all of the following sub conditions must be met:
	
	      - **condition on_track_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:
	
	        - **condition on_track_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	        - **condition on_track_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	      - **condition on_track_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
	    - **condition on_track_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition on_track_request_LOGISTICS.2**: $._EXTERNAL.is_track_execute must be equal to ["true"]
	
	- **condition on_cancel_request_LOGISTICS**: all of the following sub conditions must be met:
	
	  - **condition on_cancel_request_LOGISTICS.1**: all of the following sub conditions must be met:
	
	    - **condition on_cancel_request_LOGISTICS.1.1**: all of the following sub conditions must be met:
	
	      - **condition on_cancel_request_LOGISTICS.1.1.1**: all of the following sub conditions must be met:
	
	        - **condition on_cancel_request_LOGISTICS.1.1.1.1**: $._EXTERNAL.mock_type must be equal to ["BPP"]
	        - **condition on_cancel_request_LOGISTICS.1.1.1.2**: $._EXTERNAL.bap_uri must be present in the payload
	      - **condition on_cancel_request_LOGISTICS.1.1.2**: $._EXTERNAL.city_code must be present in the payload
	    - **condition on_cancel_request_LOGISTICS.1.2**: $._EXTERNAL.usecaseId must be equal to ["LOGISTICS"]
	  - **condition on_cancel_request_LOGISTICS.2**: $._EXTERNAL.is_cancel_executed must be equal to ["true"]