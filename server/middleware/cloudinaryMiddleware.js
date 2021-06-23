const cloudinary = require('cloudinary').v2;
const path = require('path');



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

});

const uploadCloudinary = async (req, res, next) => {
    console.log(req.body)
    console.log(req.files.picture.tempFilePath)
    await cloudinary.uploader.upload(req.files.picture.tempFilePath, function (error, result) {
        if (error) console.log(error);
        req.body = Object.assign({
            ...req.body,
            "picture": result.url
        });
    })

    next();
}




module.exports = {
    uploadCloudinary
};