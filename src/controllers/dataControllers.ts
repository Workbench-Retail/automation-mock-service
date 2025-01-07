import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { getMockResponseMetaData } from "../services/mock-services";

/*
	save data middleware:
	update the session data against the transaction id 
	and json paths to be saved are all present in the api config

*/
export async function saveDataMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const action = req.params.action;
	const body = req.body;

	next();
}
