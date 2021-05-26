const Post = require("../models/postModel");
const { dataUri } = require("../middleware/multerMiddleware");
const { uploader } = require("cloudinary");

const createPost = async (req, res) => {
  try {
    const { title, desc } = req.body;

    const file = await dataUri(req).content;
    const upload = await uploader.upload(
      file,
      err => {
        if (err) console.error(err);
      },
      { folder: "posts" }
    );

    const post_img = upload.secure_url;

    const post = await Post.create({
      title,
      desc,
      img: post_img,
    });

    res.status(201).json({ msg: "Post created!", id: post._id });
  } catch (err) {
    res.json(err);
  }
};

const editPost = async (req, res) => {
  try {
    const { title, desc, img, id } = req.body;

    const post = await Post.findOneAndReplace({ _id: id }, { title, desc, img });
    res.json({ msg: "Updated sucessfully!", result: post });
  } catch (err) {
    res.json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.body;
    const post = await Post.findByIdAndDelete(id);

    res.json({ msg: "Deleted sucessfully!", result: post });
  } catch (err) {
    res.json(err);
  }
};

module.exports = { createPost, editPost, deletePost };
