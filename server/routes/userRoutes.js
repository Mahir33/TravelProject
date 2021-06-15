const router = require("express").Router();
const {
    signup,
    login,
    getUser
} = require("../controllers/userControllers");
const {
    upload_img
} = require("../middleware/multerMiddleware");
var verifyToken = require('../controllers/VerifyToken');

router.post("/signup", upload_img, signup);
router.post("/login", login);

// parameter has to be a key relevant to the database! Learned the hard way.
router.get("/user/:username", verifyToken, getUser);

// Get a post from a user
router.get("/:username/:post");

module.exports = router;