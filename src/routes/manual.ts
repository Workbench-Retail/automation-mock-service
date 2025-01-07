import { Router } from "express";
import { l2Validation } from "../controllers/validationControllers";
import { saveDataMiddleware } from "../controllers/dataControllers";

const manualRouter = Router();

manualRouter.post("/:action", l2Validation, saveDataMiddleware);

export default manualRouter;
