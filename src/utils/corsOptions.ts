import { Request } from "express";

const whiteList = ["http://localhost:3000"];

export default function corsOptions(req: Request, callback: any) {
  const options = { origin: whiteList.includes(req.headers.origin ?? "") };

  callback(null, options);
}
