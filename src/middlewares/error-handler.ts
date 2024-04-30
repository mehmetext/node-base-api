import { Request, Response, NextFunction } from "express";
import APIError from "../utils/APIError";
import R from "../utils/Response";

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof APIError) {
    return R.error(res, err.statusCode, err.message);
  }

  console.log(err);

  return R.error(res, 500, "Please check API!");
}
