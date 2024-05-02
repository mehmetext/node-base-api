import { Router } from "express";
import hello from "./hello.router";

const router = Router();

router.use("/hello", hello);

export default router;
