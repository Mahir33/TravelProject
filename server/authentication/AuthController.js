var express = require('express');
var router = express.Router();
require('dotenv').config();
router.use(express.urlencoded({
    extended: false
}));
router.use(express.json());
var User = require('../user/UserModel');

var verifyToken = require('../controllers/VerifyToken');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');



//Creates a new user
router.post('/register', function (req, res) {
    console.log(req.body);

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem registering the user.")
            // create a token
            var token = jwt.sign({
                id: user._id
            }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({
                auth: true,
                token: token
            });
        });
});


//Finds a user by verification Token
router.get('/me', verifyToken, function (req, res, next) {

    //password: 0 -> doesn't return the password
    User.findById(req.userId, {
        password: 0
    }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });

});



//Login
router.post('/login', function (req, res) {

    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({
            auth: false,
            token: null
        });

        var token = jwt.sign({
            id: user._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({
            auth: true,
            token: token
        });
    });

});


//Logout
router.get('/logout', function (req, res) {
    res.status(200).send({
        auth: false,
        token: null
    });
});


module.exports = router;