const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const {} = require("../errors");

const getAllJobs = async (req, res) => {
  res.send("getAll Job");
};

const getSingleJob = async (req, res) => {
  res.send("getSingle Job");
};

const createJob = async (req, res) => {
  console.log(req.body);
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  res.send("update Job");
};
const deleteJob = async (req, res) => {
  res.send("delete Job");
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
};
