import { Router } from "express";
import { l2Validation } from "../controllers/validationControllers";
import { saveDataMiddleware } from "../controllers/dataControllers";
import { setAckResponse } from "../utils/ackUtils";

const manualRouter = Router();

manualRouter.post("/:action", l2Validation, saveDataMiddleware,
    (req, res) => {
		res.status(200).send(setAckResponse(true));
	}
);

export default manualRouter;
