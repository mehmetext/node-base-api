import Joi from "joi";
import APIError from "../../utils/APIError";
import { NextFunction, Request, Response } from "express";

export default class AuthValidation {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      await Joi.object({
        name: Joi.string().trim().min(3).max(100).required().messages({
          "string.base": "İsim alanı normal metin olmalıdır.",
          "string.empty": "İsim alanı boş olamaz.",
          "string.min": "İsim alanı en az 3 karakter olmalıdır.",
          "string.max": "İsim alanı en fazla 100 karakter olmalıdır.",
          "string.required": "İsim alanı zorunludur.",
        }),
        lastname: Joi.string().trim().min(3).max(100).required().messages({
          "string.base": "Soyisim alanı normal metin olmalıdır.",
          "string.empty": "Soyisim alanı boş olamaz.",
          "string.min": "Soyisim alanı en az 3 karakter olmalıdır.",
          "string.max": "Soyisim alanı en fazla 100 karakter olmalıdır.",
          "string.required": "Soyisim alanı zorunludur.",
        }),
        email: Joi.string().email().trim().min(3).max(100).required().messages({
          "string.base": "Email alanı normal metin olmalıdır.",
          "string.empty": "Email alanı boş olamaz.",
          "string.min": "Email alanı en az 3 karakter olmalıdır.",
          "string.max": "Email alanı en fazla 100 karakter olmalıdır.",
          "string.email": "Lütfen geçerli bir email giriniz.",
          "string.required": "Email alanı zorunludur.",
        }),
        password: Joi.string().trim().min(6).max(36).required().messages({
          "string.base": "Şifre alanı normal metin olmalıdır.",
          "string.empty": "Şifre alanı boş olamaz.",
          "string.min": "Şifre alanı en az 6 karakter olmalıdır.",
          "string.max": "Şifre alanı en fazla 36 karakter olmalıdır.",
          "string.required": "Şifre alanı zorunludur.",
        }),
      }).validateAsync(req.body);

      next();
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        throw new APIError(error.message, 400);
      }
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      await Joi.object({
        email: Joi.string().email().trim().min(3).max(100).required().messages({
          "string.base": "Email alanı normal metin olmalıdır.",
          "string.empty": "Email alanı boş olamaz.",
          "string.min": "Email alanı en az 3 karakter olmalıdır.",
          "string.max": "Email alanı en fazla 100 karakter olmalıdır.",
          "string.email": "Lütfen geçerli bir email giriniz.",
          "string.required": "Email alanı zorunludur.",
        }),
        password: Joi.string().trim().min(6).max(36).required().messages({
          "string.base": "Şifre alanı normal metin olmalıdır.",
          "string.empty": "Şifre alanı boş olamaz.",
          "string.min": "Şifre alanı en az 6 karakter olmalıdır.",
          "string.max": "Şifre alanı en fazla 36 karakter olmalıdır.",
          "string.required": "Şifre alanı zorunludur.",
        }),
      }).validateAsync(req.body);

      next();
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        throw new APIError(error.message, 400);
      }
    }
  }
}
