// Import Mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema - Must include:
    // Project Name
    // Project Description
    // Project Skills - Array of Strings
    // Project Image
    // Project Link
    // User (ref: User)
const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    projectSkills: {
        type: [String],
        required: true
    },
    projectImage: {
        type: String,
        required: true
    },
    projectLink: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

// Export Model
module.exports = mongoose.model('Project', projectSchema);