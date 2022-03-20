const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
