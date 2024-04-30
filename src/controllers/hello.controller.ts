import { Request, Response } from "express";

export default class HelloController {
  static async world(req: Request, res: Response) {
    res.json({ hello: "world!" });
  }
}
