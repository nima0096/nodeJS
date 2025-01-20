const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Not started",
      enum: ["Not started", "In progress", "Completed"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
