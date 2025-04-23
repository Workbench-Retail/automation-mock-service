import { Router, Request } from "express";
import { l2Validation } from "../controllers/validationControllers";
import { saveDataMiddleware } from "../controllers/dataControllers";
import { setAckResponse } from "../utils/ackUtils";

const manualRouter = Router();

export interface ApiRequest extends Request {
	l2Error?: {
		code: number;
		message: string;
	};
}

manualRouter.post("/:action",l2Validation ,saveDataMiddleware, (req, res) => {
	res.status(200).send(setAckResponse(true));
});

export default manualRouter;
