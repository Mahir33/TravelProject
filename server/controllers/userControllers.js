const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const {
  dataUri
} = require("../middleware/multerMiddleware");
const {
  uploader
} = require("cloudinary");

const signup = async (req, res) => {
  const {
    email,
    username,
    password
  } = req.body;

  try {
    const user = await User.create({
      email,
      username,
      password,
    });

    res.status(201).json({
      message: "User created!",
      user: user._id,
    });
  } catch (err) {
    res.json(err);
  }
};

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const user = await User.findOne({
<<<<<<< HEAD
      email,
=======
      email
>>>>>>> b2b60e55387256f793c1e356f86bc2a58cdaa331
    });

    if (user) {
      const auth = await bcrypt.compare(password, user.password);

      if (auth) {
<<<<<<< HEAD
        res.json({ message: "Successfully logged in!", user });
      }

      res.json({ message: "Incorrect password!" });
    }

    res.json({ message: "E-mail does not exist!" });
=======
        res.status(200).json({
          message: "Successfully logged in!",
          user
        });
      }

      res.status(402).json({
        message: "Incorrect password!"
      });
    }

    res.status(402).json({
      message: "E-mail does not exist!"
    });
>>>>>>> b2b60e55387256f793c1e356f86bc2a58cdaa331
  } catch (err) {}
};

// Temporary testing
const getUser = async (req, res) => {
<<<<<<< HEAD
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    res.send({ user });
  } catch (err) {
    res.json(err);
  }
=======

  const {
    username
  } = req.params;
  const user = await User.findOne({
    username
  });
  console.log(user);
  res.send({
    user
  });
>>>>>>> b2b60e55387256f793c1e356f86bc2a58cdaa331
};

module.exports = {
  signup,
  login,
  getUser
};