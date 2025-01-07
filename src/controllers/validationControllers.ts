import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export async function l2Validation(
	req: Request,
	res: Response,
	next: NextFunction
) {
	logger.debug("l2 validations not implemented yet");
	next();
}
