const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const UnauthenitcatedError = require("./unauthenticated");
const CustomAPIError = require("./custom-api");

module.exports = {
  BadRequestError,
  NotFoundError,
  UnauthenitcatedError,
  CustomAPIError,
};
