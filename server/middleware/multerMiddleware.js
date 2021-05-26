const multer = require("multer");
const Datauri = require("datauri/parser");
const storage = multer.memoryStorage();
const upload_img = multer({ storage }).single("upload_img");
const dUri = new Datauri();

const dataUri = req => dUri.format(req.file.originalname.toString(), req.file.buffer);

module.exports = { upload_img, dataUri };
