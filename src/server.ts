import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import logger from "./utils/logger";
import { config } from "./config/serverConfig";
import defaultRouter from "./routes/defaultRoute";
import manualRouter from "./routes/manual";
import triggerRouter from "./routes/trigger";
import { setAckResponse, setBadRequestNack } from "./utils/ackUtils";

const createServer = (): Application => {
	const app = express();

	// Middleware
	app.use(express.json({ limit: "50mb" }));
	app.use(cors());

	// Log all requests in development
	if (config.port !== "production") {
		app.use((req: Request, res: Response, next: NextFunction) => {
			logger.debug(`${req.method} ${req.url}`);
			next();
		});
	}

	app.use("/manual", manualRouter);
	app.use("/mock", defaultRouter);
	app.use("/trigger", triggerRouter);

	// Health Check
	app.get("/health", (req: Request, res: Response) => {
		res.status(200).send(setAckResponse(true));
	});

	// Error Handling Middleware
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		logger.error(err.message, { stack: err.stack });
		res.status(200).send(setBadRequestNack(err.message));
	});

	return app;
};

export default createServer;
