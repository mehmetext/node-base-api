import { ValidationError } from "joi";
import APIError from "./api-error";
import SchemaMiddleware from "./types/schema-middleware";

export default class RootValidation {
  static validate: SchemaMiddleware = async (req, res, next, schema) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (e) {
      if (e instanceof ValidationError) {
        throw new APIError(e.message, 400);
      }
    }
  };
}
