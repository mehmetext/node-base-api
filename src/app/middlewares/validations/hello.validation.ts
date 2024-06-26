import Joi from "joi";
import RootValidation from "../../../lib/root-validation";
import Middleware from "../../../lib/types/middleware";

export default class HelloValidation extends RootValidation {
  static post: Middleware = async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      surname: Joi.string().required(),
    });

    await super.validate(req, res, next, schema);
  };
}
