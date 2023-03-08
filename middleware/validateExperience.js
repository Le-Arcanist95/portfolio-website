const validateExperience = (req, res, next) => {
    // Extract experience data from req.body
    const { title, company, location, from, to, current, description } = req.body;

    // Handle errors for missing experience data and server
    if(!title, !company, !location, !from, !to, !current, !description) {
        res.status(403)
        return next(new Error('Please fill out all of the fields.'))
    }

    // Continue to next middleware
    next();
}

// Export
module.exports = validateExperience;