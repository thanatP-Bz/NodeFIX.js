const User = require("../models/auth");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../error");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("not valid info");
  }

  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
