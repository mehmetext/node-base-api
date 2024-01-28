import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
const port = process.env.PORT || 5002;

app.get("/", (req, res) => {
  res.json({ mesaj: "ana sayfa" });
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor...`);
});
