const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
	const {email, username, password, profile_picture} = req.body;
	console.log(req.body);

	try {
		const user = await User.create({
			email,
			username,
			password,
			profile_picture,
		});

		console.log("created");

		res.status(201).json({message: "User created!", user: user._id});
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};

module.exports = {signup};
