import { Request, Response } from "express";
import APIError from "../utils/APIError";
import R from "../utils/Response";

export default class HelloController {
  static async world(req: Request, res: Response) {
    return R.success(res, { hello: "world" });
  }

  static async post(req: Request, res: Response) {
    const { name } = req.body;

    if (name === "err") {
      throw new APIError("An error occured :P", 400);
    }

    return R.success(res, { name });
  }
}
