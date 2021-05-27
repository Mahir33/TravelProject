const router = require("express").Router();
const { upload_img } = require("../middleware/multerMiddleware");
const {
  createPost,
  editPost,
  deletePost,
  createComment,
} = require("../controllers/postController");

router.post("/post/create", upload_img, createPost);
router.put("/post/edit", editPost);
router.delete("/post/delete", deletePost);

// Comment handling
router.post("/post/comment", createComment);

module.exports = router;
