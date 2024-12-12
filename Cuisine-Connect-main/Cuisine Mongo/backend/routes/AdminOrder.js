const express = require('express');
const Order = require('../models/Order');  // Assuming the Order model is in 'models/Order.js'
const router = express.Router();

// Route to list all orders for admin
router.get('/AdminOrder', async (req, res) => {
    try {
        // Fetch all orders from the database and sort by order date in descending order
        const orders = await Order.find().sort({ orderDate: -1 });

        // Render the orders on the 'adminOrders' page (or any other view you choose)
        res.render('adminOrders', { orders });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.patch('/update-status/:orderId', async (req, res) => {
    const { orderId } = req.params; // Get the order ID from the URL
    const { status } = req.body;   // Get the status from the request body

    if (!status) {
        return res.status(400).json({ message: 'Status is required' });
    }

    try {
        // Find the order by its ID
        const order = await Order.findById(orderId);
        
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Check if the status is valid
        const validStatuses = ['Pending', 'In Progress', 'Completed', 'Cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        // Update the order status
        order.status = status;
        await order.save(); // Save the updated order

        res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
