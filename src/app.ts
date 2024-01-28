import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnection";
import router from "./routers";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT || 5002;

connectDB();

app.get("/", (req, res) => {
  res.json({ mesaj: "ana sayfa" });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor...`);
});
