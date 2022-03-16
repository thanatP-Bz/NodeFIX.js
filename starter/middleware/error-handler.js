const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let CustomError = {
    //set default
    StatusCode: err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    smg: err.message || "Something went wrong try again later",
  };

  /*  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  } */

  if (err.code && err.code === 11000) {
    CustomError.smg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    CustomError.StatusCode = 400;
  }
  /*  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err }) */
  return res.status(CustomError.StatusCode).json({ smg: CustomError.smg });
};

module.exports = errorHandlerMiddleware;
