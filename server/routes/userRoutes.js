const router = require("express").Router();
const {signup, login, getUser} = require("../controllers/userControllers");
const { profilePicture } = require("../middleware/multerMiddleware");

router.post("/signup", profilePicture, signup);
router.post("/login", login);
// parameter has to be a key relevant to the database! Learned the hard way.
router.get("/user/:username", getUser);

module.exports = router;
