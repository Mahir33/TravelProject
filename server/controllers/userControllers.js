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
// const getUser = async (req, res, next) => {
//   try {
//     const user = await User.findOne(
//       req.params
//     );
//     res.json(user);
//   } catch (err) {
//     res.json(err);
//   }

// };

const getUserByName = async (req, res) => {
  console.log(req.params)
  try {
    const usersByName = await User.find({
      username: req.params.username
    })
    delete usersByName[0].password;
    res.json(usersByName)
  } catch (err) {
    res.json(err)
  }
}



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


      await User.findByIdAndUpdate(req.headers['user-id'], dataToUpdate, {
        'new': true,
        'useFindAndModify': false
      }, function (err, docs) {
        if (err) {
          console.log(err);
          res.status(400).json('Error updating the user.')
        } else {
          res.status(200).json(docs)
          console.log('Updated User: ', docs)
        };
      })
    }
  } catch (err) {
    console.log(err)
  }

}



const searchUserByName = async (req, res) => {
  const regex = req.params.username;

  try {
    const usersFound = await User.find({
      username: {
        $regex: `${regex}` + '{1,}?'
      }
    })
    res.json(usersFound)
  } catch (err) {
    res.json(err)
  }
}


const followUser = async (req, res) => {
  try {
    const user = await User.findById(req.headers['user-id']);
    if (user) {
      if (user.following.includes(req.body.toFollowId)) {
        res.status(400).json('You already follow this person.')
      } else if (req.headers['user-id'] === req.body.toFollowId) {
        res.status(400).json("You can't follow yourself.")
      } else {
        await User.findByIdAndUpdate(req.headers['user-id'], {
          $addToSet: {
            following: req.body.toFollowId
          }
        }, {
          'new': true,
          'useFindAndModify': false
        }, function (err, docs) {
          if (err) {
            console.log(err);
            res.status(400).json('Error following the user.')
          } else {
            res.status(200).json(docs)
            console.log('Updated User: ', docs)
          };
        })
      }
    }
  } catch (err) {
    console.log(err);
  }
}

const addFollowerToUser = async (req, res) => {
  try {
    //adds the id of the person who followed to the followers of the just followed person
    await User.findByIdAndUpdate(req.body.userToAddFollower, {
      $addToSet: {
        followers: req.headers['user-id']
      }
    }, {
      'new': true,
      'useFindAndModify': false
    }, function (err, docs) {
      if (err) {
        res.json('Error adding id to follower of user just followed')
      } else {
        res.status(200).json(docs)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const unfollowUser = async (req, res) => {
  try {
    const user = await User.findById(req.headers['user-id']);
    if (user) {
      if (!user.following.includes(req.body.toUnfollowId)) {
        console.log("You don't follow this person")
        res.json("You don't follow this person.");
      } else if (req.headers['user-id'] === req.body.toUnfollowId) {
        console.log("You can't unfollow yourself.")
        res.json("You can't unfollow yourself.")
      } else {
        const index = await user.following.indexOf(req.body.toUnfollowId);
        let following = await user.following;
        await following.splice(index, 1);
        await User.findByIdAndUpdate(req.headers['user-id'], {
          following: following
        }, {
          'new': true,
          'useFindAndModify': false
        }, function (err, docs) {
          if (err) {
            console.log(err);
            res.status(400).json('Error unfollowing the user.')
          } else {
            res.status(200).json(docs)
            console.log('Updated User: ', docs)
          };
        })
      }
    }
  } catch (err) {
    console.log(err)
  }
}

const removeFollowerFromUser = async (req, res) => {
  console.log('works')
  try {
    const user = await User.findById(req.body.userToRemoveFollower);
    if (user) {
      if (!user.followers.includes(req.headers['user-id'])) {
        res.json("You don't follow this person")
      } else if (req.headers['user-id'] === req.body.userToRemoveFollower) {
        res.json("You can't unfollow yourself")
      } else {
        const index = await user.followers.indexOf(req.header['user-id']);
        let followers = await user.followers;
        await followers.splice(index, 1);
        await User.findByIdAndUpdate(req.body.userToRemoveFollower, {
          followers: followers
        }, {
          'new': true,
          'useFindAndModify': false
        }, function (err, docs) {
          if (err) {
            console.log(err);
            res.status(400).json("Error setting followers of the user")
          } else {
            res.status(200).json(docs)
          }
        })
      }
    }

  } catch (err) {
    console.log(err)
  }
}

const getAllFollowings = async (req, res) => {
  //req.body = array of followings
  // console.log(req.body)
  let arr = [];
  try {
    let promise = new Promise(function (resolve, reject) {
      req.body.arrayOfFollowings.map((id) => {
        const user = User.findById(id);
        if (user) {
          console.log(user)
          arr.push(user);
        }
      })
      resolve(arr)
    })

    promise.then((arr) => {
      console.log(arr, 'array result')
      if (arr.length > 0) {
        res.status(200).json(arr);
      }
    })
  } catch (err) {
    res.status(400).json('Something went wrong')
    console.log(err);
  }

}




module.exports = {
  signup,
  login,
  // getUser,
  updateUser,
  getUserByName,
  searchUserByName,
  followUser,
  unfollowUser,
  addFollowerToUser,
  removeFollowerFromUser,
  getAllFollowings
};