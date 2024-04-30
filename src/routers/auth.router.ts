import { Router } from "express";

const auth = Router();

auth.get("/me", (req, res) => {
  res.json({ page: "me" });
});

export default auth;
