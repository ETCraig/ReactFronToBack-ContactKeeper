const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get Logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('Get Logged in User.');
});

// @route   Post api/auth
// @desc    Authenticate User & get Token
// @access  Private
router.post('/', (req, res) => {
    res.send('Log in User.');
});

module.exports = router;