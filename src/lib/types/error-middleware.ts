import { Request, Response, NextFunction } from "express";

type ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export default ErrorMiddleware;
