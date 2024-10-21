// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: "abcdefg", resave: false, saveUninitialized: true }));

// MongoDB Connection
mongoose.connect("mongodb+srv://sharad:123456aA@cluster0.lw0ubmy.mongodb.net/ecommerce?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// Routes
app.use('/', require('./routes/productRoutes'));
app.use('/user', require('./routes/userRoutes'));
app.use('/cart', require('./routes/cartRoutes'));

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
