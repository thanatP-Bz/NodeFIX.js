const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({});

module.exports = mongoose.model("", dataSchema);
