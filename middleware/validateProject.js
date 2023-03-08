const validateProject = (req, res, next) => {
    // Extract project data from req.body
    const { title, description, image, github, deployed } = req.body;

    // Handle errors for missing project data and server
    if(!title, !description, !image, !github, !deployed) {
        res.status(403)
        return next(new Error('Please fill out all of the fields.'))
    }

    // Continue to next middleware
    next();
}

// Export
module.exports = validateProject;