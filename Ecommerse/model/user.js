// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    orders: Array // Store order history here
});

module.exports = mongoose.model('User', userSchema);
