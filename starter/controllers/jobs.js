const createJob = async (req, res) => {
  res.json(req.user);
  res.send("test");
};
const getAllJobs = async (req, res) => {
  res.send("getAll Job");
};
const getSingleJob = async (req, res) => {
  res.send("getSingle Job");
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
