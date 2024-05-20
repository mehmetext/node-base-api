import { ValidationError } from "joi";
import APIError from "../../../lib/utils/APIError";
import SchemaMiddleware from "../../../lib/types/schema-middleware";

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
