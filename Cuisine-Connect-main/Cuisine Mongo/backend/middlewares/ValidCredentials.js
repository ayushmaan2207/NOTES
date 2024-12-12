const User = require('../models/User'); 
const { CreateError } = require('./ErrorHandling'); 

const validatecred = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(CreateError(417, "Expected credentials i.e. email, name, or password not given"));
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser ) {
            return next(CreateError(406, "User already present"));
        }        
        if (email=="admin@cuisine.org" ) {
            return next(CreateError(406, "email usage not allowed"));
        } 

        
        const newUser = new User({
            name,
            email,
            password,  // The password will be hashed by the schema before saving
        });

        // Store the new user object in the request for use in the next middleware
        req.newuser = newUser;

        next();
    } catch (error) {
        return next(CreateError(500, "Internal server error"));
    }
};

module.exports = validatecred;
