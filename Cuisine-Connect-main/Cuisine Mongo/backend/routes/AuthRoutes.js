const express = require('express');
const router = express.Router();
const authenticateuser = require('../middlewares/Authentication'); 
const userpresent = require("../middlewares/UserPresent");
const jwt = require('jsonwebtoken');

// Render login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Logout route
router.get('/logout', (req, res) => {
    res.clearCookie('token', { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',  
    });

    res.redirect('/');
});

// Login route
router.post('/login', userpresent, authenticateuser, (req, res, next) => {
    try {
        const user = req.user; // The authenticated user object

        // Generate JWT token with user details
        const token = jwt.sign(
            { 
                userId: user._id, // Use _id instead of id
                email: user.email, 
                name: user.name, 
                isAdmin: user.isAdmin 
            },
            process.env.JWT_SECRET,
        );

        // Send the token as a cookie
        res.cookie('token', token, { 
            httpOnly: true, 
            sameSite: "Strict", // Prevent CSRF
            secure: process.env.NODE_ENV === 'development', 
            maxAge: 3600000  // 1 hour expiration
        });

        // Redirect based on user role
        if (user.isAdmin) {
            return res.redirect('/admin');
        }

        return res.redirect('/Home'); // Redirect after login success
    } catch (err) {
        next(err);  // Handle errors gracefully
    }
});

module.exports = router;
