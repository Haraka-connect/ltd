const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Initialize environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Initialize express
const app = express();

// Middleware
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
const servicesRoutes = require('./routes/services');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/services', servicesRoutes);

// Port for the server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});