const express = require('express');
const projectRouter = express.Router();
const { getAllProjects, getOneProject, postNewProject, updateProject, deleteProject } = require('../controllers/projectController');
const { validateProject } = require('../middleware/validateProject');

// All routes are prepended with /project
projectRouter('/')
    .get(getAllProjects)
    .post(validateProject, postNewProject);

// All routes are prepended with /project/:projectId
projectRouter('/:projectId')
    .get(getOneProject)
    .put(validateProject, updateProject)
    .delete(deleteProject);

// Export
module.exports = projectRouter;