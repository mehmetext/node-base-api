import { Router } from "express";
import HelloController from "../controllers/hello.controller";
import HelloValidation from "../middlewares/validations/hello.validation";

const hello = Router();

hello.get("/", HelloController.world);

hello.post("/", HelloValidation.post, HelloController.post);

export default hello;
