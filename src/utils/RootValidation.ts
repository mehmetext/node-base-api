import { Request, Response, NextFunction } from "express";
import { ValidationError, Schema } from "joi";
import APIError from "./APIError";

export default class RootValidation {
  static async validate(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: Schema
  ) {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (e) {
      if (e instanceof ValidationError) {
        throw new APIError(e.message, 400);
      }
    }
  }
}
