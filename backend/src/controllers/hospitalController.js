require('dotenv').config();
const axios = require('axios');

// Fetch nearby hospitals using Google Places API
const getNearbyHospitals = async (req, res) => {
  const { latitude, longitude } = req.query; // Get lat and long from query parameters
  const radius = 5000; // radius in meters
  const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Use environment variable

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and Longitude are required' });
  }

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
      params: {
        location: `${latitude},${longitude}`,
        radius,
        type: 'hospital',
        key: apiKey,
      },
    });

    const hospitals = response.data.results;
    res.status(200).json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Failed to fetch hospitals' });
  }
};

// Optional: Fetch all hospitals from the database (if you still want this function)
const getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.findAll();
    res.status(200).json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Failed to fetch hospitals' });
  }
};

module.exports = { getNearbyHospitals, getHospitals };
