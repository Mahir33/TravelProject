const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  authorEmail: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: new Date(),
  }
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = commentSchema;