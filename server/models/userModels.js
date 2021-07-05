const mongoose = require("mongoose");
const {
  isEmail,
  isStrongPassword
} = require("validator");
const bcrypt = require("bcrypt");
const Post = require('./postModel')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Enter an e-mail"],
    unique: true,
    validate: [isEmail, "Enter a valid e-mail"],
  },

  username: {
    type: String,
    required: [true, "Enter a username"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Enter a password"],
    validate: [isStrongPassword, "Password too weak"],
  },

  profilePicture: {
    type: String,
    default: "https://res.cloudinary.com/dciproject/image/upload/v1622193570/profile_vbcwpo.jpg",
  },
  location: {
    type: String,
    required: [false]
  },
  website: {
    type: String,
    required: [false]
  },
  bio: {
    type: String,
    required: [false]
  },
  album: [String], //Saves the id of the posts belonged to the user 
  followers: [String] //Array of followers id's
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;