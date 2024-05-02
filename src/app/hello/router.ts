import { Router } from "express";
import HelloController from "./controller";
import HelloValidation from "./validations";

const hello = Router();

hello.get("/", HelloController.world);

hello.post("/", HelloValidation.post, HelloController.post);

export default hello;
