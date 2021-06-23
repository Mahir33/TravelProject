const router = require("express").Router();
const {
    signup,
    login,
    getUser,
    updateUser
} = require("../controllers/userControllers");

var verifyToken = require('../authentication/verifyToken');
const {
    uploadCloudinary
} = require('../middleware/cloudinaryMiddleware');




router.post("/signup", signup);
router.post("/login", login);

// parameter has to be a key relevant to the database! Learned the hard way.
router.get("/user/:username", verifyToken, getUser);

// Get a post from a user
router.get("/:username/:post");

//Update user
router.put("/user/update", verifyToken, uploadCloudinary, updateUser);

module.exports = router;