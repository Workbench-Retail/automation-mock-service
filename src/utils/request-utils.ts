import axios from "axios";

export async function sendToApiService(
	action: string,
	body: any,
	queryData = {}
) {
	await axios.post(`${process.env.API_SERVICE_URL}/mock/${action}`, body, {
		params: {
			...queryData,
		},
	});
}
