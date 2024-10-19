const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const numberFunRoutes = require('./routes/numberFunRoutes');
const adventureRoutes = require('./routes/adventureRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/numberfun', numberFunRoutes);
app.use('/api/adventure', adventureRoutes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
