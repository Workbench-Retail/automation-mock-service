import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import jsonPath from "jsonpath";
import { RedisService } from "ondc-automation-cache-lib";
import apiRouter from "./routes";
import router from "./routes/trigger";
import logger from "./utils/logger";


const app = express();

RedisService.useDb(1);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use("/api", apiRouter);
app.use("/trigger",router)

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  logger.info(`Server running at ${PORT}`);
});
