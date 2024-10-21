// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Home Page - Show Products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.render('index', { products });
});

// Product Details Page
router.get('/product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('product', { product });
});

module.exports = router;
