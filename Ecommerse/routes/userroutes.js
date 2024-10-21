// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// User Dashboard
router.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/'); // Redirect to home if not logged in
    }
    res.render('dashboard', { userId: req.session.userId });
});

// Other user routes for registration/login would go here...

module.exports = router;
