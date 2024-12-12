const express = require('express');
const Order = require('../models/Order');  // Assuming the Order model is in 'models/Order.js'
const router = express.Router();

router.get('/admin/reviews', async (req, res, next) => {
    try {
        const ordersWithReviews = await Order.find({ 'review.rating': { $exists: true } })
            .populate('user', 'name email') // Populate user details if needed
            .sort({ orderDate: -1 }) // Sort by orderDate in descending order
            .exec();

        res.render('adminReviews', { orders: ordersWithReviews });
    } catch (error) {
        next(error);
    }
});


router.post('/admin/reviews/:id/reply', async (req, res, next) => {
    const orderId = req.params.id;
    const { adminRemark } = req.body;

    try {
        const order = await Order.findById(orderId);
        if (!order || !order.review) return res.status(404).send('Order or review not found');

        order.review.adminRemark = adminRemark; // Add the admin's reply
        await order.save();

        res.redirect('/admin/reviews');
    } catch (error) {
        next(error);
    }
});

module.exports = router;
