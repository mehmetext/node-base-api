require("express-async-errors");

import e from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "../lib/utils/cors-options";
import rateLimit from "./middlewares/rate-limit";
import router from "./routers";
import errorHandler from "./middlewares/error-handler";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = e();

//Middlewares
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/api", rateLimit);

//Routes
app.use("/api/v1", router);

//Middlewares
app.use(errorHandler);

export default app;
