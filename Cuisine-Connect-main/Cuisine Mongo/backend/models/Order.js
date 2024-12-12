const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    opinion: { type: String, required: true },
    adminRemark: { type: String } // Optional field for admin's reply
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            foodName: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    totalPrice: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
    status: { type: String, default: 'In Progress' },  // New status field
    review: ReviewSchema // Embed review schema
});

module.exports = mongoose.model('Order', orderSchema);
