const CustomAPIError = require("./custom-api");
const { StatusCodes } = require("http-status-codes");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
