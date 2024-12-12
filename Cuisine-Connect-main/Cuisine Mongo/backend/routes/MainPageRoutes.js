const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { CreateError } = require('../middlewares/ErrorHandling');
const handleToken = require('../middlewares/validToken'); 

const HeaderContent = ["Home", "Menu", "About", "Contact"];

router.get('/', handleToken, async (req, res, next) => {
    const user = req.user || null; 
    try {
        const products = await Product.find(); 
        if (!products) {
            return next(CreateError(404, 'No products found.'));
        }
        res.render('food', { foods: products, header: HeaderContent, user });
    } catch (err) {
        next(err); 
    }
});

// Route for the Home page - accessible to all users, with token validation
router.get('/home', handleToken, async (req, res, next) => {
    const user = req.user || null; // If no token, user will be null
    try {
        const products = await Product.find(); 
        if (!products) {
            return next(CreateError(404, 'No products found.'));
        }
        res.render('food', { foods: products, header: HeaderContent, user });
    } catch (err) {
        next(err); 
    }
});

// Route for the Menu / contact /about page - protected route, only accessible with token
router.get('/Menu', handleToken, async (req, res, next) => {
    const user = req.user; // Attach user data
    try {
        const products = await Product.find(); 
        if (!products) {
            return next(CreateError(404, 'No products found.'));
        }
        res.render('menu', { foods: products, header: HeaderContent, user });
    } catch (err) {
        next(err); 
    }
});

router.get('/contact', handleToken, (req, res) => {
    const user = req.user; 
    res.render('contact', { header: HeaderContent, user });
});

router.get('/about', handleToken, (req, res) => {
    const user = req.user; 
    res.render('about', { header: HeaderContent, user });
});

router.get('/login', (req, res) => {
    res.render('login'); 
});

module.exports = router;
