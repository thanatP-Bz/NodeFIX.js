const createJob = (req, res) => {
  res.send("create job");
};

const getAlljobs = async (req, res) => {
  res.send("get all jobs");
};

const getSingleJob = async (req, res) => {
  res.send("get sigle job");
};

const updateJob = async (req, res) => {
  res.send("update jobs");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

module.exports = {
  createJob,
  getAlljobs,
  getSingleJob,
  updateJob,
  deleteJob,
};
