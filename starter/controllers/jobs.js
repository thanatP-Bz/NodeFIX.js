const Jobs = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Jobs.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ jobs });
};

const getJob = async (req, res) => {
  console.log("gt jobs");
};

const createJobs = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Jobs.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJobs = async (req, res) => {
  console.log("update Jobs");
};

const deleteJobs = async (req, res) => {
  console.log("deleteJobs");
};

module.exports = {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJobs,
};
