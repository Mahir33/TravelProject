const router = require("express").Router();
const {
  multerUploads
} = require("../middleware/multerMiddleware");
const {
  getPost,
  createPost,
  editPost,
  deletePost,
  getAlbum,
  getAllPosts,
  createComment,
} = require("../controllers/postController");
const verifyToken = require('../authentication/verifyToken');
const {
  uploadCloudinary
} = require('../middleware/cloudinaryMiddleware');

router.get("/get", verifyToken, getPost);
router.put("/create", verifyToken, uploadCloudinary, createPost);
router.put("/edit", verifyToken, uploadCloudinary, editPost);
router.delete("/delete", verifyToken, deletePost);


//album
router.get("/album/:album", verifyToken, getAlbum);

//Get all posts
router.put("/allposts", verifyToken, getAllPosts);

// Comment handling
// router.post("/post/comment", createComment);

module.exports = router;