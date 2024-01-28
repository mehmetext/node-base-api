import jwt from "jsonwebtoken";
import { Response } from "express";
import CResponse from "../utils/CResponse";

export async function createToken(user: any, res: Response) {
  const payload = {
    sub: user._id,
    name: user.name,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY ?? "", {
    algorithm: "HS512",
    expiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  });

  return CResponse.success({ res, data: token });
}
