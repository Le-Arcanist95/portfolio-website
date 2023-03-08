const validateProfile = (req, res, next) => {
    // Extract profile data from req.body
    const { firstName, lastName, email, city, state, country, zip, bio, skills, github, linkedin, portfolio, resume } = req.body;

    // Handle errors for missing profile data and server
    if(!firstName, !lastName, !email, !city, !state, !country, !zip, !bio, !skills, !github, !linkedin, !portfolio, !resume) {
        res.status(403)
        return next(new Error('Please fill out all of the fields.'))
    }

    // Continue to next middleware
    next();
}

// Export
module.exports = validateProfile;