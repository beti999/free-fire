// seed.js
const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
// Sample Products
const products = [
    {
        name: 'Classic Leather Jacket',
        price: 129.99,
        description: 'A stylish classic leather jacket perfect for any occasion.',
        image: 'https://example.com/leather-jacket.jpg'
    },
    {
        name: 'Wireless Bluetooth Headphones',
        price: 89.99,
        description: 'High-quality sound with noise cancellation.',
        image: 'https://example.com/headphones.jpg'
    },
    {
        name: 'Smart Watch',
        price: 199.99,
        description: 'Track your fitness and stay connected with notifications.',
        image: 'https://example.com/smart-watch.jpg'
    },
    {
        name: 'Gaming Laptop',
        price: 999.99,
        description: 'High performance for gaming and work.',
        image: 'https://example.com/gaming-laptop.jpg'
    },
    {
        name: 'Coffee Maker',
        price: 49.99,
        description: 'Brew your favorite coffee with ease.',
        image: 'https://example.com/coffee-maker.jpg'
    }
];

// Sample Users
const users = [
    {
        username: 'john_doe',
        password: 'password123',
        email: 'john@example.com',
        orders: []
    },
    {
        username: 'jane_smith',
        password: 'password456',
        email: 'jane@example.com',
        orders: []
    },
    {
        username: 'admin_user',
        password: 'adminpassword',
        email: 'admin@example.com',
        orders: []
    }
];

// Connect to MongoDB
mongoose.connect("mongodb+srv://sharad:123456aA@cluster0.lw0ubmy.mongodb.net/ecommerce?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected!');

        // Clear existing data
        await Product.deleteMany({});
        await User.deleteMany({});

        // Seed products
        await Product.insertMany(products);
        console.log('Products seeded!');

        // Seed users
        await User.insertMany(users);
        console.log('Users seeded!');

        mongoose.connection.close();
        console.log('Database connection closed.');
    })
    .catch(err => {
        console.error(err);
        mongoose.connection.close();
    });
