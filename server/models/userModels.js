const mongoose = require("mongoose");
const {isEmail, isStrongPassword} = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Enter an e-mail"],
		unique: true,
		validate: [isEmail, "Enter a valid e-mail"],
	},

	username: {
		type: String,
		required: [true, "Enter a username"],
		unique: true,
	},

	password: {
		type: String,
		required: [true, "Enter a password"],
		validate: [isStrongPassword, "Password too weak"],
	},

	profile_picture: {
		type: String
	},
});

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
