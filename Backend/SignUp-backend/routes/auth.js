const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('./models/User');
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");


// Signup Route
router.post('/signup',
    [
        body('name', 'Name is required').notEmpty(),
        body('phone', 'Please enter a valid phone number').isMobilePhone(),
        body('email', 'Please enter a valid email').isEmail(),
        body('password', 'Password must be at least 8 characters').isLength({ min: 8 }),
        body('confirmPassword', 'Confirm Password is required').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, phone, email, password } = req.body;

        try {
            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Create a new user instance
            user = new User({ name, phone, email, password });

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Save user to the database
            await user.save();

            res.json({ msg: 'User registered successfully' });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
