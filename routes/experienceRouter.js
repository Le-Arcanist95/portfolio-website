const express = require('express');
const experienceRouter = express.Router();
const { getAllExperiences, getOneExperience, postNewExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');
const { validateExperience } = require('../middleware/validateExperience');

// All routes are prepended with /experience
experienceRouter('/')
    .get(getAllExperiences)
    .post(validateExperience, postNewExperience);


// All routes are prepended with /experience/:experienceId
experienceRouter('/:experienceId')
    .get(getOneExperience)
    .put(validateExperience, updateExperience)
    .delete(deleteExperience);

// Export
module.exports = experienceRouter;
