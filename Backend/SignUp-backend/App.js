const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/signupDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(err);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
