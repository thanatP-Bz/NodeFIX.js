const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      require: [true, "Please provide company name"],
      maxLength: 50,
    },
    position: {
      type: String,
      require: [true, "Please provide position"],
      maxLength: 50,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "please provide user"],
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("job", jobSchema);
