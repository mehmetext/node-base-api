import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

type SchemaMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: Schema
) => Promise<void>;

export default SchemaMiddleware;
