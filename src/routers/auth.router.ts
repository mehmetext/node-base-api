import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const auth = Router();

auth.get("/me", AuthController.me);

export default auth;
