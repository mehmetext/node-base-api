import { Request, Response } from "express";

export default class HelloController {
  static async world(req: Request, res: Response) {
    res.json({ hello: "world!" });
  }

  static async post(req: Request, res: Response) {
    const { name } = req.body;
    res.json({ name });
  }
}
