import { Router } from "express";
import HelloController from "../controllers/hello.controller";

const hello = Router();

hello.get("/", HelloController.world);

export default hello;
