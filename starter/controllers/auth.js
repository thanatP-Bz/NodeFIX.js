const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError, BadRequestError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName(), email: user.email }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });
  const token = user.createJWT();

  if (!user) {
    throw new UnauthenticatedError("not authenticated");
  }

  //compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("password does not correct");
  }
  res
    .status(StatusCodes.OK)
    .json({ name: { name: user.getName(), email: user.getEmail() }, token });
};

module.exports = {
  register,
  login,
};
