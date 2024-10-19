const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');


router.post('/signin',
    [
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if the user exists
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid email or password' });
            }

            // Check if the password matches
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid email or password' });
            }

            // Optional: Generate a JWT token (if you want to use JWT for authentication)
            // const payload = {
            //     user: {
            //         id: user.id
            //     }
            // };
            // jwt.sign(
            //     payload,
            //     'yourSecretKey',
            //     { expiresIn: 3600 },
            //     (err, token) => {
            //         if (err) throw err;
            //         res.json({ token });
            //     }
            // );

            // Send response upon successful login
            res.json({ msg: 'Login successful' });

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
