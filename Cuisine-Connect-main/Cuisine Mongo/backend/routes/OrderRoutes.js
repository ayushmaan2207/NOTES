const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); 
const handleToken = require('../middlewares/validToken');

const HeaderContent = ["Home", "Menu", "About", "Contact"];


router.get('/orders', handleToken, async (req, res, next) => {
    const user = req.user;

    try {
        // Fetch all orders for the user
        const orders = await Order.find({ user: user.userId }).sort({ orderDate: -1 });

        // Render the orders page
        res.render('order', { orders ,header: HeaderContent,user});
    } catch (error) {
        next(error);
    }
});

router.get('/orders/:id/review', handleToken, async (req, res, next) => {
    const orderId = req.params.id;
    const user = req.user;


    try {
        // Fetch the order details
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).send('Order not found');
        }

        // Render the review form
        res.render('review', { order,header: HeaderContent,user });
    } catch (error) {
        next(error);
    }
});

router.post('/orders/:id/review', handleToken, async (req, res, next) => {
    const orderId = req.params.id;
    console.log(orderId); // Debug: Log the orderId to confirm it's being passed correctly

    const { rating, opinion } = req.body;

    try {
        // Update the order with the submitted review
        const order = await Order.findById(orderId);
        if (!order) return res.status(404).send('Order not found');

        order.review = { rating, opinion }; // Add review details
        await order.save();

        res.redirect('/orders'); // Redirect back to the orders page
    } catch (error) {
        next(error);
    }
});


module.exports = router;
