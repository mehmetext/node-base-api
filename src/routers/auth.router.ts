import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthValidation from "../middlewares/validations/auth.validation";

const authRouter = Router();

authRouter.post("/login", AuthController.login);

authRouter.post("/register", AuthValidation.register, AuthController.register);

export default authRouter;
