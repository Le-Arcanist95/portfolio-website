// Import requires (dotenv, express, mongoose, cors, expressjwt, morgan, PORT, URI)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expressjwt = require('express-jwt');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name';
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
const app = express();

// Setup middleware (morgan, express.json, cors)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: corsOrigin, credentials: true}));

// Connect to Database
mongoose.set('strictQuery', true);
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, () => console.log( `Connected to MongoDB at ${URI}`));

// Connect routes and setup protected routes with expressjwt
app.use('/auth', require('./routes/auth'));
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/experience', require('./routes/experience'));

// Custom Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send({errMsg: err.message});
});

// PORT -- Listen
mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
});