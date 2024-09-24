const express = require('express');
const { getNearbyHospitals } = require('../controllers/hospitalController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the authMiddleware
const router = express.Router();

// Route for getting nearby hospitals, protected by authentication
router.get('/nearby', authMiddleware, getNearbyHospitals); 

module.exports = router;

