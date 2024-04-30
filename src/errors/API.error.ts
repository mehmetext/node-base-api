export default class APIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode || 400;
  }
}
