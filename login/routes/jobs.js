const express = require("express");
const router = express.Router();
const {
  createJob,
  getAlljobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").post(createJob).get(getAlljobs);
router.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

module.exports = router;
