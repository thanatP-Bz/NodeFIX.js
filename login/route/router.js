const express = require("express");
const router = express.Router();
const { createName, getAllName, login } = require("../controllers/controllers");

router.route("/all").get(getAllName);
router.route("/create").post(createName);
router.route("/login").post(login);

module.exports = router;
