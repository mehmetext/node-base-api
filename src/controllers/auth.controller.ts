import { Request, Response } from "express";
import user from "../models/user.model";
import bcrypt from "bcrypt";
import APIError from "../utils/APIError";
import CResponse from "../utils/CResponse";
import { createToken } from "../middlewares/auth";

export default class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      throw new APIError("Email veya şifre yanlış!", 401);
    }

    const comparePassword = await bcrypt.compare(password, foundUser.password);

    if (!comparePassword) {
      throw new APIError("Email veya şifre yanlış!", 401);
    }

    return createToken(foundUser!, res);
  }

  static async register(req: Request, res: Response) {
    const userCheck = await user.findOne({ email: req.body.email });

    if (userCheck) {
      throw new APIError("Girilen email kullanımda!", 401);
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);

    const creatingUser = new user(req.body);
    const createdUserData = await creatingUser.save();

    if (!createdUserData) {
      throw new APIError("Kullanıcı kayıt edilemedi!", 400);
    }

    return CResponse.created({
      res,
      data: createdUserData,
      message: "Kayıt oluşturuldu.",
    });
  }

  static async me(req: Request, res: Response) {
    return CResponse.success({
      res,
      data: req.body.user,
    });
  }
}
