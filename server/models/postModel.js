const mongoose = require("mongoose");
const Comment = require("./commentModel");

const postSchema = new mongoose.Schema({
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

  comments: Array,
});

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
