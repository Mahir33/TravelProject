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
	},

	password: {
		type: String,
		required: [true, "Enter a password"],
		validate: [isStrongPassword, "Password too weak"],
	},

	profile_picture: {
		type: Buffer,
		data: Buffer,
	},
});

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({email});

	if (user) {
		const auth = await bcrypt.compare(password, user.password);

		if (auth) {
			return user;
		}

		throw Error("Incorrect password");
	}

	throw Error("Incorrect e-mail");
};

const User = mongoose.model("users", userSchema);

module.exports = User;
