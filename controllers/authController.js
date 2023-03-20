// Import model -- Also include jwt for Authorization
const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res, next) => {
    try {
        const { username, password, email } = req.body;
        const foundUser = await User.findOne({ username: req.body.username.toLowerCase() })
        console.log(foundUser)
        if(foundUser) {
            res.status(403)
            return next(new Error('Username already exists.'))
        }
        if(!username, !password, !email) {
            res.status(403)
            return next(new Error('Please fill out all of the fields.'))
        }
        const newUser = new User({ username: username.toLowerCase(), password, email });
        await newUser.save();
        return res.status(201).send(newUser.withoutPassword())
        
    }
    catch(err) {
        res.status(500)
        return next(err)
    }
}

// Login
exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const foundUser = await User.findOne({ username: req.body.username.toLowerCase() })
        if(!foundUser) {
            res.status(403)
            return next(new Error('Username or password is incorrect.'))
        }
        if(!username, !password) {
            res.status(403)
            return next(new Error('Please fill out all of the fields.'))
        }
        foundUser.comparePassword(password, (err, isMatch) => {
            if(err) {
                res.status(403)
                return next(new Error('Username or password is incorrect.'))
            }
            if(isMatch) {
                const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET);
                return res.status(200).send({ token, user: foundUser.withoutPassword() });
            }
        })
    }
    catch(err) {
        res.status(500)
        return next(err)
    }
}