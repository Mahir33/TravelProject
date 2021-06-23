const multer = require("multer");
const Datauri = require("datauri/parser");
const storage = multer.memoryStorage();
const upload = multer({
    dest: '../uploads/'
});
// const dUri = new Datauri();

const multerUploads = (req, res, next) => {
    console.log(req)
    if (req.files[0]) upload.single('avatar');
    next();
}



module.exports = {
    multerUploads
};