const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');
const setupSocket = require('./utils/socket');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();
const server = http.createServer(app);

// Setup WebSocket
const io = setupSocket(server);
app.use((req, res, next) => {
    req.io = io;
    next();
});

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Routes
const contactRoutes = require('./Routes/contactRoutes');
const viewRoutes = require('./Routes/viewRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/views', viewRoutes);

// Route not found handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
