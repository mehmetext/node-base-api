import { Response } from "express";

export default class R {
  static success(res: Response, data?: any) {
    return res.status(200).json({ status: true, data: data });
  }

  static error(res: Response, statusCode: number, message?: string) {
    return res.status(statusCode).json({ status: false, message: message });
  }
}
