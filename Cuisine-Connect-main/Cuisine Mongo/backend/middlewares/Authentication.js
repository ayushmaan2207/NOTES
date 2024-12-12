const { CreateError } = require("../middlewares/ErrorHandling");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const authenticateuser = async (req, res, next) => {
    const { email, password } = req.body;

    // Admin credentials
    const AdminEmail = "admin@cuisine.org";
    const AdminPassword = "adminhere";

    if (email === AdminEmail && password === AdminPassword) {
        req.user = { 
            _id: "admin", 
            name: "Admin", 
            email: AdminEmail, 
            isAdmin: true 
        };
        return next();
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next(CreateError(401, "User not found"));
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return next(CreateError(401, "Invalid credentials"));
        }

        // Attach user details to req.user
        req.user = { 
            _id: user._id, // Use MongoDB's _id
            name: user.name, 
            email: user.email, 
            isAdmin: false // Assume regular user unless explicitly indicated in schema
        };

        return next();
    } catch (error) {
        return next(CreateError(500, "Internal Server Error"));
    }
};

module.exports = authenticateuser;
