const User = require("../models/User");
const { BadRequestError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(201).json({ user: { name: user.getName() }, token });
};

const login = async (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
