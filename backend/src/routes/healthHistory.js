const express = require('express');
const { getHealthHistory } = require('../controllers/healthHistoryController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the auth middleware
const router = express.Router();

// Route to fetch health history for a specific user (protected)
router.get('/:userId', authMiddleware, getHealthHistory); // Ensure only authenticated users can access this route

module.exports = router;
