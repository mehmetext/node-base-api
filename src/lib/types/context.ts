import { Request, Response } from "express";

type Context = (req: Request, res: Response) => void;

export default Context;
