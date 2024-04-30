import e from "express";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = e();

app.get("/", (req, res) => {
  res.json({ page: "home" });
});

app.listen(process.env.PORT || 4001, () => {
  console.log("Server is running...");
});
