const mongoose = require("mongoose");

const financeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    purchase: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Purchase",
      unique: true,
    },
    sum: {
      type: Number,
      required: [true, "Please add a Sum value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Finance", financeSchema);
