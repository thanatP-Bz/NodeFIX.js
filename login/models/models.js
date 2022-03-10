const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  title: String,
  job: String,
});

module.exports = mongoose.model("test", dataSchema);
