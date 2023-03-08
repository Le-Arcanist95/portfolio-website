// Import model -- Also include jwt for Authorization
const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');

// Register
exports.register = (req, res, next) => {
    // Check if user already exists in DB using findOne
    User.findOne({ username: req.body.username.toLowerCase() }, (err, existingUser) => {
        // Extract username, password, and email from req.body submission
        const { username, password, email } = req.body;
        
        // Handle errors for existing users, missing input data, and server
        if(err) {
            res.status(500)
            return next(err)
        }
        if(existingUser !== null) {
            res.status(403)
            return next(new Error('That username already exists.'))
        }
        if(!username, !password, !email) {
            res.status(403)
            return next(new Error('Please fill out all of the fields.'))
        }

        // Create new user model in DB
        const newUser = new User({username, password, email});
        newUser.save()
        return res.status(201).send({user: newUser.withoutPassword()})
    })
}

// Login
exports.login = (req, res, next) => {
    // Find user
    User.findOne({ username: req.body.username.toLowerCase() }, (err, foundUser) => {
        // Handle errors for missing user, missing input data, and server
        if(err) {
            res.status(500)
            return next(err)
        }
        if(!foundUser) {
            res.status(403)
            return next(new Error('Username or password is incorrect.'))
        }
        if(!req.body.username, !req.body.password) {
            res.status(403)
            return next(new Error('Please fill out all of the fields.'))
        }

        // Check password
        foundUser.comparePassword(req.body.password, (err, isMatch) => {
            // Handle errors for incorrect password and server
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!isMatch) {
                res.status(403)
                return next(new Error('Username or password is incorrect.'))
            }
            const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET);
            return res.status(200).send({token, user: foundUser.withoutPassword()})
        })
    })
}