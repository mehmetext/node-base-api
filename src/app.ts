import e from "express";
import dotenv from "dotenv";
import router from "./routers";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = e();

//Middlewares
app.use(e.json());
app.use(e.urlencoded({ extended: true }));

app.use("/api/v1", router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}...`);
});
