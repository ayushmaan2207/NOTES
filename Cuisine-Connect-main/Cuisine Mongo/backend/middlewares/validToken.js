const jwt = require('jsonwebtoken');
const { CreateError } = require('./ErrorHandling');

const handleToken = (req, res, next) => {
    const token = req.cookies.token; // Retrieve token from cookies

    if ( req.originalUrl === '/') {
        return next(); // Allow access to / for all users, regardless of token
    }

    if (!token) {
        // If there's no token and trying to access protected routes, redirect to login
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user information to the request object
        next(); 
    } catch (error) {
        return next(CreateError(403, 'Invalid or expired token.'));
    }
};

module.exports = handleToken;
