import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthValidation from "../middlewares/validations/auth.validation";
import { tokenCheck } from "../middlewares/auth";

const authRouter = Router();

authRouter.post("/login", AuthValidation.login, AuthController.login);

authRouter.post("/register", AuthValidation.register, AuthController.register);

authRouter.get("/me", tokenCheck, AuthController.me);

export default authRouter;
