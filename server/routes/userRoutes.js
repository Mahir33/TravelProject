const router = require("express").Router();
const {
    signup,
    login,
    // getUser,
    updateUser,
    getUserByName,
    searchUserByName,
    followUser,
    unfollowUser,
    addFollowerToUser,
    removeFollowerFromUser
} = require("../controllers/userControllers");

const {
    createPost
} = require("../controllers/postController");

var verifyToken = require('../authentication/verifyToken');
const {
    uploadCloudinary
} = require('../middleware/cloudinaryMiddleware');




router.post("/signup", signup);
router.post("/login", login);

// parameter has to be a key relevant to the database! Learned the hard way.
router.get("/user/:username", verifyToken, getUserByName);
router.get("/search/:username", verifyToken, searchUserByName);

// Get a post from a user
// router.get("/:username/:post");

//Update user
router.put("/user/update", verifyToken, uploadCloudinary, updateUser);

//Follow an user by id
router.put("/user/follow", verifyToken, followUser)

//Add follower to user
router.put("/user/addfollower", verifyToken, addFollowerToUser);

//Unfollow an user by id
router.put("/user/unfollow", verifyToken, unfollowUser);

//Remove follower from user
router.put("user/remove/follower", verifyToken, removeFollowerFromUser);

module.exports = router;