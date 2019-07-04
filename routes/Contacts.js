const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all User's Contacts
// @access  Private
router.get('/', (req, res) => {
    res.send("Get User's Contacts");
});

// @route   Post api/contacts
// @desc    Add New Contacts
// @access  Private
router.post('/', (req, res) => {
    res.send('Create New Contact.');
});

// @route   PUT api/contacts/:id
// @desc    Update Contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send("Update Contact.");
});

// @route   Delete api/contacts/:id
// @desc    Delete Contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete Contact');
});

module.exports = router;