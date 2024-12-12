const User = require('../models/User'); 
const { CreateError } = require('./ErrorHandling'); 

const userpresent = async (req, res, next) => {
    let email = req.body.email;
    let admin = email === "admin@cuisine.org";

    // Check if the email belongs to the admin
    if (admin) {
        req.user = { email: "admin@cuisine.org", isAdmin: true }; 
        return next(); 
    }

    try {
        const user = await User.findOne({ email });
        if (user) {
            req.user = user;
            return next(); 
        }
        return next(CreateError(404, "User not found"));

    } catch (error) {
        return next(CreateError(500, "Internal server error"));
    }
};

module.exports = userpresent;
