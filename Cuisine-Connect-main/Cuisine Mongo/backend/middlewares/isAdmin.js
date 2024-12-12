const jwt = require("jsonwebtoken");
require('dotenv').config(); 

const adminAuth = (req, res, next) => {
    const token = req.cookies.token; // Assuming token is stored in a cookie

    if (!token) {
        return res.status(401).send(`
            <script>
                alert("Access denied. Please log in.");
                window.location.href = "/login";
            </script>
        `);
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if user is an admin
        if (!decoded.isAdmin) {
            return res.status(403).send(`
                <script>
                    alert("Unauthorized access.");
                    window.location.href = "/Home";
                </script>
            `);
        }

        // Add user info to the request object for further use if needed
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).send(`
            <script>
                alert("Invalid token. Please log in again.");
                window.location.href = "/login";
            </script>
        `);
    }
};

module.exports = adminAuth;
