const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
