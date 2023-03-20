const express = require('express');
const profileRouter = express.Router();
const { getAllProfiles, getOneProfile, postNewProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const Profile = require('../models/profileModel.js');
const upload = require('../middleware/multerMiddleware.js');
const fs = require('fs');
const path = require('path');

// All routes are prepended with /profile
profileRouter.route('/')
    .get(getAllProfiles)
    .post(postNewProfile);

// All routes are prepended with /profile/:profileId
profileRouter.route('/:profileId')
    .get(getOneProfile)
    .put(updateProfile)
    .delete(deleteProfile);

profileRouter.post('/:profileId/upload', upload.single('profileImg'), async (req, res, next) => {
    console.log(req.file);
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.profileId, {profileImg: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png | image/jpeg | image/jpg'
    }}, {new: true});
    res.status(201).send(updatedProfile);

})

// Export
module.exports = profileRouter;