const User = require("../models/userModels");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


var token;


const errHandler = err => {
  if (err.keyValue) {
    if (err.keyValue.email) return {
      message: "Email already exists!"
    };
    if (err.keyValue.username) return {
      message: "Username already exists!"
    };
  } else if (err.errors.password) {
    return {
      message: "Password too weak!"
    };
  } else {
    return err;
  }
};

const signup = async (req, res) => {
  const {
    email,
    username,
    password
  } = req.body;
  console.log(req.file)

  User.create({
      email,
      username,
      password
    },
    function (err, user) {
      if (err) return res.json(errHandler(err));

      //create a token
      token = jwt.sign({
        id: user.id
      }, process.env.SECRET, {
        expiresIn: 86400 //expires in 24 hours
      });
      res.status(200).send({
        message: "User created!",
        username: user.username,
        email: user.email,
        id: user.id,
        auth: true,
        token: token,
        user
      })
    })
};

const login = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const user = await User.findOne({
      email,
    });

    if (user) {
      const auth = await bcrypt.compare(password, user.password);

      if (auth) {
        token = jwt.sign({
          id: user.id
        }, process.env.SECRET, {
          expiresIn: 86400 //expires in 24 hours
        });

        user.password = null;

        res.status(200).json({
          message: "Successfully logged in!",
          auth: true,
          token: token,
          user
        });
      } else {
        res.json({
          message: "Incorrect password!"
        });
      }
    } else {
      res.json({
        message: "E-mail does not exist!"
      });
    }
  } catch (err) {
    res.json(err);
  }
};

// Temporary testing
const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne(
      req.params
    );
    res.json(user);
  } catch (err) {
    res.json(err);
  }

};


const updateUser = async (req, res) => {
  console.log(req.body)
  var dataToUpdate = {};

  try {
    const user = await User.findById(req.headers['user-id']);
    if (user) {

      for (const key in req.body) {
        // console.log('key' + key, 'req.body[key]' + req.body[key])
        if (key === 'picture') {
          dataToUpdate['profilePicture'] = req.body[key]
        } else
        if (req.body[key] !== '') {
          dataToUpdate[key] = req.body[key]
        }
      }


      User.findByIdAndUpdate(req.headers['user-id'], dataToUpdate, {
        'useFindAndModify': false
      }, function (err, docs) {
        if (err) {
          console.log(err);
          res.status(400).json('Error updating the user.')
        } else {
          res.status(200).json('User updated successfully.')
          console.log('Updated User: ', docs)
        };
      })
    }
  } catch (err) {
    console.log(err)
  }

}



module.exports = {
  signup,
  login,
  getUser,
  updateUser
};