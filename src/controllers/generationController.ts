import { NextFunction, Request, Response } from "express";

export async function generateMockResponseMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	// ! if payload exists in body do not generate mock response
	next();
}
