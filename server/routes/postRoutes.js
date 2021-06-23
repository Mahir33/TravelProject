const router = require("express").Router();
const {
  multerUploads
} = require("../middleware/multerMiddleware");
const {
  getPost,
  createPost,
  editPost,
  deletePost,
  createComment,
} = require("../controllers/postController");
const verifyToken = require('../authentication/verifyToken');
const {
  uploadCloudinary
} = require('../middleware/cloudinaryMiddleware');

router.get("/post/get", verifyToken, getPost);
router.put("/post/create", verifyToken, uploadCloudinary, createPost);
router.put("/post/edit", verifyToken, uploadCloudinary, editPost);
router.delete("/post/delete", verifyToken, deletePost);

// Comment handling
router.post("/post/comment", createComment);

module.exports = router;