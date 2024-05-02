import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import RootValidation from "./root.validation";

export default class HelloValidation extends RootValidation {
  static async post(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      name: Joi.string().required(),
      surname: Joi.string().required(),
    });

    await super.validate(req, res, next, schema);
  }
}
