const router = require("express").Router();
const {signup, login, getUser} = require("../controllers/userControllers");

router.post("/signup", signup);
router.post("/login", login);
// parameter has to be a key relevant to the database! Learned the hard way.
router.get("/user/:username", getUser);

module.exports = router;
