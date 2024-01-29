require("express-async-errors");

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnection";
import router from "./routers";
import errorHandlerMiddleware from "./middlewares/errrorHandler";

import cors from "cors";
import corsOptions from "./utils/corsOptions";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT || 5002;

connectDB();

//Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use(cors(corsOptions));

app.use("/api", router);

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor...`);
});
