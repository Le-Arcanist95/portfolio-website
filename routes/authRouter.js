// Import Express
const express = require('express');
const authRouter = express.Router();
const { register, login } = require('../controllers/authController.js');

// Create routes for login and register
authRouter.post('/register', register);
authRouter.post('/login', login);

// Export
module.exports = authRouter;