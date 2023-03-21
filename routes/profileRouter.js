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

// All routes are prepended with /profile/:profileId/image
profileRouter.route('/:profileId/image')
    .post(upload.single('profileImg'), (req, res) => {
        const { originalname, mimetype, buffer } = req.file;
        const image = new Image({
            name: originalname,
            data: buffer.toString('base64'),
            contentType: mimetype
        });
        image.save()
        const profileId = req.params.profileId;
        Profile.findByIdAndUpdate(profileId, { profileImg: image._id })
            .then((profile) => {
                res.status(200).json({profile, image});
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

// Export
module.exports = profileRouter;