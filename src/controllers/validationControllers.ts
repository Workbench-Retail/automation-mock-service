import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { ApiRequest } from "../routes/manual";

export async function l2Validation(
	req: ApiRequest,
	res: Response,
	next: NextFunction
) {
	logger.debug("l2 validations not implemented yet");
	next();
}
