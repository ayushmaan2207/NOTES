const express = require('express');
const User = require('../models/User');
const validatecred = require('../middlewares/ValidCredentials');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure transporter
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    },
});

// Verify transporter
transporter.verify((error, success) => {
    if (error) {
        console.log("Transporter verification failed:", error);
    } else {
        console.log("Ready to send emails:", success);
    }
});

// Email sending function
const sendEmail = async ({ email }) => {
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Cuisine Connect - Signed up Successfully!!",
        html: `
            <h2>Welcome to Cuisine Connect!</h2>
            <p>Your account has been created successfully. Click <a href="${process.env.BASE_URL}/login">here</a> to log in.</p>
        `,
    };

    return transporter.sendMail(mailOptions);
};

// Render signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Handle user signup
router.post('/signup', validatecred, async (req, res, next) => {
    try {
        const newUser = req.newuser;

        // Save the new user to the database
        await newUser.save();

        // Create a JWT token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email }, // Payload
            process.env.JWT_SECRET // Secret key
        );

        // Send confirmation email
        try {
            await sendEmail({ email: newUser.email });
            console.log("Email sent successfully");
        } catch (emailError) {
            console.error("Error sending email:", emailError);
        }

        // Respond to the client
        res.status(201).send(`
            <script>
                alert('User created successfully');
                localStorage.setItem('token', '${token}'); // Store token in localStorage
                window.location.href = "/login"; // Redirect to login page
            </script>
        `);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
