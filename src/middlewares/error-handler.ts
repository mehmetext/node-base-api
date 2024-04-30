import { Request, Response, NextFunction } from "express";
import APIError from "../utils/APIError";

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      status: false,
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: false,
    message: "Please check API!",
  });
}
