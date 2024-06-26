import Context from "../../lib/types/context";
import APIError from "../../lib/api-error";
import R from "../../lib/response";

export default class HelloController {
  static world: Context = (req, res) => {
    return R.success(res, { hello: "world" });
  };

  static post: Context = (req, res) => {
    const { name, surname } = req.body;

    if (name === "err") {
      throw new APIError("An error occured :P", 400);
    }

    return R.success(res, { name, surname });
  };
}
