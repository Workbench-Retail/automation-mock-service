export type SessionData = {
	subscriber_url: string | undefined;
	transaction_id: string | undefined;
	message_id: string | undefined;
	bap_id: string | undefined;
	bap_uri: string | undefined;
	bpp_id: string | undefined;
	bpp_uri: string | undefined;
	city_code: string | undefined;
	error_code: string | undefined;
	error_message: string | undefined;
};

export type BecknContext = {
	action: string;
	bap_id: string;
	bap_uri: string;
	bpp_id?: string;
	bpp_uri?: string;
	domain: string;
	country: string;
	city: string;
	message_id: string;
	timestamp: string;
	transaction_id: string;
	core_version: string;
};
