const mongoose = require("mongoose");
const commentSchema = require("./commentModel");

const postSchema = new mongoose.Schema({

  description: {
    type: String,
    required: false,
  },

  picture: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: [true, 'Enter the location of the picture.'],
  },
  date: {
    type: Date,
    default: new Date(),
  },
  comments: [commentSchema]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;