import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  const data = { foo: "bar" };
  console.log(data);
  res.json(data);
});

app.listen(4000, () => {
  console.log("Server çalışıyor...");
});
