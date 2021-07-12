const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModels");
// const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;
const {
  dataUri
} = require("../middleware/multerMiddleware");
const {
  uploader
} = require("cloudinary");


const errHandler = err => {
  if (err) {
    return err;
  }
}


// const getPost = async (req, res) => {
//   console.log(req.headers)
//   const ids = req.header.ids;
//   try {
//     const posts = await Post.find({
//       '_id': {
//         $in: [ids]
//       }
//     })
//     if (posts) res.status(200).json(posts);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }



const getPost = async (req, res) => {
  console.log(req.headers)
  await Post.find({
    '_id': {
      $in: req.params.album
    }
  }, (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
}



const createPost = async (req, res) => {
  let id;

  const {
    description,
    picture,
    location
  } = req.body;


  try {
    Post.create({
      description,
      picture,
      location
    }, function (err, post) {
      console.log(post)
      if (err) res.json(errHandler(err));
      User.findByIdAndUpdate(req.headers['user-id'], {
        $push: {
          album: post._id
        }
      }, {
        'useFindAndModify': false
      }, (err, doc) => {
        if (err) res.status(400).json(err);
        else {
          res.status(200).json(post._id)
        }
      })
    })



  } catch (err) {
    console.log(err)
  };

};

const editPost = async (req, res) => {
  var dataToUpdate = {};

  try {
    const post = await Post.findById(req.body.id);
    if (post) {
      for (const key in req.body) {
        if (req.body[key] !== '') {
          dataToUpdate[key] = req.body[key]
        }
      }
    }

    Post.findByIdAndUpdate(req.body.id, dataToUpdate, {
      'useFindAndModify': false
    }, (err, docs) => {
      if (err) res.status(400).json('Error updating the post.')
      else res.status(200).json('Post updated successfully.')
    })
  } catch (err) {
    res.status(400).json(err)
  }
};

const deletePost = async (req, res) => {
  try {
    const {
      id
    } = req.body;
    const post = await Post.findByIdAndDelete(id);

    res.status(200).json(
      "Deleted successfully!"
    );
  } catch (err) {
    res.status(400).json(err);
  }
};



const getAlbum = async (req, res) => {
  console.log(req.params.album, 'here');

  try {
    // console.log(JSON.parse(req.params.album), 'hello')
    const album = await Post.find({
      '_id': {
        $in: req.params.album.split(",")
      }
    })
    console.log(album, 'album')
    return res.json(album);
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

const getAllPosts = async (req, res) => {
  console.log(req.body, 'req getallposts')
  try {
    await Post.find({
      '_id': {
        $in: req.body.arrayOfAlbums
      }
    }, (err, docs) => {
      if (err) {
        console.log(err);
        res.status(400).json("Something went wrong.")
      } else res.status(200).json(docs)
    })
  } catch (err) {
    console.log(err)
  }
}



module.exports = {
  getPost,
  createPost,
  editPost,
  deletePost,
  getAlbum,
  getAllPosts
};