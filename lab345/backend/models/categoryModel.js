const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Category", categorySchema);
