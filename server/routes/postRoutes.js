const router = require("express").Router();
const { upload_img } = require("../middleware/multerMiddleware");
const { createPost, editPost } = require("../controllers/postController");

router.post("/post/create", upload_img, createPost);
router.put("/post/edit", editPost);

module.exports = router;
