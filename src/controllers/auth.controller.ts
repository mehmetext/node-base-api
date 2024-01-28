import { Request, Response } from "express";

export default class AuthController {
  static async login(req: Request, res: Response) {
    console.log(req.body);

    res.json({ neler: "oldu" });
  }

  static async register(req: any, res: any) {
    console.log(req.body);
  }
}
