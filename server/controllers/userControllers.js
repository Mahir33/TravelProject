const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const {
	dataUri
} = require("../middleware/multerMiddleware");
const {
	uploader
} = require("cloudinary");

const signup = async (req, res) => {
	const {
		email,
		username,
		password
	} = req.body;

	try {
		const user = await User.create({
			email,
			username,
			password,
		});

		res.status(201).json({
			message: "User created!",
			user: user._id
		});

	} catch (err) {
		res.status(400).json(err);
	}
};

const login = async (req, res) => {
	const {
		email,
		password
	} = req.body;

	try {
		const user = await User.findOne({
			email
		});

		if (user) {
			const auth = await bcrypt.compare(password, user.password);

			if (auth) {
				res.status(200).json({
					message: "Successfully logged in!",
					user
				});
			}

			res.status(402).json({
				message: "Incorrect password!"
			});
		}

		res.status(402).json({
			message: "E-mail does not exist!"
		});
	} catch (err) {}
};

// Temporary testing
const getUser = async (req, res) => {
	const {
		username
	} = req.params;
	const user = await User.findOne({
		username
	});
	res.send({
		user
	});
};

module.exports = {
	signup,
	login,
	getUser
};