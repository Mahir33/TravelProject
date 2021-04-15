const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

// temp stuff
const path = require("path");

// Initialize APP and PORT
const app = express();
const PORT = process.env.PORT || 3001;

// temp public
const PUBLIC = path.join(__dirname, "public");
app.use(express.static("public"));

// Connect to the databse
const MongoURI = process.env.MONGO_URI;

mongoose
	.connect(MongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(app.listen(PORT, () => console.log(`We're connected on port: ${PORT}`)))
	.catch(err => console.log(err));

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(userRoutes);
