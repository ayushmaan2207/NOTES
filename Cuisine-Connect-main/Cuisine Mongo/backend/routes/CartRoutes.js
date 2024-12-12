const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const User = require('../models/User');
const Order = require('../models/Order'); 
const stripe = require('../middlewares/Stripe'); // Import Stripe
const handleToken = require('../middlewares/validToken');
const { CreateError } = require('../middlewares/ErrorHandling');

router.get('/cart', handleToken, async (req, res, next) => {
    const user = req.user; // User info from token

    try {
        // Find the cart for the user
        const cart = await Cart.findOne({ user: user.userId });

        // If the cart doesn't exist, pass an empty array for items and totalPrice as 0
        if (!cart) {
            return res.render('cart', { cart: [], totalPrice: 0 });
        }

        // Ensure that cart.items is an array even if it's empty
        res.render('cart', { cart: cart.items || [], totalPrice: cart.totalPrice || 0 });
    } catch (err) {
        next(err);
    }
});


// POST /cart: Add an item to the user's cart
router.post('/cart', handleToken, async (req, res, next) => {
    const { foodName, price, quantity } = req.body; // Get foodName, price, and quantity from the form
    const user = req.user; // User info from token

    try {
        // Ensure quantity is an integer and defaults to 1 if not provided
        const itemQuantity = parseInt(quantity) || 1;

        // Find the user's cart
        let cart = await Cart.findOne({ user: user.userId });

        if (!cart) {
            // If no cart exists, create a new one
            cart = new Cart({ user: user.userId, items: [] });
        }

        // Check if the item already exists in the cart
        const existingItem = cart.items.find(item => item.foodName === foodName);

        if (existingItem) {
            // If the item exists, update the quantity
            existingItem.quantity += itemQuantity;
        } else {
            // Otherwise, add a new item with the quantity
            cart.items.push({ foodName, price, quantity: itemQuantity });
        }

        // Recalculate the total price
        cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

        // Save the updated cart
        await cart.save();

        // Redirect back to the cart page
        res.redirect('/menu');
    } catch (err) {
        next(err);
    }
});


// POST /cart/remove: Remove an item from the user's cart
router.post('/cart/remove', handleToken, async (req, res, next) => {
    const { foodName } = req.body;
    const user = req.user; // User info from token

    try {
        const cart = await Cart.findOne({ user: user.userId });

        if (!cart) {
            return next(CreateError(404, 'Cart not found.'));
        }

        // Remove the item from the cart
        cart.items = cart.items.filter(item => item.foodName !== foodName);

        // Recalculate the total price
        cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

        // Save the updated cart
        await cart.save();

        // Redirect back to the cart page
        res.redirect('/cart');
    } catch (err) {
        next(err);
    }
});

// Increment item quantity
router.post('/cart/increment', handleToken, async (req, res, next) => {
    const { foodName } = req.body;
    const user = req.user;

    try {
        const cart = await Cart.findOne({ user: user.userId });
        
        if (!cart) {
            return res.redirect('/cart'); // If no cart exists, just redirect
        }

        // Find the item in the cart
        const item = cart.items.find(item => item.foodName === foodName);

        if (item) {
            item.quantity += 1; // Increment the quantity
        }

        // Recalculate the total price
        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

        await cart.save();

        res.redirect('/cart'); // Redirect back to cart
    } catch (err) {
        next(err);
    }
});

// Decrement item quantity
router.post('/cart/decrement', handleToken, async (req, res, next) => {
    const { foodName } = req.body;
    const user = req.user;

    try {
        const cart = await Cart.findOne({ user: user.userId });
        
        if (!cart) {
            return res.redirect('/cart'); // If no cart exists, just redirect
        }

        // Find the item in the cart
        const itemIndex = cart.items.findIndex(item => item.foodName === foodName);

        if (itemIndex !== -1) {
            const item = cart.items[itemIndex];

            // If quantity is greater than 1, decrement it
            if (item.quantity > 1) {
                item.quantity -= 1; // Decrement the quantity
            } else {
                // If quantity is 1, remove the item from the cart
                cart.items.splice(itemIndex, 1); // Remove the item from the cart
            }
        }

        // Recalculate the total price
        cart.totalPrice = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

        await cart.save();

        res.redirect('/cart'); // Redirect back to cart
    } catch (err) {
        next(err);
    }
});

router.get('/checkout', handleToken, async (req, res, next) => {
    const user = req.user; // User from the token

    try {
        // Fetch user's cart
        const cart = await Cart.findOne({ user: user.userId });

        if (!cart || cart.items.length === 0) {
            return res.redirect('/cart'); // Redirect to cart if no items
        }

        // Create line items for Stripe
        const lineItems = cart.items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.foodName,
                },
                unit_amount: Math.round(item.price * 100), // Convert to cents
            },
            quantity: item.quantity,
        }));

        // Create a Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: lineItems,
            success_url: `${req.protocol}://${req.get('host')}/success`,
            cancel_url: `${req.protocol}://${req.get('host')}/cart`,
            customer_email: user.email, // Add user email if available
        });

        // Save the order details
        const newOrder = new Order({
            user: user.userId,
            items: cart.items.map(item => ({
                foodName: item.foodName,
                price: item.price,
                quantity: item.quantity,
            })),
            totalPrice: cart.totalPrice,
            orderDate: new Date(),
            status: 'In Progress',  // Default status set to 'pending'
        });
        

        await newOrder.save();

        // Empty the user's cart
        cart.items = [];
        cart.totalPrice = 0;
        await cart.save();

        // Redirect to Stripe Checkout
        res.redirect(session.url);
    } catch (error) {
        next(error);
    }
});


router.get('/success',async (req, res, next) => {
    

        // Render the success page
    res.render('success');

});


router.get('/cancel', handleToken, (req, res) => {
    res.redirect('/cart');
});



module.exports = router;
