import { Request, Response } from "express";

export default class AuthController {
  static async me(req: Request, res: Response) {
    res.json({ page: "me" });
  }
}
