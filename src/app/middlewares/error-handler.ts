import APIError from "../../lib/utils/APIError";
import R from "../../lib/utils/Response";
import ErrorMiddleware from "../../lib/types/error-middleware";

const errorHandler: ErrorMiddleware = (err, req, res, next) => {
  if (err instanceof APIError) {
    return R.error(res, err.statusCode, err.message);
  }

  console.log(err);

  return R.error(res, 500, "Please check API!");
};

export default errorHandler;
