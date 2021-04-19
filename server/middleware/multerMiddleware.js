const multer = require("multer");
const Datauri = require("datauri/parser");
const storage = multer.memoryStorage();
const profilePicture = multer({storage}).single("profile_picture");
const dUri = new Datauri();

const dataUri = req => dUri.format((req.file.originalname).toString(), req.file.buffer);



module.exports = {profilePicture, dataUri};