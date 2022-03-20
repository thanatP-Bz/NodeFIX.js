const { StatusCodes } = require("http-status-codes");

const uploadImage = async (req, res) => {
  res.send("upload");
};

module.exports = {
  uploadImage,
};
