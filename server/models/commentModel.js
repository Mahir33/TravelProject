const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  profile_picture: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
