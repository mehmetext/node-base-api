import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import CResponse from "../utils/CResponse";
import user from "../models/user.model";

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

export async function tokenCheck(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const headerToken =
    req.headers.authorization &&
    req.headers.authorization?.startsWith("Bearer ");

  if (!headerToken) {
    return CResponse.error({ res, status: 401 });
  }

  const token = req.headers.authorization?.split(" ")[1];

  jwt.verify(
    token ?? "",
    process.env.JWT_SECRET_KEY ?? "",
    async (err, decoded: any) => {
      if (err) return CResponse.error({ res, status: 401 });

      const foundUser = await user
        .findById(decoded.sub)
        .select("_id name lastname email");

      if (!foundUser) {
        return CResponse.error({ res, status: 401 });
      }

      req.body.user = foundUser;

      next();
    }
  );
}
