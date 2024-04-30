import { Router } from "express";
import HelloController from "../controllers/hello.controller";

const hello = Router();

hello.get("/", HelloController.world);

hello.post("/post", HelloController.post);

export default hello;
