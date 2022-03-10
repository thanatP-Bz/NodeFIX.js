const test = require("../models/models");

const getAllName = async (req, res) => {
  res.send("get all name");
};

const createName = async (req, res) => {
  const models = await test.create(req.body);
  res.status(201).json(models);
};

const login = async (req, res) => {
  res.send("POST");
};

module.exports = {
  createName,
  getAllName,
  login,
};
