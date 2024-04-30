import { Request, Response } from "express";
import APIError from "../errors/API.error";

export default class HelloController {
  static async world(req: Request, res: Response) {
    res.json({ hello: "world!" });
  }

  static async post(req: Request, res: Response) {
    const { name } = req.body;

    if (name === "err") {
      throw new APIError("An error occured :P", 400);
    }

    res.json({ name });
  }
}
