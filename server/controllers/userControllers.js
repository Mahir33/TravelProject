const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const { dataUri } = require("../middleware/multerMiddleware");
const { uploader } = require("cloudinary");

const errHandler = err => {
  if (err.keyValue) {
    if (err.keyValue.email) return { message: "Email already exists!" };
    if (err.keyValue.username) return { message: "Username already exists!" };
  } else if (err.errors.password) {
    return { message: "Password too weak!" };
  } else {
    return err;
  }
};

const signup = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await User.create({
      email,
      username,
      password,
    });

    res.status(201).json({
      message: "User created!",
      username: user.username,
      email: user.email,
      id: user._id,
    });
  } catch (err) {
    res.json(errHandler(err));
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });

    if (user) {
      const auth = await bcrypt.compare(password, user.password);

      if (auth) {
        res.status(200).json({
          message: "Successfully logged in!",
          username: user.username,
          email: user.email,
          id: user._id,
        });
      } else {
        res.json({ message: "Incorrect password!" });
      }
    } else {
      res.json({ message: "E-mail does not exist!" });
    }
  } catch (err) {
    res.json(err);
  }
};

// Temporary testing
const getUser = async (req, res) => {
  try {
    const user = await User.findOne(
      req.params
    );
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  signup,
  login,
  getUser,
};
