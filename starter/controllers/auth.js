const User = require("../models/User");

const register = async (req, res) => {
  res.send("register user");
};

const login = async (req, res) => {
  res.send("logged in");
};

module.exports = {
  register,
  login,
};
