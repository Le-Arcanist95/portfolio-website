const express = require('express');
const profileRouter = express.Router();
const { getAllProfiles, getOneProfile, postNewProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const { validateProfile } = require('../middleware/validateProfile');

// All routes are prepended with /profile
profileRouter('/')
    .get(getAllProfiles)
    .post(validateProfile, postNewProfile);

// All routes are prepended with /profile/:profileId
profileRouter('/:profileId')
    .get(getOneProfile)
    .put(validateProfile, updateProfile)
    .delete(deleteProfile);

// Export
module.exports = profileRouter;