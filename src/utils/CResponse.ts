import { Response } from "express";

interface ICResponse {
  res: Response;
  data: any;
  message?: string | null;
  status?: number;
}

export default class CResponse {
  static successMessage: string = "İşlem başarılı!";
  static failMessage: string = "İşlem başarısız!";

  static success({ res, data, message }: ICResponse) {
    return res.status(200).send({
      success: true,
      data,
      message: message ?? this.successMessage,
    });
  }

  static created({ res, data, message }: ICResponse) {
    return res.status(201).send({
      success: true,
      data,
      message: message ?? this.successMessage,
    });
  }

  /* 
    500: İşlem başarısız. API ile ilgili hatalar.
    400: Bad request.
    401: Unauthorized.
    404: Not found.
    429: Çok istek hatası.
  
  */
  static error({ res, data, message, status }: ICResponse) {
    if (!message) {
      if (status === 401) message = "Unauthorized";
    }

    return res.status(status!).send({
      success: false,
      data,
      message: message ?? this.failMessage,
    });
  }
}
