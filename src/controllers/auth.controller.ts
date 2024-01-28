import { Request, Response } from "express";
import user from "../models/user.model";
import bcrypt from "bcrypt";

export default class AuthController {
  static async login(req: Request, res: Response) {
    console.log(req.body);

    res.json({ neler: "oldu" });
  }

  static async register(req: Request, res: Response) {
    const userCheck = await user.findOne({ email: req.body.email });

    if (userCheck) {
      console.log("Girilen email kullanımda!");
      return res.send({ status: false });
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);

    const creatingUser = new user(req.body);
    const response = await creatingUser.save();

    res.json({
      status: true,
      data: response,
      message: "Kayıt başarıyla eklendi.",
    });
  }
}
