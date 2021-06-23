const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const axios = require('axios').default;
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const fileUpload = require('express-fileupload');


// Initialize APP and PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to the database
const MongoURI = process.env.MONGO_URI;



mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT, () => console.log(`We're connected on port: ${PORT}`)))
  .catch(err => console.log(err));

// middlewares
app.use(cors());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '../temp'
}));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, PUT")
  next();
});

app.options('*', cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// routes
// app.use("*", cloudinaryConfig);
app.use(userRoutes);
app.use(postRoutes);