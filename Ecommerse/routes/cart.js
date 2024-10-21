// routes/cartRoutes.js
const express = require('express');
const router = express.Router();

let cart = []; // Simple in-memory cart

// Get Cart
router.get('/', (req, res) => {
    res.render('cart', { cart });
});

// Add to Cart
router.post('/add', (req, res) => {
    const productId = req.body.productId;
    cart.push(productId);
    res.redirect('/cart');
});

// Clear Cart
router.post('/clear', (req, res) => {
    cart = [];
    res.redirect('/cart');
});

// Checkout - Simple Example
router.post('/checkout', (req, res) => {
    // Generate invoice logic can go here...
    res.send('Checkout Successful!');
});

module.exports = router;
