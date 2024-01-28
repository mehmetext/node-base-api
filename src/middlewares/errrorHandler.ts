import { Request, Response, NextFunction } from "express";
import APIError from "../utils/APIError";

export default function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof APIError) {
    return res
      .status(err.statusCode || 400)
      .json({ success: false, message: err.message });
  }

  return res.status(500).json({
    success: false,
    message: "Bir hata ile karşılaştık, API kontrol edin.",
  });
}
