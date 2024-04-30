require("express-async-errors");

import e from "express";
import dotenv from "dotenv";
import router from "./routers";
import errorHandler from "./middlewares/error-handler";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = e();

//Middlewares
app.use(e.json());
app.use(e.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.use(errorHandler);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}...`);
});
