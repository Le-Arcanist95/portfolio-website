const express = require('express');
const profileRouter = express.Router();
const { getAllProfiles, getOneProfile, postNewProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const Image = require('../models/imageModel');
const Profile = require('../models/profileModel');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage });


// All routes are prepended with /profile
profileRouter.route('/')
    .get(getAllProfiles)
    .post(postNewProfile);

// All routes are prepended with /profile/:profileId
profileRouter.route('/:profileId')
    .get(getOneProfile)
    .put(updateProfile)
    .delete(deleteProfile);

// Export
module.exports = profileRouter;